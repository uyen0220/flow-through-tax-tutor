import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      {
        name: 'api-dev',
        configureServer(server) {
          server.middlewares.use('/api/chat', (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405;
              res.end(JSON.stringify({ error: 'Method not allowed' }));
              return;
            }
            let body = '';
            req.on('data', chunk => (body += chunk));
            req.on('end', async () => {
              try {
                const { messages } = JSON.parse(body);
                const apiKey = env.OPENAI_API_KEY;
                if (!apiKey) {
                  res.statusCode = 500;
                  res.end(JSON.stringify({ error: 'API key not configured' }));
                  return;
                }
                const upstream = await fetch(
                  'https://api.openai.com/v1/chat/completions',
                  {
                    method: 'POST',
                    headers: {
                      Authorization: `Bearer ${apiKey}`,
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      model: 'gpt-4o-mini',
                      max_tokens: 200,
                      messages,
                    }),
                  }
                );
                const data = await upstream.json();
                if (!upstream.ok) {
                  res.statusCode = 502;
                  res.end(
                    JSON.stringify({ error: data.error?.message ?? 'OpenAI error' })
                  );
                  return;
                }
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify({ content: data.choices[0].message.content }));
              } catch (err) {
                res.statusCode = 500;
                res.end(JSON.stringify({ error: err.message }));
              }
            });
          });
        },
      },
    ],
    server: {
      host: '0.0.0.0',
      port: 5173,
    },
  };
});
