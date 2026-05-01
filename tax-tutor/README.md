# Flow Through Tax Tutor

A friendly, approachable web app for studying **Federal Income Taxation of Flow-Through Entities, Estates and Trusts** — built for graduate accounting students, CPA candidates, and anyone working through Subchapter K.

> Tax doesn't have to be scary. The tutor makes a famously dry subject feel like a coffee-shop study session with the smartest TA you ever had.

## What's inside

Five interactive views, all wired together:

| View | What it does |
|------|-------------|
| **Dashboard** | Streak, mastery stats, resume card, upcoming lessons |
| **Lesson reader** | Long-form lesson with highlighted passages, §-ref pills, callouts |
| **AI tutor rail** | Mock chat panel — ask questions about the lesson in context |
| **Practice problem** | Step-by-step calculation with live answer-checking and hints |
| **Glossary** | Searchable code sections (§721–§754), forms, and concepts |

**Curriculum covered:** Ch 9 (Partnerships: Formation & Basis), Ch 10 (Distributions), Ch 11 (S Corporations), Ch 18 (Gift & Estate Taxes) — sourced from SWFT 2026.

## Tech stack

- [Vite](https://vite.dev) + [React 19](https://react.dev)
- [Lucide React](https://lucide.dev) for icons
- Pure CSS with design tokens (no Tailwind, no CSS-in-JS)
- No backend — all mock data, ready to wire up

## Running locally on Windows

### Prerequisites

1. **Node.js 18 or later** — download the LTS installer from [nodejs.org](https://nodejs.org). This also installs `npm`.
2. **Git** — download from [git-scm.com](https://git-scm.com/download/win) if you don't have it.

### Steps

Open **Command Prompt** or **PowerShell** and run:

```powershell
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd YOUR_REPO_NAME

# 2. Move into the app folder
cd tax-tutor

# 3. Install dependencies (~30 seconds)
npm install

# 4. Start the dev server
npm run dev
```

Then open your browser to **http://localhost:5173**

### Stopping the server

Press `Ctrl + C` in the terminal window.

### Building for production

```powershell
npm run build
```

Outputs a static site to `tax-tutor/dist/` — ready to deploy to Vercel, Netlify, or any static host.

## Project structure

```
tax-tutor/
├── public/                     # Static assets (SVGs, favicon)
│   ├── logo-mark.svg
│   ├── logo.svg
│   └── illustration-partnership.svg
├── src/
│   ├── components/
│   │   ├── Primitives.jsx      # Icon, Button, Pill, Ref, Input
│   │   ├── Shell.jsx           # LeftNav + TopBar
│   │   ├── Dashboard.jsx
│   │   ├── LessonReader.jsx
│   │   ├── TutorRail.jsx       # Mock AI chat
│   │   ├── PracticeProblem.jsx
│   │   ├── Glossary.jsx
│   │   └── ProgressView.jsx
│   ├── App.jsx                 # View routing
│   ├── index.css               # Design tokens + all styles
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

## Design system

The full design system lives in `project/` at the repo root — color tokens, typography, component specs, and the original HTML prototypes that this app was built from. See `project/README.md` for details.

Fonts: **Nunito** (UI + body) and **JetBrains Mono** (code references), loaded from Google Fonts.

## Next steps

This is a UI prototype with no backend. When you're ready to ship for real:

- **AI tutor:** swap the mock chat in `TutorRail.jsx` for a real Claude API call
- **Auth:** Clerk or Supabase work well with this Vite stack
- **Content:** replace hardcoded lesson/glossary data with a CMS or database
- **Deploy:** `npm run build` → drag `dist/` to [Vercel](https://vercel.com) for a live URL in under a minute
