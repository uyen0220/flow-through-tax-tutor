# Workflow Log — 2026-05-01/02

Chronological record of what was built and how.

---

## 1. Claude Design mockup → codebase

The app originated as an HTML/CSS prototype built with Claude's design tool. The prototype included full component specs, design tokens (color, typography, spacing), and static HTML pages for each view. Claude Code was used to convert this into a working React + Vite application, wiring up navigation, state, and component props from the static mockup.

---

## 2. GitHub repo setup

Repo created at `github.com/uyen0220/flow-through-tax-tutor`. The Vite app lives in the `tax-tutor/` subdirectory (one level below the repo root). This matters for Vercel: the **Root Directory** setting must be set to `tax-tutor` in the project settings, otherwise Vercel looks for `package.json` at the repo root and fails with exit code 127.

---

## 3. Local npm/Vite setup

```bash
cd tax-tutor
npm install
npm run dev      # http://localhost:5173
```

Node 22 is required. Vite 8 dropped support for older Node versions. This is declared in `package.json` via `"engines": { "node": "22.x" }` so Vercel uses the correct runtime.

---

## 4. PowerShell/npm script issue and fix

On Windows, running `npm.cmd` directly in some terminals requires the `.cmd` extension. The correct command in PowerShell is just `npm run dev`. If a script fails with "command not found", check that Node is in PATH and use the full `npm.cmd` form or reopen the terminal after installing Node.

---

## 5. Claude Code local workflow

All implementation was done through Claude Code CLI sessions. The workflow used the **subagent-driven development** skill: a plan was written first, then each task was dispatched to a fresh subagent, followed by spec compliance review and code quality review. This kept context clean and caught issues early.

Key lesson: always commit files before assuming they exist in the repo. Several components (`PremiumAnnotated.jsx`, `glossary.js`, `premiumAnnotated.js`) existed locally but had never been committed, causing Vercel builds to fail with "Module not found" after `App.jsx` (which imports them) was committed.

---

## 6. Simplified MVP implementation

The following was built/expanded in one session:

- **Topics.jsx bug fix:** chapter labels for Ch 9/10 were rendering as "Ch 18" — fixed with an object lookup replacing a broken ternary
- **Cram path expansion:** 8 → 21 lessons covering Ch 9, 10, 11, 18 in order
- **4 new Ch 18 lessons:** gift tax computation, estate formula, charitable/marital deductions, special valuation/FLPs
- **Practice sets:** `partnership-formation` expanded from 3 → 10 questions; `transfer-tax-quick` from 3 → 12; new `partnership-distributions` set (8 questions) added
- **Dashboard:** copy updated; new distributions practice card added
- **Curly quote fix:** original data files used Unicode typographic quotes (U+2018/U+2019) as JS string delimiters, which caused Vite build errors. All occurrences replaced with straight quotes; apostrophes inside strings escaped.

---

## 7. OpenAI tutor API route

The `TutorRail` component was upgraded from a mock to a live AI tutor:

- `api/chat.js` — Vercel serverless function that reads `OPENAI_API_KEY` from server environment, calls `gpt-4o-mini` with a system prompt and conversation history, returns `{ content }`
- `vite.config.js` — Vite dev middleware added to handle `POST /api/chat` locally, reading the key from `.env.local` via `loadEnv`
- `TutorRail.jsx` — replaced mock `send()` with real `fetch('/api/chat')`, added `loading` state, `apiMsgs` history (text-only), and `useLayoutEffect` scroll-to-bottom
- `App.jsx` — passes `key={lessonId} lessonId={lessonId}` to `TutorRail` so the chat resets when the student navigates to a new lesson

Model choice: `gpt-4o-mini` — low cost, fast, appropriate for short 2–4 sentence tutoring answers.

The API key is never exposed to the frontend. `VITE_` prefix was explicitly avoided.

---

## 8. Vercel environment variable setup

After deploying, the tutor returned "API key not configured." The fix:

1. Go to Vercel dashboard → Project → Settings → Environment Variables
2. Add `OPENAI_API_KEY` with the key value, scoped to Production + Preview + Development
3. Redeploy (or push a new commit to trigger auto-deploy)

For local development, create `tax-tutor/.env.local` with `OPENAI_API_KEY=sk-...`. This file is gitignored via `*.local` in `.gitignore`.

---

## 9. Vercel deployment

**Build failures encountered and resolved:**

| Error | Cause | Fix |
|---|---|---|
| Exit 127 — `vite not found` | Vercel was building from repo root, not `tax-tutor/` | Set Root Directory to `tax-tutor` in Vercel project settings |
| Exit 1 — `npm run build` | Node 20 (Vercel default) too old for Vite 8 | Added `"engines": { "node": "22.x" }` to `package.json` |
| `vercel.json` schema error | `nodeVersion` is not a valid `vercel.json` field | Moved Node version to `package.json` `engines` field |
| Module not found | `PremiumAnnotated.jsx` etc. were never committed | Committed all locally-present but untracked files |

**Live URL:** auto-assigned by Vercel on first successful deploy. Auto-deploys on every push to `main`.
