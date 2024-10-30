# TAMS SDK

[English](./README.md) | 中文

## 环境支持

- Node.js

## 安装

```bash
npm install tams-sdk --save
```

```bash
yarn add tams-sdk
```

```bash
pnpm add tams-sdk
```

## 使用方法

### 使用令牌认证（推荐）

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

### 使用 RSA 认证（传统方式）

```js
import { TamsSDK, Sha256RsaAuthenticateStrategy } from 'tams-sdk'
import fs from 'node:fs'

// 你的私钥
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

### 示例项目

- [tams-gen-qrcode-example](https://github.com/Tensor-Art/tams-gen-qrcode-example)

## 相关链接

- [Tensor Art Model Service](https://tams.tensor.art)
- [Tensor.Art](https://tensor.art)
- [TAMS 文档](https://docs.tensor.art)
