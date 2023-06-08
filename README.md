# vite-plugin-crx-reload

> HMR for chrome extension with vite

<p align="center">
  <img src="https://img.shields.io/npm/dm/vite-plugin-crx-reload.svg" alt="Downloads"></a>
  <a href="https://www.npmjs.com/package/vite-plugin-crx-reload"><img src="https://img.shields.io/npm/v/vite-plugin-crx-reload.svg" alt="Version"></a>
  <a href="https://github.com/vuejs/vite-plugin-crx-reload/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/vite-plugin-crx-reload.svg" alt="License"></a>
</p>

## Install
```sh
pnpm install -D vite-plugin-crx-reload
# OR yarn add -D vite-plugin-crx-reload
# OR npm install -D vite-plugin-crx-reload
```

## Usage

- in vite.config.ts

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import { vitePluginCrxReload } from 'vite-plugin-crx-reload'

export default defineConfig({
  plugins: [
    vitePluginCrxReload()
  ],
})
```

- in main.ts

```ts
// main.ts/main.js
import { crxReloadClient } from 'vite-plugin-crx-reload'

if (import.meta.env.DEV) {
  crxReloadClient()
}
```

## Config

`vite-plugin-crx-reload` default use port `2333` to connect to the extension, you can change it by passing `port` option.

```ts
vitePluginCrxReload({
  port: 3000
})
```
