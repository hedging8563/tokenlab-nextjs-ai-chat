# TokenLab Next.js AI Chat

Minimal Next.js chat starter using TokenLab through the Vercel AI SDK OpenAI-compatible provider.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fhedging8563%2Ftokenlab-nextjs-ai-chat&env=TOKENLAB_API_KEY%2CTOKENLAB_MODEL&envDefaults=%7B%22TOKENLAB_MODEL%22%3A%22gpt-5.5%22%7D&envDescription=Add%20a%20TokenLab%20API%20key%20and%20choose%20a%20public%20model%20ID.&envLink=https%3A%2F%2Fdocs.tokenlab.sh)

## Quickstart

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `TOKENLAB_API_KEY` in `.env.local`, then open `http://localhost:3000`.

## What This Shows

- Next.js App Router API route
- Vercel AI SDK streaming chat
- TokenLab OpenAI-compatible base URL: `https://api.tokenlab.sh/v1`
- Default model: `gpt-5.5`

## Links

- TokenLab docs: https://docs.tokenlab.sh
- Vercel AI SDK guide: https://docs.tokenlab.sh/integrations/vercel-ai-sdk
- Model catalog: https://api.tokenlab.sh/v1/models
