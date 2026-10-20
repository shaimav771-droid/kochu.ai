import type { IncomingMessage, ServerResponse } from 'node:http'
import { handlePromptHttpRequest } from '../server/api/promptHandler.ts'

export default async function handler(req: IncomingMessage, res: ServerResponse): Promise<void> {
  await handlePromptHttpRequest(req, res)
}
