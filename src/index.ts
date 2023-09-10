import { Api } from '../__generated__/apis/tams'
import crypto from 'crypto'
import { fetch, Headers, Blob } from 'node-fetch-native'
import * as t from '../__generated__/apis/tams'

export { t }

type GetHeadersParams = {
  resource: URL | RequestInfo
  options?: RequestInit
  appId: string
}

interface AuthenticateStrategy {
  getHeaders(params: GetHeadersParams): Headers
}

export class Sha256RsaAuthenticateStrategy implements AuthenticateStrategy {
  constructor(private privateKey: string) {}

  getHeaders({ resource, options, appId }: GetHeadersParams) {
    const method = options?.method ?? 'GET'
    const url = new URL(resource.toString())
    const path = url.pathname + url.search
    const timestamp = Math.floor(Date.now() / 1000)
    const nonce = Math.random().toString(16).slice(2)
    const body = options?.body ? options.body.toString() : ''
    const content = `${method}\n${path}\n${timestamp}\n${nonce}\n${body}`
    const sign = crypto.createSign('RSA-SHA256')
    sign.update(content)
    const signature = sign.sign(this.privateKey, 'base64')
    return new Headers({
      authorization: `TAMS-SHA256-RSA app_id=${appId},nonce_str=${nonce},timestamp=${timestamp},signature=${signature}`,
    })
  }
}

type TamsSDKOptions = {
  appId: string
  authenticateStrategy: AuthenticateStrategy
  host?: string
}

export class TamsSDK {
  private api: Api<unknown>
  private appId: string
  private authenticateStrategy: AuthenticateStrategy
  private host: string

  constructor(options: TamsSDKOptions) {
    this.appId = options.appId
    this.authenticateStrategy = options.authenticateStrategy
    this.host = options.host ?? 'tams-api.tensor.art'
    this.api = new Api({
      baseUrl: `https://${this.host}`,
      customFetch: async (...fetchParams: Parameters<typeof fetch>) => {
        const headers = this.authenticateStrategy.getHeaders({
          resource: fetchParams[0],
          options: fetchParams[1],
          appId: this.appId,
        })
        fetchParams[1] = fetchParams[1] || {}
        const init = fetchParams[1]
        const nextHeaders = new Headers(init.headers || {})
        headers.forEach((v, k) => {
          nextHeaders.append(k, v)
        })
        fetchParams[1].headers = nextHeaders
        const resp = await fetch.apply(globalThis, fetchParams)
        return resp
      },
    })
  }

  get v1() {
    return this.api.v1
  }

  async uploadFile({
    file,
    expires,
    term,
  }: {
    file: Buffer | ReadableStream | File | Blob
    expires: number
    term?: 'SHORT' | 'LONG'
  }): Promise<{ resourceId: string }> {
    const resp = await this.api.v1.tamsApiV1ServiceCreateResourceImage({
      expireSec: `${expires}`,
      term: term === 'LONG' ? 2 : 1,
    })

    if (Buffer.isBuffer(file)) {
      file = new Blob([file])
    }

    const uploadResp = await fetch(resp.data.putUrl!, {
      headers: resp.data.headers as HeadersInit,
      body: file,
      method: 'PUT',
    })

    if (uploadResp.ok) {
      return {
        resourceId: resp.data.resourceId!,
      }
    }

    throw new Error(`upload file failed: ${uploadResp.statusText}`)
  }
}
