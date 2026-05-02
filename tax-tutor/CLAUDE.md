# Claude Code — Project Instructions

## Project goal

An exam-cram SPA for graduate accounting students studying flow-through taxation and transfer taxes (SWFT 2026). Students read lessons, run an ordered cram path, answer practice problems, and ask a live AI tutor questions about the lesson they are reading.

## Curriculum scope

| Chapter | Topic |
|---|---|
| Ch 9 | Partnerships: formation, basis, allocations, loss limits |
| Ch 10 | Partnership distributions, §751, §754, sales of interests |
| Ch 11 | S corporations: eligibility, basis, BIG, PII, distributions |
| Ch 18 | Federal gift & estate taxes, GST, valuation, FLPs |

## Tech stack

- **Vite 8 + React 19** — no TypeScript, no test runner
- **Pure CSS** with design tokens in `src/index.css` — no Tailwind, no CSS-in-JS
- **Lucide React** for icons
- **Node 22** required (Vite 8 minimum); declared in `package.json` `engines` field
- **Vercel** for deployment; `api/` directory holds serverless functions

## Key files

| File | Purpose |
|---|---|
| `src/App.jsx` | View routing, lesson navigation state |
| `src/index.css` | All styles + design tokens |
| `src/data/lessons.js` | S corp + transfer tax lessons; imports partnershipLessons.js |
| `src/data/partnershipLessons.js` | Ch 9 + Ch 10 lesson content |
| `src/data/practiceSets.js` | All practice question sets |
| `src/data/cramSession.js` | Ordered cram path (21 lessons) + defaults |
| `src/components/TutorRail.jsx` | AI tutor chat; calls `/api/chat` |
| `api/chat.js` | Vercel serverless function; proxies to OpenAI |
| `vite.config.js` | Dev middleware handles `/api/chat` locally |

## Engineering preferences

- Edit existing files rather than creating new ones
- No new npm dependencies without a clear reason
- No TypeScript migration
- No comments unless the WHY is non-obvious
- Commit each logical change separately with a clear message
- Run `npm run build` after every change and confirm it passes before committing
- Do not modify unrelated files when fixing a bug

## Data file conventions

- Lesson schema: `{ id, chapterKey, track, title, estMinutes, blocks[] }`
- Block types: `p`, `h2`, `ul`, `ol`, `callout`
- Practice question schema: `{ id, type, prompt, explain, hint?, accepted[]?, correctBool?, choices[]?, correctChoiceIndex? }`
- **All string literals must use straight quotes (U+0027).** Curly/typographic quotes (U+2018/U+2019) used as JS string delimiters will break the Vite build. Apostrophes inside single-quoted strings must be escaped (`\'`).

## AI tutor behavior

- Model: `gpt-4o-mini` via `POST /api/chat`
- System prompt: concise tax tutor, 2–4 sentence answers, current lesson title injected, IRC section numbers encouraged, off-topic questions declined
- API key: `OPENAI_API_KEY` — server environment only, never in frontend code or VITE_ variables
- Local dev: Vite dev middleware in `vite.config.js` reads key from `.env.local` via `loadEnv`
- Production: key set in Vercel dashboard → Environment Variables

## Deployment

- **Repo:** `https://github.com/uyen0220/flow-through-tax-tutor`
- **Vercel project:** `uyen0220s-projects/tax-tutor`
- **Root directory on Vercel:** `tax-tutor` (set in Project Settings → General)
- Auto-deploys on push to `main`
- `api/chat.js` is picked up automatically by Vercel as a serverless function

## Local development

```bash
npm run dev        # starts at http://localhost:5173
npm run build      # production build to dist/
npm run lint       # ESLint check
```

`.env.local` (gitignored via `*.local`) holds `OPENAI_API_KEY=` for local tutor testing.

## Known gotchas

- `.tutor-msgs` must NOT use `display: flex; flex-direction: column` — this causes the flex algorithm to assign fixed heights to message rows, clipping bubble content. Use plain block layout with `margin-bottom` for spacing.
- `height: 100%` on a flex child does not reliably constrain height — use `flex: 1; min-height: 0` instead.
- All untracked files referenced by committed code must be committed before pushing — Vercel builds from the repo, not the local working tree.
