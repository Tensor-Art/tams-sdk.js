/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface CreateJobRequestStage {
  /**
   * stage type
   * stage type
   */
  type: TamsApiStageTypeT
  inputInitialize?: TamsApiInputInitializeInput
  diffusion?: TamsApiDiffusionInput
  imageToUpscaler?: TamsApiImageToUpscalerInput
  imageToAdetailer?: TamsApiImageToAdetailerInput
  imageToInpaint?: TamsApiImageToInpaintInput
}

/** @default "DEFAULT" */
export enum ImageToInpaintInputInpaintFillT {
  DEFAULT = 'DEFAULT',
  FILL = 'FILL',
  ORIGINAL = 'ORIGINAL',
  LATENT_NOISE = 'LATENT_NOISE',
  LATENT_NOTHING = 'LATENT_NOTHING',
}

/** @default "DEFAULT" */
export enum ImageToInpaintInputResizeModeT {
  DEFAULT = 'DEFAULT',
  JUST_RESIZE = 'JUST_RESIZE',
  CROP_AND_RESIZE = 'CROP_AND_RESIZE',
  RESIZE_AND_FILL = 'RESIZE_AND_FILL',
  JUST_RESIZE_LATENT_UPSCALE = 'JUST_RESIZE_LATENT_UPSCALE',
}

export interface LoraItem {
  loraModel?: string
  /** @format float */
  weight?: number
  /**
   * lora block weight, value such as \<weight\>:lbw=\<layer weight\>
   * example: "1:lbw=1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0"
   */
  blockWeight?: string
}

/** @default "DEFAULT" */
export enum ProjectModelTypeT {
  DEFAULT = 'DEFAULT',
  CHECKPOINT = 'CHECKPOINT',
  TEXTUAL_INVERSION = 'TEXTUAL_INVERSION',
  HYPERNETWORK = 'HYPERNETWORK',
  AESTHETIC_GRADIENT = 'AESTHETIC_GRADIENT',
  LORA = 'LORA',
  LOCON = 'LOCON',
  CONTROLNET = 'CONTROLNET',
  POSES = 'POSES',
  WILDCARDS = 'WILDCARDS',
  OTHER = 'OTHER',
  LYCORIS = 'LYCORIS',
}

export interface GooglerpcStatus {
  /** @format int32 */
  code?: number
  message?: string
  details?: ProtobufAny[]
}

export interface ProtobufAny {
  '@type'?: string
  [key: string]: any
}

/**
 * `NullValue` is a singleton enumeration to represent the null value for the
 * `Value` type union.
 *
 *  The JSON representation for `NullValue` is JSON `null`.
 *
 *  - NULL_VALUE: Null value.
 * @default "NULL_VALUE"
 */
export enum ProtobufNullValue {
  NULL_VALUE = 'NULL_VALUE',
}

export interface TamsApiAdetailerArg {
  /** @default "face_yolov8n.pt" */
  adModel?: string
  adPrompt?: TamsApiPrompt[]
  adNegativePrompt?: TamsApiPrompt[]
  /**
   * @format float
   * @default "face_yolov8n.pt"
   */
  adConfidence?: number
  /**
   * @format int32
   * @default "4"
   */
  adDilateErode?: number
  /** @default "None" */
  adMaskMergeInvert?: string
  /**
   * @format float
   * @default "0.4"
   */
  adDenoisingStrength?: number
  /** @default "true" */
  adInpaintOnlyMasked?: boolean
  /**
   * @format float
   * @default "32"
   */
  adInpaintOnlyMaskedPadding?: number
  /** @default "false" */
  adUseInpaintWidthHeight?: boolean
  /**
   * @format int32
   * @default "512"
   */
  adInpaintWidth?: number
  /**
   * @format int32
   * @default "512"
   */
  adInpaintHeight?: number
  /** @default "false" */
  adUseSteps?: boolean
  /**
   * @format int32
   * @default "20"
   */
  adSteps?: number
  /** @default "false" */
  adUseCfgScale?: boolean
  /**
   * @format float
   * @default "7"
   */
  adCfgScale?: number
  lora?: TamsApiLora
}

export interface TamsApiCancelJobResponse {
  /** @format uint64 */
  jobId?: string
}

export interface TamsApiControlnet {
  args?: TamsApiControlnetArgs[]
}

export interface TamsApiControlnetArgs {
  inputImageResourceId?: string
  mask?: string
  /**
   * The model to use for the controlnet preprocessor
   * support
   * @example {}
   */
  preprocessor: string
  /**
   * The model to use for the controlnet
   * support list: ["control_v11p_sd15_openpose","control_v11p_sd15_canny","control_v11f1p_sd15_depth","control_v11p_sd15_lineart","control_v11p_sd15s2_lineart_anime","control_v11p_sd15_mlsd","control_v11p_sd15_normalbae","control_v11p_sd15_scribble","control_v11p_sd15_softedge","control_v11p_sd15_seg","control_v11e_sd15_shuffle","t2iadapter_color_sd14v1","control_v11f1e_sd15_tile","control_v11e_sd15_ip2p","control_v1p_sd15_qrcode_monster","control_v1p_sd15_brightness", "None"]
   * @example {}
   */
  model: string
  /** @format float */
  weight?: number
  resizeMode?: string
  /** @format float */
  guidance?: number
  /** @format float */
  guidanceStart?: number
  /** @format float */
  guidanceEnd?: number
  controlMode?: string
  pixelPerfect?: boolean
  preprocessorParams?: object
}

export interface TamsApiCreateJobRequest {
  /** ensure request idempotence, should be unique */
  requestId: string
  /** stages to be executed */
  stages: CreateJobRequestStage[]
  notifyUrl?: string
}

export interface TamsApiCreateJobResponse {
  job?: TamsApiJobInfoForClient
}

export interface TamsApiCreateResourceImageRequest {
  /** @format int64 */
  expireSec?: string
  /**
   * term of resource, 1-short(keep 7days) 2-long(keep forever)
   * @format int32
   */
  term?: number
}

export interface TamsApiCreateResourceImageResponse {
  resourceId?: string
  putUrl?: string
  headers?: object
}

export interface TamsApiCreateResourceImageSTSRequest {
  /** @format int64 */
  expireSec?: string
  /**
   * term of resource, 1-short(keep 7days) 2-long(keep forever)
   * @format int32
   */
  term?: number
}

export interface TamsApiCreateResourceImageSTSResponse {
  resourceId?: string
  accessId?: string
  signature?: string
  host?: string
  expire?: string
  callback?: string
  filePath?: string
  policy?: string
  securityToken?: string
}

export interface TamsApiDiffusionInput {
  /**
   * Height of the image in pixels. Must be in increments of 64 and pass the following validation:
   * - For 512 engines: 262,144 ≤ height * width ≤ 1,048,576, Maximum 1024
   * - For 768 engines: 589,824 ≤ height * width ≤ 1,048,576, Maximum 1024
   * - For SDXL v1.0: 262,144 ≤ height * width ≤ 2,073,600, Maximum 1536
   * @format int64
   * @min 512
   * @max 1536
   * @default "512"
   */
  width: number
  /**
   * Height of the image in pixels. Must be in increments of 64 and pass the following validation:
   * - For 512 engines: 262,144 ≤ height * width ≤ 1,048,576, Maximum 1024
   * - For 768 engines: 589,824 ≤ height * width ≤ 1,048,576, Maximum 1024
   * - For SDXL v1.0: 262,144 ≤ height * width ≤ 2,073,600, Maximum 1536
   * @format int64
   * @min 512
   * @max 1536
   * @default "512"
   */
  height: number
  /**
   * An array of text prompts to use for generation. Given a text prompt with the text A lighthouse on a cliff and a weight of 0.5, it would be represented as:
   * @example {}
   */
  prompts: TamsApiPrompt[]
  /**
   * An array of text negative prompts to use for generation. Given a text prompt with the text A lighthouse on a cliff and a weight of 0.5, it would be represented as:
   * @example {}
   */
  negativePrompts: TamsApiPrompt[]
  /**
   * The model to use for the diffusion
   * @example {}
   */
  sdModel?: string
  /**
   * The vae to use for the diffusion
   * support list: ["Automatic","None","vae-ft-mse-840000-ema-pruned.ckpt","kl-f8-anime.ckpt","kl-f8-anime2.ckpt","YOZORA.vae.pt","orangemix.vae.pt","blessed2.vae.pt,animevae.pt","ClearVAE.safetensors","pastel-waifu-diffusion.vae.pt"]
   * @example {}
   */
  sdVae?: string
  /**
   * Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you.
   * support list: ["Euler a","Euler","LMS","Heun","DPM2","DPM2 a","DPM++ 2S a","DPM++ 2M","DPM++ SDE","DPM++ 2M SDE","DPM fast","LMS Karras","DPM2 Karras","DPM2 a Karras","DPM++ 2S a Karras","DPM++ 2M Karras","DPM++ SDE Karras","DPM++ 2M SDE Karras"]
   */
  sampler?: string
  /**
   * Number of diffusion steps to run.
   * @format int32
   * @min 10
   * @max 50
   * @default "0"
   */
  steps?: number
  /**
   * How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt)
   * @format float
   * @max 35
   * @default "7"
   */
  cfgScale?: number
  /** @format int32 */
  clipSkip?: number
  /** @format float */
  denoisingStrength?: number
  /** @format int32 */
  etaNoiseSeedDelta?: number
  controlnet?: TamsApiControlnet
  lora?: TamsApiLora
}

export interface TamsApiFailedInfo {
  reason?: string
  /** already finished stages info */
  stages?: TamsApiStageInfo[]
}

export interface TamsApiGetJobResponse {
  job?: TamsApiJobInfoForClient
}

export interface TamsApiGetModelResponse {
  model?: TamsApiModel
}

export interface TamsApiImageToAdetailerInput {
  args?: TamsApiAdetailerArg[]
  diffusion?: TamsApiDiffusionInput
}

export interface TamsApiImageToInpaintInput {
  /** JUST_RESIZE */
  resizeMode?: ImageToInpaintInputResizeModeT
  maskImageResourceId?: string
  /**
   * 4
   * @format int64
   */
  maskBlur?: number
  /** ORIGINAL */
  inpaintingFill?: ImageToInpaintInputInpaintFillT
  /** true */
  inpaintFullRes?: boolean
  /**
   * 32
   * @format int64
   */
  inpaintFullResPadding?: number
  /**
   * 0
   * @format int64
   */
  inpaintMaskInvert?: number
  diffusion?: TamsApiDiffusionInput
}

export interface TamsApiImageToUpscalerInput {
  /**
   * The model to use for the upscaling
   * - 262,144 ≤ hr_resize_x * hr_resize_y ≤ 2,073,600
   * support list: ["Latent","Latent (antialiased)","Latent (bicubic)","Latent (bicubic antialiased)","Latent (nearest)","Latent (nearest-exact)","None","Lanczos","Nearest","4x-UltraSharp","4x_foolhardy_Remacri","ESRGAN_4x","R-ESRGAN 4x+","R-ESRGAN 4x+ Anime6B","4x_NMKD-Siax_200k","4x-AnimeSharp","4x_NMKD-Superscale-SP_178000_G","SwinIR_4x","8x_NMKD-Superscale_150000_G",]
   * @example {}
   */
  hrUpscaler: string
  /**
   * hr_scale or hr_resize_x must be specified. If hr_scale is specified, hr_resize_x will be ignored.
   * Height of the image upscaler in pixels. Must be in increments of 64 and pass the following validation:
   * - 262,144 ≤ hr_resize_x * hr_resize_y ≤ 2,073,600
   * @format int64
   * @min 128
   */
  hrResizeX?: number
  /**
   * hr_scale or hr_resize_y must be specified. If hr_scale is specified, hr_resize_y will be ignored.
   * Height of the image upscaler in pixels. Must be in increments of 64 and pass the following validation:
   * - 262,144 ≤ hr_resize_x * hr_resize_y ≤ 2,073,600
   * @format int64
   * @min 128
   */
  hrResizeY?: number
  /**
   * The size to use for the upscaling
   * - 262,144 ≤ hr_resize_x * hr_resize_y ≤ 2,073,600
   * @format int32
   * @example {}
   */
  hrScale?: number
  /**
   * Number of diffusion steps to run.
   * @format int32
   * @example {}
   */
  hrSecondPassSteps: number
  /**
   * denoising_strength
   * @format float
   * @example {}
   */
  denoisingStrength: number
  /**
   * if has diffusion stage, this diffusion will be ignored, else need to be specified
   * @example {}
   */
  diffusion?: TamsApiDiffusionInput
}

export interface TamsApiInputInitializeInput {
  /**
   * Random noise seed (omit this option or use 0 for a random seed).
   * @format int64
   * @max 4294967295
   * @default "0"
   */
  seed?: string
  /** Image used to initialize the diffusion process, in lieu of random noise. */
  imageResourceId?: string
  /**
   * Number of images to generate
   * @format int32
   * @min 1
   * @max 4
   * @default "1"
   */
  count?: number
}

export interface TamsApiJobInfoForClient {
  /**
   * job id
   * @format uint64
   */
  id?: string
  /** job status */
  status?: TamsApiJobStatusT
  /** waiting info, when status is waiting will return this */
  waitingInfo?: TamsApiWaitingInfo
  /** failed info, when status is failed will return this */
  failedInfo?: TamsApiFailedInfo
  /** running info, when status is running will return this */
  runningInfo?: TamsApiRunningInfo
  /** success info, when status is success will return this */
  successInfo?: TamsApiSuccessInfo
}

/** @default "DEFAULT" */
export enum TamsApiJobStatusT {
  DEFAULT = 'DEFAULT',
  CREATED = 'CREATED',
  PENDING = 'PENDING',
  RUNNING = 'RUNNING',
  CANCELED = 'CANCELED',
  SUCCESS = 'SUCCESS',
  FAILED = 'FAILED',
  WAITING = 'WAITING',
}

export interface TamsApiLora {
  items?: LoraItem[]
}

export interface TamsApiModel {
  /** @format uint64 */
  id?: string
  name?: string
  description?: string
  baseModel?: string
  modelType?: ProjectModelTypeT
  showcaseImageUrls?: string[]
  projectName?: string
}

export interface TamsApiProcessingImage {
  resourceImage?: TamsApiResourceForClient
  /** @format int32 */
  progress?: number
}

export interface TamsApiPrompt {
  text?: string
  /** @format float */
  weight?: number
}

export interface TamsApiResourceForClient {
  id?: string
  url?: string
  /** @format int64 */
  expiredIn?: string
}

export interface TamsApiRunningInfo {
  /** already finished stages or running stages info */
  stages?: TamsApiStageInfo[]
}

export interface TamsApiStageInfo {
  /**
   * stage in job index
   * @format int64
   */
  stageIndex?: string
  processingImages?: TamsApiProcessingImage[]
}

/** @default "DEFAULT" */
export enum TamsApiStageTypeT {
  DEFAULT = 'DEFAULT',
  INPUT_INITIALIZE = 'INPUT_INITIALIZE',
  DIFFUSION = 'DIFFUSION',
  IMAGE_TO_UPSCALER = 'IMAGE_TO_UPSCALER',
  IMAGE_TO_ADETAILER = 'IMAGE_TO_ADETAILER',
  IMAGE_TO_INPAINT = 'IMAGE_TO_INPAINT',
}

export interface TamsApiSuccessInfo {
  /** final output images */
  images?: TamsApiResourceForClient[]
  /** all stages info */
  stages?: TamsApiStageInfo[]
}

export interface TamsApiWaitingInfo {
  /** @format int64 */
  queueRank?: string
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean
  /** request path */
  path: string
  /** content type of request body */
  type?: ContentType
  /** query params */
  query?: QueryParamsType
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat
  /** request body */
  body?: unknown
  /** base url */
  baseUrl?: string
  /** request cancellation token */
  cancelToken?: CancelToken
}

export type RequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string
  baseApiParams?: Omit<RequestParams, 'baseUrl' | 'cancelToken' | 'signal'>
  securityWorker?: (securityData: SecurityDataType | null) => Promise<RequestParams | void> | RequestParams | void
  customFetch?: typeof fetch
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown> {
  data: D
  error: E
  headers: Headers
  ok: boolean
}

type CancelToken = Symbol | string | number

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded',
  Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = 'https://tams.tensor.art'
  private securityData: SecurityDataType | null = null
  private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
  private abortControllers = new Map<CancelToken, AbortController>()
  private customFetch = (...fetchParams: Parameters<typeof fetch>) => fetch(...fetchParams)

  private baseApiParams: RequestParams = {
    credentials: 'same-origin',
    headers: {},
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig)
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data
  }

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key)
    return `${encodedKey}=${encodeURIComponent(typeof value === 'number' ? value : `${value}`)}`
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key])
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key]
    return value.map((v: any) => this.encodeQueryParam(key, v)).join('&')
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {}
    const keys = Object.keys(query).filter((key) => 'undefined' !== typeof query[key])
    return keys
      .map((key) => (Array.isArray(query[key]) ? this.addArrayQueryParam(query, key) : this.addQueryParam(query, key)))
      .join('&')
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery)
    return queryString ? `?${queryString}` : ''
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === 'object' || typeof input === 'string') ? JSON.stringify(input) : input,
    [ContentType.Text]: (input: any) => (input !== null && typeof input !== 'string' ? JSON.stringify(input) : input),
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key]
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === 'object' && property !== null
            ? JSON.stringify(property)
            : `${property}`,
        )
        return formData
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  }

  protected mergeRequestParams(params1: RequestParams, params2?: RequestParams): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    }
  }

  protected createAbortSignal = (cancelToken: CancelToken): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken)
      if (abortController) {
        return abortController.signal
      }
      return void 0
    }

    const abortController = new AbortController()
    this.abortControllers.set(cancelToken, abortController)
    return abortController.signal
  }

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken)

    if (abortController) {
      abortController.abort()
      this.abortControllers.delete(cancelToken)
    }
  }

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === 'boolean' ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {}
    const requestParams = this.mergeRequestParams(params, secureParams)
    const queryString = query && this.toQueryString(query)
    const payloadFormatter = this.contentFormatters[type || ContentType.Json]
    const responseFormat = format || requestParams.format

    return this.customFetch(`${baseUrl || this.baseUrl || ''}${path}${queryString ? `?${queryString}` : ''}`, {
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { 'Content-Type': type } : {}),
      },
      signal: cancelToken ? this.createAbortSignal(cancelToken) : requestParams.signal,
      body: typeof body === 'undefined' || body === null ? null : payloadFormatter(body),
    }).then(async (response) => {
      const r = {} as unknown as HttpResponse<T, E>
      r.headers = response.headers
      r.ok = response.ok

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data
              } else {
                r.error = data
              }
              return r
            })
            .catch((e: any) => {
              r.error = e

              return r
            })

      if (cancelToken) {
        this.abortControllers.delete(cancelToken)
      }

      if (r.error) {
        let message = 'Unknown Error'
        if ((r.error as any).message) {
          message = (r.error as any).message
        }
        const err = new Error(message) as any
        err.response = r
        throw err
      }
      return data
    })
  }
}

/**
 * @title TAMS API
 * @version v1
 * @baseUrl https://tams.tensor.art
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  v1 = {
    /**
     * @description create diffusion job
     *
     * @tags jobs
     * @name TamsApiV1ServiceCreateJob
     * @summary v1/jobs
     * @request POST:/v1/jobs
     */
    tamsApiV1ServiceCreateJob: (body: TamsApiCreateJobRequest, params: RequestParams = {}) =>
      this.request<TamsApiCreateJobResponse, GooglerpcStatus>({
        path: `/v1/jobs`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description get job
     *
     * @tags jobs
     * @name TamsApiV1ServiceGetJob
     * @summary v1/jobs
     * @request GET:/v1/jobs/{jobId}
     */
    tamsApiV1ServiceGetJob: (jobId: string, params: RequestParams = {}) =>
      this.request<TamsApiGetJobResponse, GooglerpcStatus>({
        path: `/v1/jobs/${jobId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description cancel job
     *
     * @tags jobs
     * @name TamsApiV1ServiceCancelJob
     * @summary v1/jobs
     * @request DELETE:/v1/jobs/{jobId}
     */
    tamsApiV1ServiceCancelJob: (jobId: string, params: RequestParams = {}) =>
      this.request<TamsApiCancelJobResponse, GooglerpcStatus>({
        path: `/v1/jobs/${jobId}`,
        method: 'DELETE',
        format: 'json',
        ...params,
      }),

    /**
     * @description cancel job
     *
     * @tags models
     * @name TamsApiV1ServiceGetModel
     * @summary v1/models/{model_id}
     * @request GET:/v1/models/{modelId}
     */
    tamsApiV1ServiceGetModel: (modelId: string, params: RequestParams = {}) =>
      this.request<TamsApiGetModelResponse, GooglerpcStatus>({
        path: `/v1/models/${modelId}`,
        method: 'GET',
        format: 'json',
        ...params,
      }),

    /**
     * @description create resource image
     *
     * @tags resource
     * @name TamsApiV1ServiceCreateResourceImage
     * @summary v1/resource/image
     * @request POST:/v1/resource/image
     */
    tamsApiV1ServiceCreateResourceImage: (body: TamsApiCreateResourceImageRequest, params: RequestParams = {}) =>
      this.request<TamsApiCreateResourceImageResponse, GooglerpcStatus>({
        path: `/v1/resource/image`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),

    /**
     * @description create resource image sts
     *
     * @tags resource
     * @name TamsApiV1ServiceCreateResourceImageSts
     * @summary v1/resource/image/sts
     * @request POST:/v1/resource/image/sts
     */
    tamsApiV1ServiceCreateResourceImageSts: (body: TamsApiCreateResourceImageSTSRequest, params: RequestParams = {}) =>
      this.request<TamsApiCreateResourceImageSTSResponse, GooglerpcStatus>({
        path: `/v1/resource/image/sts`,
        method: 'POST',
        body: body,
        type: ContentType.Json,
        format: 'json',
        ...params,
      }),
  }
}
