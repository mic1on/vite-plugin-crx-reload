import { WebSocketServer, WebSocket as WS } from 'ws'
import type { Plugin, ResolvedConfig } from 'vite'

const RELOAD = 'RELOAD'

interface VitePluginCrxInput {
  port?: number
}

export const vitePluginCrxReload: (input?: VitePluginCrxInput) => Plugin = (input = {}) => {
  let _ws: WS
  const port = input.port || 2333

  function createWebSocketServer(config: ResolvedConfig) {
    if (!config.build.watch) return

    const wss = new WebSocketServer({ port })
    wss.on('connection', (client) => { _ws = client })
    return wss
  }

  function cleanUp() {
    _ws && _ws.close()
    _ws = null
  }

  return {
    name: 'vite-plugin-crx-reload',

    configResolved(resolvedConfig: ResolvedConfig) {
      createWebSocketServer(resolvedConfig)
    },

    writeBundle() {
      if (!_ws) return
      _ws.send(RELOAD)
    },
    closeWatcher() {
      cleanUp()
    },


  }
}


export const crxReloadClient = (port: number = 2333) => {
  const ws = new WebSocket(`ws://localhost:${port}`)
  ws.onmessage = (event) => {
    if (event.data === RELOAD) {
      window.location.reload()
    }
  }
}
