# Flow Through Tax Tutor — Design System

A warm, human, approachable web-app design system for **Flow Through Tax Tutor** — a study companion that teaches **Federal Income Taxation of Flow-Through Entities, Estates and Trusts** to students.

> Tax doesn't have to be scary. The brand makes a famously dry subject feel like a friendly tutor at a coffee shop, not a textbook on a fluorescent-lit desk.

## Product Context

**Audience.** Graduate accounting / tax students, advanced undergrads, and CPA candidates working through the flow-through entities portion of a Federal Tax course. Most are studying alongside a textbook and instructor.

**Core curriculum** (mirrors the source material we were given — the *SWFT 2026: Corporations, Partnerships, Estates & Trusts* instructor guides by Nellen, Young, Cripe, Lassar, Persellin & Cuccia, ISBN 9798214044033):

- **Ch 9** — Partnerships: Formation, Operation, and Basis
- **Ch 10** — Partnerships: Distributions, Transfer of Interests, and Terminations
- **Ch 11** — S Corporations
- **Ch 18** — The Federal Gift and Estate Taxes
- (Extending to LLCs, LLPs, family partnerships, fiduciary income tax of estates & trusts.)

**Core jobs the product does:**

1. **Lessons** — bite-sized concept walkthroughs with worked examples (e.g. inside vs outside basis, Schedule K-1 line items, §754 elections).
2. **Practice problems** — multi-step calculation problems with hint-laden solutions, mirroring textbook end-of-chapter problems.
3. **Glossary** — every code section, IRS form, and term hyperlinked everywhere it appears.
4. **Progress tracking** — chapter mastery, streaks, time-to-CPA-readiness.
5. **AI tutor chat** — ask "why does the §704(b) capital account differ from outside basis?" and get a worked example.

## Sources & Inputs

- **Source material:** four PDFs in `uploads/` — *SWFT 2026 Instructor Guides* for chapters 9, 10, 11, 18. Used for curriculum scope, terminology, and pedagogical voice.
- **Brand inputs:** none provided directly. The tone (*friendly / approachable*) and vibe (*warm & human*) were specified by the user; the visual identity in this system is therefore an **original direction designed to fit those constraints**, not a recreation of an existing brand. Flag for user review.
- **Codebase / Figma:** none provided. The web app UI kit is a fresh design built against this system.

## Index

```
README.md                   ← you are here
SKILL.md                    ← agent-skill manifest (cross-compatible with Claude Code)
colors_and_type.css         ← CSS custom properties for color, type, spacing
fonts/                      ← (Google Fonts loaded via @import; see colors_and_type.css)
assets/
  logo.svg                  ← primary wordmark + mark
  logo-mark.svg             ← square mark only
  pattern-grid.svg          ← warm hand-drawn grid background
  illustration-*.svg        ← simple line illustrations (placeholders, flagged)
preview/                    ← design system cards rendered in the Design System tab
  type-*.html               ← typography specimens
  color-*.html              ← color palettes & semantic tokens
  spacing-*.html            ← radii, shadows, spacing scale
  component-*.html          ← buttons, inputs, cards, badges, etc.
  brand-*.html              ← logo, voice, iconography
ui_kits/
  web_app/
    README.md
    index.html              ← interactive click-thru of the Tax Tutor
    *.jsx                   ← React components
uploads/                    ← original SWFT 2026 instructor guide PDFs
```

---

## CONTENT FUNDAMENTALS

The Tax Tutor's voice is **the smartest, most patient TA you ever had** — confident in the material, allergic to jargon-for-jargon's-sake, and unafraid to admit when something is genuinely tricky.

### Voice principles

1. **Demystify, don't dumb down.** Tax law is technical; we don't pretend otherwise. We translate, we don't water down.
2. **You & we, never "the user" or "one."** The tutor speaks directly to the student and stands shoulder-to-shoulder with them.
3. **Code sections are characters, not citations.** "§704(b) cares about *economic* reality" — not "Per Section 704(b) of the Internal Revenue Code…"
4. **Lead with the punchline.** Give the answer, then the reasoning, then the citation. Students are studying, not reading a brief.
5. **Be specific.** "$10,000 cash + property with $30,000 basis" beats "a cash and property contribution."

### Tone, casing, mechanics

- **Sentence case** for headings, buttons, nav. ("Partner's outside basis," not "Partner's Outside Basis.")
- **Title Case** only for proper nouns: form names (Schedule K-1, Form 1065), code section names (Subchapter K), proper textbook concepts.
- **First person plural** — "Let's walk through this distribution," "We'll come back to hot assets in a minute."
- **Contractions encouraged** — "doesn't," "we'll," "you've."
- **Em dashes** for asides — used liberally, in the textbook tradition.
- **Numerals over words** for any tax figure — "$1,000," "30%," "§754" — never "one thousand dollars."
- **Code section glyphs.** Always render with the section sign: §704(b), not Sec. 704(b) or Section 704(b).
- **No emoji in product surfaces.** Reserved for marketing and celebratory moments only (a confetti for finishing a chapter is fine; an emoji in a lesson body is not).
- **No exclamation points in instructional copy.** They make the tutor sound nervous. Save them for genuine wins ("Chapter complete!").

### Examples

> ✅ **Lesson opener** — "A partnership doesn't pay its own income tax. Instead, it hands every partner a Schedule K-1 and says: *here's your share — go report it.* That's the whole game of Subchapter K."

> ✅ **Practice problem hint** — "Stuck? Remember: a contribution of *services* doesn't get the §721 nonrecognition treatment. Cash and property do."

> ✅ **Error state** — "We couldn't load that lesson. Refresh, or jump back to Chapter 9 and we'll pick up where you left off."

> ❌ **Avoid** — "The user must complete the prerequisite module before accessing advanced content." (third person, robotic, jargon)

> ❌ **Avoid** — "🎉 Awesome job!! You're crushing it!! 💪" (emoji-heavy, not the brand)

> ❌ **Avoid** — "Pursuant to IRC §704(b), allocations must possess substantial economic effect." (citation-first, no translation)

### Microcopy patterns

- Empty states: *"No notes yet. Highlight a passage in any lesson to start one."*
- Loading: *"Pulling up the regs…"* / *"One sec — we're checking the math."*
- Confirm destructive: *"Delete this practice attempt? You'll keep your overall progress."*
- Streak nudge: *"Three days in a row. Keep it going."*

---

## VISUAL FOUNDATIONS

The visual identity is **a friendly study notebook, not a SaaS dashboard**. Off-white paper, warm ink, a single bold accent for action, and the visual rhythm of a good textbook — with the polish of a modern web app.

### Palette

- **Paper** — `--paper` `#FFFDF8`, near-white with the slightest warm hint. The page should feel light and friendly, never sterile.
- **Brand blue (ink)** — `--ink` `#1B3A6B`, a confident deep navy. The brand's voice color — used for headings, body, links, and most chrome.
- **Sunshine yellow** — `--action` `#FBC02D`. The primary call-to-action color, used on big buttons with dark text. Also doubles as the highlighter pen.
- **Link blue** — `--link` `#2E7CD6`. A bright, optimistic mid-blue used for inline links, tutor-chat bubbles, and info accents.
- **Friendly red** — `--danger` `#D24545`, less aggressive than a fire-truck red — used for errors and destructive actions.
- **Neutrals** — a cool blue-gray ramp (`--ink-1` … `--ink-6`) layered over the warm paper for a fresh, non-monochromatic palette.

### Type

- **Everything** — *Nunito*, a friendly, rounded geometric sans-serif. Used for display, body, and UI alike. Weights vary heavily — 900 for display headings, 800 for h2/buttons, 500 for body — to create rhythm without changing typeface.
- **Numerics & monospace** — *JetBrains Mono* for code section references like `§704(b)`, K-1 line items, and any tabular figure where digit alignment matters.

> ⚠️ **Font note.** Both families are loaded from Google Fonts. No custom or licensed fonts were provided by the user. **Confirm or supply licensed alternatives if desired.**

### Spacing & rhythm

- **8-px base unit.** All spacing snaps to multiples of 4 or 8.
- **Generous line-length.** Lesson body caps at ~68ch; never let body text run wider than ~720px.
- **Vertical rhythm of 28px** for body content (`--lh-body: 1.65`).
- **Section breaks** use a 1px hairline rule in `--ink-3`, never a solid bar.

### Backgrounds & textures

- **Paper grain** — a subtle SVG noise texture overlaid at ~3% opacity on full-screen backgrounds. Implies real paper without becoming kitsch.
- **Faint ruled lines** — optional 28px horizontal rule pattern available for "notebook" surfaces (notes, scratchpad).
- **No gradients.** No mesh, no glassmorphism, no purple-to-pink. Color is flat by default. The single allowed gradient: a barely-visible vertical fade from `--paper` to `--paper-2` on long pages, to anchor the bottom.
- **No full-bleed photos.** Imagery is line illustrations or the occasional textbook-style diagram (boxes-and-arrows for entity relationships, e.g. partner ↔ partnership ↔ K-1).

### Borders, radii, shadows

- **Corner radii** — 6px default (`--radius-sm`), 12px for cards (`--radius-md`), 18px for hero/lesson cards (`--radius-lg`), full-pill for tags. Never sharp 0; never extreme 24px+.
- **Borders** — 1px hairlines in warm gray. Borders carry the work, not shadows. Cards use `1px solid var(--ink-2)` over `--paper-1`.
- **Shadows** — soft and warm, never gray-blue. `--shadow-sm` for hover lift, `--shadow-md` for floating panels (popovers), `--shadow-lg` only for modals. All shadows use a warm brown tint (rgba(60, 40, 20, .08)).
- **No inner shadows.** Inputs use 1px border + faint inner highlight only on focus.
- **Focus ring** — 2px `--accent` with 2px offset, accessible & visible against paper.

### Animation & motion

- **Easing** — `cubic-bezier(.2, .8, .2, 1)` — a soft "ease-out" that mimics a pen lifting from paper. Stored as `--ease-pen`.
- **Durations** — 120ms for hovers, 200ms for state changes, 320ms for page transitions, 600ms for celebrations (chapter complete).
- **Fades over slides.** UI prefers cross-fades and gentle 4–8px Y-translation. No bouncy spring physics.
- **No autoplay.** Anything that animates on load happens once and stops.

### Hover & press states

- **Buttons (primary)** — hover: darken `--accent` by ~6%; press: darken by ~12% **and** scale `0.98`. No translate.
- **Buttons (ghost)** — hover: 6% accent tint background; press: 10%.
- **Cards (clickable)** — hover: 1px border becomes 2px in `--accent`, plus `--shadow-sm`; press: scale `0.99`. The hover *does not* lift; the border is doing the talking.
- **Links** — solid underline by default, with `text-underline-offset: 3px`; hover removes the underline (yes, inverted from the web default — feels like a textbook footnote being clarified).

### Layout rules

- **Three-column app shell** — left nav (240px), main column (flex), right rail (320px, optional).
- **Reading column** is always centered within main, max 720px.
- **Sticky chapter nav** at top of reading column (lesson title + progress bar). 56px tall.
- **Right rail** holds glossary peek, AI tutor chat, or table of contents — context-dependent.

### Transparency, blur, glass

- **Used sparingly.** Only the top-of-page chapter nav uses `backdrop-filter: blur(12px)` over a `--paper` `+ alpha 0.85` base, to keep "I'm still in chapter 9" anchored while you scroll.
- No glass cards, no frosted modals.

### Imagery vibe

- **Warm, hand-drawn line illustrations** in `--ink` over `--paper` — entity diagrams, K-1 form anatomy, basis-tracking flowcharts.
- **No stock photography.** No illustrated humans (avoid the SaaS-illustration-pack look entirely).
- **Diagrams** preferred over decoration. Every illustration earns its place by *teaching something*.

### Cards

- 1px hairline border in `--ink-2`, 12px radius, `--paper-1` background (one tick warmer than the page itself), 24px internal padding, no shadow at rest. Hover: shadow-sm + accent border.

---

## ICONOGRAPHY

The Tax Tutor uses **Lucide** as its icon system — 1.75px stroke, rounded line caps, no fill — chosen because its quiet, hand-drawn-feeling line work fits the "study notebook" vibe better than the rigid geometry of Heroicons or the heavier weight of Phosphor.

- **Loaded via CDN** — `https://unpkg.com/lucide@latest` — referenced inline as `<i data-lucide="book-open"></i>` and hydrated with `lucide.createIcons()`.
- **Sizing.** 16px in dense UI (nav, buttons), 20px default, 24px in section headers, 32px+ only as a decorative anchor.
- **Color.** Inherit `currentColor`; never hardcode. Accent green only when the icon is itself an action affordance.
- **Stroke.** 1.75px standard. Lucide's default 2px feels a hair too heavy on `--paper`; the override lives in `colors_and_type.css`.

### Icon vocabulary (used consistently across the product)

| Concept | Icon | Notes |
|---|---|---|
| Lesson | `book-open` | |
| Practice problem | `pencil-line` | |
| Glossary term | `bookmark` | inline, 14px |
| AI tutor | `sparkles` | the only place sparkles appears |
| Progress / mastery | `target` | |
| Streak | `flame` | only with `--highlight` color |
| Note | `notebook-pen` | |
| Section reference | `scale` | judicial / law association |
| Form (1065, K-1) | `file-text` | |
| Save / bookmark | `bookmark-plus` | |
| Settings | `settings-2` | the dial-style variant |

### Emoji & unicode

- **Emoji** — not used in product chrome, lesson bodies, or buttons. The single exception is **🎉** on the chapter-complete celebration screen. That's it.
- **Unicode glyphs** — used **deliberately and often** for tax-specific symbols: **§** (section, U+00A7) is the brand's mascot character, treated almost like a logomark when paired with a numeral. Also **¶** (paragraph), **†** (footnote), **—** (em dash), **·** (interpunct) for breadcrumbs.

### Logo & mark

- **Wordmark** — "Flow Through" (Fraunces italic) over "Tax Tutor" (Fraunces regular), with a green § glyph as the mark — see `assets/logo.svg`.
- **Mark only** — the green § inside a soft-cornered square (`assets/logo-mark.svg`), used as favicon and avatar.
- **Clear space** — equal to the cap height of the wordmark on all sides.
- **Don't** — never recolor the § to anything but `--accent` or `--ink`. Never stretch, outline, or place over photography.
