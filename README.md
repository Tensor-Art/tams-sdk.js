# TAMS SDK

English | [中文](./README-zh_CN.md)

## Environment Support

- Node.js

## Install

```bash
npm install tams-sdk --save
```

```bash
yarn add tams-sdk
```

```bash
pnpm add tams-sdk
```

## Usage

### Using Token Authentication (Recommended)

```js
import { TamsSDK, TokenAuthenticateStrategy } from 'tams-sdk'

const sdk = new TamsSDK({
  appId: 'YOUR_APP_ID',
  authenticateStrategy: new TokenAuthenticateStrategy('YOUR_ACCESS_TOKEN'),
})

async function main() {
  await sdk.v1.tamsApiV1ServiceGetModel('MODEL_ID')

  await sdk.uploadFile({
    file: fs.readFileSync('./Slogan.png'),
  })

  // ...
}

main()
```

### Using RSA Authentication (Legacy)

```js
import { TamsSDK, Sha256RsaAuthenticateStrategy } from 'tams-sdk'
import fs from 'node:fs'

// your private key
const content = fs.readFileSync('./private_key.pem', 'utf-8')

const sdk = new TamsSDK({
  appId: 'YOUR_APP_ID',
  authenticateStrategy: new Sha256RsaAuthenticateStrategy(content),
})

async function main() {
  await sdk.v1.tamsApiV1ServiceGetModel('MODEL_ID')

  await sdk.uploadFile({
    file: fs.readFileSync('./Slogan.png'),
  })

  // ...
}

main()
```

### Example

- [tams-gen-qrcode-example](https://github.com/Tensor-Art/tams-gen-qrcode-example)

## Links

- [Tensor Art Model Service](https://tams.tensor.art)
- [Tensor.Art](https://tensor.art)
- [TAMS Docs](https://docs.tensor.art)
