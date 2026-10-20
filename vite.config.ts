import path from 'node:path'
import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, loadEnv, type Plugin } from 'vite'
import { handlePromptHttpRequest } from './server/api/promptHandler.ts'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function promptApiPlugin(): Plugin {
  return {
    name: 'prompt-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (
          req.url &&
          (req.url.startsWith('/api/prompt?') ||
            req.url === '/api/prompt' ||
            req.url.startsWith('/api/prompt/'))
        ) {
          try {
            await handlePromptHttpRequest(req, res)
          } catch (err) {
            next(err)
          }
        } else {
          next()
        }
      })
    },
    configurePreviewServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (
          req.url &&
          (req.url.startsWith('/api/prompt?') ||
            req.url === '/api/prompt' ||
            req.url.startsWith('/api/prompt/'))
        ) {
          try {
            await handlePromptHttpRequest(req, res)
          } catch (err) {
            next(err)
          }
        } else {
          next()
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Load server-side environment variables into process.env for local development
  const env = loadEnv(mode, process.cwd(), '')
  process.env = { ...process.env, ...env }

  return {
    plugins: [react(), tailwindcss(), promptApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  }
})

