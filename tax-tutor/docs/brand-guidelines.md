# Brand Guidelines — Flow-Through Tax Tutor

Product and design preferences for this educational interface.

---

## Interface tone

- **Serious but not cold.** This is exam prep for graduate students — the tone respects their intelligence and time. No hand-holding, no cheerful filler copy.
- **Precise.** Use exact tax terminology (IRC section numbers, entity types, statutory labels). Imprecise language in a tax app erodes trust.
- **Minimal friction.** Every screen should have an obvious next action. Students should never wonder what to do next or feel like they're hunting for content.
- **No gamification.** No points, badges, streaks, or congratulatory animations. The reward is understanding the material.

---

## Visual style

The visual system is already implemented in `src/index.css`. These are the principles behind it:

- **Paper palette.** Background tones (`--paper`, `--paper-1`, `--paper-2`) evoke physical study materials — warm off-whites, not harsh browser white. This reduces eye strain during long sessions.
- **Navy ink.** Primary text color (`--ink: #1B3A6B`) is a deep navy rather than black. Slightly softer at reading distances without sacrificing contrast.
- **Amber action color.** `--action: #FBC02D` is the single attention-grabbing hue — used for the primary CTA button only. Keep it rare so it stays meaningful.
- **Nunito for body and UI.** Warm, rounded sans-serif. Approachable but not childish. Pairs well with technical content.
- **JetBrains Mono for code and references.** Used for IRC section numbers, code blocks, or any monospaced content.
- **8px spacing base.** All spacing uses multiples of 8 (`--sp-2` through `--sp-16`). Do not introduce arbitrary pixel values.
- **No drop shadows on content cards.** The paper layering system (paper → paper-1 → paper-2) conveys depth via background color, not shadows. Shadows feel out of place in this design language.
- **Pills are contextual.** The `Pill` component communicates track (Cram / Deep Dive / Practice) and status. Use neutral pills for informational labels; do not overload with color.

---

## Learning experience principles

- **Lesson first, quiz second.** The cram path is ordered: read a lesson, then practice on that topic. Don't interrupt reading with questions.
- **Short lessons.** Target 5–10 minutes per lesson. If a lesson is growing beyond ~600 words, split it.
- **Practice problems should bite.** Questions should require real recall or application, not recognition of bolded terms. Prefer short-answer and true/false with strong explanations over long multiple-choice stems.
- **Explanations are the product.** Every practice question must have a thorough `explain` field. A wrong answer without explanation teaches nothing.
- **No busywork.** Don't add review screens, progress bars, or congratulations pages that exist only to signal effort. Students know when they've finished a set.

---

## Tutor personality

The AI tutor (`TutorRail`) should feel like a knowledgeable study partner, not a customer service bot.

- **Concise.** 2–4 sentences per answer. If a topic warrants more, recommend the student re-read the relevant lesson block instead of expanding the chat answer.
- **Technically precise.** Always cite IRC sections when relevant. Use correct tax vocabulary (basis, §704(b), inside basis, QTIP, etc.).
- **Non-generic.** Do not start answers with "Great question!" or "Certainly!" Never be sycophantic.
- **Scoped to tax and accounting.** Politely decline off-topic questions. "I can only help with tax and accounting topics from this curriculum."
- **Context-aware.** The system prompt injects the current lesson title so the tutor can reference it. Answers should assume the student is reading that lesson, not an unknown topic.

---

## What to avoid

| Avoid | Why |
|---|---|
| Motivational microcopy ("You're doing great!") | Condescending to graduate students |
| Modal dialogs mid-session | Interrupts focus; breaks the study flow |
| Infinite scroll or pagination | All lesson content should be visible without paging |
| Bright backgrounds or saturated UI | Visually tiring during long study sessions |
| Multiple competing CTAs per screen | One primary action at a time |
| Progress percentages shown on lessons | Students estimate their own progress; false precision is distracting |
| Excessive animation | Transitions should be instant or under 150ms; no bouncing or elastic effects |
| External tracking or analytics scripts | Students should feel like this is a private study tool |

---

## Future product direction

Features that fit the vision:

- **Spaced repetition for practice questions.** Track which questions the student got wrong and resurface them before the next session.
- **Annotation mode.** Let students highlight sentences in lessons and attach a short personal note. Notes persist for the session.
- **Exam simulator.** A timed, mixed-chapter practice set that mimics the format and pacing of a real exam.
- **Printable one-pager per chapter.** Auto-generate a condensed reference sheet (key rules, IRC sections, formulas) from lesson data.

Features that do NOT fit:

- Social or sharing features — this is a solo study tool
- Instructor dashboard or LMS integration — out of scope for an indie cram app
- Video or audio content — the text-and-practice format is intentional
- Ads or upsell prompts — would break the clean, focused experience
