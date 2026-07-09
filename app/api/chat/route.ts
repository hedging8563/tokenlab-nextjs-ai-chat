import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { streamText, convertToModelMessages } from "ai";

export const runtime = "edge";

const tokenlab = createOpenAICompatible({
  name: "tokenlab",
  apiKey: process.env.TOKENLAB_API_KEY,
  baseURL: "https://api.tokenlab.sh/v1",
  includeUsage: true
});

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: tokenlab.chatModel(process.env.TOKENLAB_MODEL || "gpt-5.4"),
    messages: convertToModelMessages(messages)
  });

  return result.toUIMessageStreamResponse();
}
