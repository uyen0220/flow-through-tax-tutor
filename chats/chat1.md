# Tax Tutor Interface

_Started 2026-05-01 20:10 UTC_

---

## User



## Assistant

I'll start by exploring what's been provided in the project.

_[tool: list_files]_

The project is completely empty — no codebase, no Figma links, no screenshots, no brand assets, nothing other than the company name "Flow Through Tax Tutor."

Per the guidance, I should stop if key resources are inaccessible rather than fabricate a brand from scratch. Let me ask you for what I need.

_[tool: questions_v2]_

## User

Questions answered:
- context_summary: The Tax Tutor is to teach Federal Income Taxation of Flow Through Entities, Estates and Trusts to students (web app).
- products: Web app (the tutor itself)
- tone: Friendly / approachable (tax doesn't have to be scary)
- vibe: Warm & human (off-whites, hand-drawn touches, friendly)

## Assistant

_[tool: update_todos]_

_[tool: set_project_title]_

Let me explore the attached PDFs to understand the source material and pedagogy.

_[tool: invoke_skill]_

_[tool: list_files]_

_[tool: run_script]_

Now I have a clear picture. The PDFs are Cengage textbook instructor guides for SWFT 2026 — covering Partnerships (Ch 9-10), S Corporations (Ch 11), and Gift/Estate Taxes (Ch 18). These are the exact topics the Tax Tutor will teach. The user wants me to **build the Tax Tutor as a web app** — so the design system serves a product I'm creating fresh.

Let me set up the foundation.

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

Now let me build the logo, design cards, and UI kit.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

Now let me build the design system cards. I'll create a shared base helper for them.

_[tool: write_file]_

_[tool: snip]_

Now the type cards:

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: register_assets]_

Now let me build the UI kit for the web app — this is the biggest remaining piece.

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: snip]_

_[tool: view_image]_

That style is clearly **Nunito** (or very close — Quicksand is the other candidate). Rounded, friendly, geometric sans-serif — much more fun than the bookish Fraunces. The screenshot also gives me great cues: a confident **deep blue** for headings, a **golden-yellow CTA** with dark text, and bright **mid-blue** accent links. Let me swap the type system to Nunito and warm up the palette to match this vibe.

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: str_replace_edit]_

I need to update the logo and previews to match the new Nunito + blue/yellow style, plus update the avatars in JSX which still use § with Fraunces italic.

_[tool: write_file]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

_[tool: snip]_

Now I need to update the preview cards and the partnership illustration to match the new style. Let me also update the README to reflect the new direction.

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: write_file]_

_[tool: snip]_

_[tool: write_file]_

_[tool: str_replace_edit]_

_[tool: snip]_

_[tool: write_file]_

_[tool: register_assets]_

_[tool: done]_

_[tool: snip]_

_[tool: update_todos]_

_[tool: fork_verifier_agent]_

Switched the design system to a friendlier, brighter direction:

- **Nunito** everywhere (900 display, 500 body) — rounded, warm, modern.
- **Sunshine yellow `#FBC02D`** as the primary CTA color, sitting on **deep brand blue `#1B3A6B`** ink.
- Updated logo, illustrations, all preview cards, and the live web app to match.

The README, SKILL.md, and design system tab now reflect the new direction. Let me know if you'd like to push the playfulness further (e.g. accent shapes, more illustration) or pull it back toward something more buttoned-up.

## User

Verifier agent check completed

## Assistant

Let me investigate and fix these issues.

_[tool: read_file]_

Found issue 1 — duplicate Dashboard. Now let me check the styles for issues 2–4.

_[tool: grep]_

Now I'll fix all four issues:

_[tool: str_replace_edit]_

_[tool: str_replace_edit]_

All four issues addressed:

1. ✅ Removed duplicate Dashboard nav item
2. ✅ Brand wordmark — added `min-width: 0` to flex container, `flex-shrink: 0` to img, smaller font size so "Flow Through" / "Tax Tutor" stack cleanly next to the logo
3. ✅ Section heads — added `gap`, `flex: 1` on h2, `white-space: nowrap` + `flex-shrink: 0` on link
4. ✅ Chapter titles — `flex: 1` + `min-width: 0` so they wrap inside their column instead of forcing layout overflow

_[tool: done]_

_[tool: fork_verifier_agent]_

Fixes applied — duplicate nav item removed, brand wordmark and section headers now flex correctly with the new Nunito font.

## User

continue

## Assistant

The design system is in good shape. Here's where we landed:

**Direction**
- Friendly, approachable web app — Nunito everywhere, sunshine yellow CTAs on deep brand blue.
- Tone: warm and encouraging ("smartest patient TA you ever had").

**What's in the project**
- `README.md` — full design philosophy, voice, palette, type, iconography, content fundamentals.
- `colors_and_type.css` — design tokens (paper, ink ramp, brand blue, yellow CTA, link blue, danger).
- `SKILL.md` — quick-reference invocable skill for future prototyping.
- `assets/` — logo, mark, partnership illustration.
- `preview/` — design-system cards (type, color, buttons, tutor bubble) registered in the Design System tab.
- `ui_kits/web_app/` — clickable web app with Dashboard, Lesson, Practice, Glossary, Progress views.

**Caveats / next steps**
- Fonts are Google Fonts loads — confirm or supply licensed alternatives if needed.
- Logo, avatar, and partnership illustration are placeholders — happy to swap in real brand art when available.
- Could push further on illustration system, motion, mobile/iOS frame, or printable handouts if useful.

Let me know which direction to take next.

## User

Regenerate "illustration-partnership": arrows are not clearly shaped out and multiple shapes overlapping each other

## Assistant

Let me redesign this illustration with clearer arrow shapes and better separation.

_[tool: write_file]_

_[tool: show_to_user]_

Redrawn with:
- **Real arrowheads** via SVG marker (not awkward path tips)
- **Separated nodes** — partners up top, partnership entity below, no overlap
- **Two clear flows** — blue arrows down (capital in), yellow arrows back (K-1s out)
- **Labels** on every arrow so the relationship reads instantly

## User

what do I do next to ship to my learners?

## Assistant

Here's a practical roadmap from "design system in a project" → "real product in students' hands."

## 1 · Decide the actual surface

You currently have web app mockups. Before you build, lock down:
- **Web-only, mobile-only, or both?** Students cram on phones — a responsive web app or a thin PWA wrapper covers 90% of cases without two codebases.
- **Auth model?** School SSO (most law/MAcc programs use Okta/Google), email magic-link, or no-account demo?
- **Are you the textbook supplement or the textbook?** That changes pricing, content depth, and IP work dramatically.

## 2 · Lock down content before code

This is the part that always takes longer than you think:
- **Pick one chapter to ship first** — Subchapter K basics is a good MVP because it's the hardest topic and the most valuable to nail.
- **Author 8–12 lessons** in a structured format (markdown + frontmatter works fine). Each lesson = explainer, worked example, 3–5 practice questions, glossary refs.
- **Question bank** — aim for 50+ questions per chapter so practice doesn't repeat. Tag by subtopic and difficulty.
- **Cite primary sources** (IRC §§, Treas. Reg., revenue rulings) — students and their professors will check.
- **Get a tax expert to review** every lesson before launch. Wrong tax content is a liability issue, not just a quality issue.

## 3 · Build the MVP

Two paths depending on your skills:

**You/a developer build it:**
- Next.js + Postgres + Tailwind, ship to Vercel. Your design tokens drop straight in.
- AI tutor: OpenAI/Anthropic API, system prompt grounded in your content, RAG over your lesson corpus so it can't hallucinate code sections.
- Auth: Clerk or Supabase. Stripe for billing.
- ~6–10 weeks for a competent dev to ship a real MVP from these mocks.

**You don't build it:**
- Hire one. The mocks + design system in this project are a real handoff package — drop them in front of a contractor and the discovery phase is half-done.
- I can generate a Claude Code handoff bundle when you're ready.

## 4 · Legal & compliance before you charge anyone

- **Disclaimer:** "educational content, not tax advice" on every page that quotes the Code.
- **Privacy policy + ToS** — required before payments.
- **FERPA** if you're selling into schools.
- **Trademark search** on "Flow Through Tax Tutor" — quick USPTO TESS check.
- **Tax-content liability insurance** if you're going broad.

## 5 · Get 5–10 real students before you scale

Don't launch publicly. Find 5–10 MAcc/JD-tax students from one school, give them free access for a semester, and watch them use it. Three things will happen:
1. You'll find content errors you missed.
2. You'll find the *one* feature they actually want that isn't built.
3. You'll get testimonials for launch.

## 6 · Distribution

In order of likelihood-to-work for this niche:
- **Direct to professors** — they recommend it to their class. One adoption = 30–80 students.
- **r/Accounting, r/CPA, r/taxpros** subreddits — be a participant first, not a promoter.
- **Becker/Wiley CPA review partnerships** — your scope is narrower (tax-only) but complementary.
- **CPA exam study groups** on Discord/Reddit.

---

**The honest sequencing:** content review with a tax expert (weeks 1–4) → MVP build (weeks 4–14) → 5-student pilot (weeks 14–20) → public launch.

Want me to:
- (a) Generate a Claude Code handoff bundle so a developer can start building?
- (b) Mock the missing screens (auth, onboarding, billing, a question-authoring back-office)?
- (c) Draft the content schema + a sample lesson in the format your future code will consume?
- (d) Design a landing page to start collecting waitlist signups while you build?

