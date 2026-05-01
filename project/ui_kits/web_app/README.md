# Web App UI Kit — Flow Through Tax Tutor

A click-thru recreation of the Tax Tutor web app's core surfaces, built against `colors_and_type.css` from the design system root.

## Surfaces

1. **Dashboard** — landing after sign-in. Course progress, today's lesson, streak, recent activity.
2. **Lesson view** — three-column reading view with sticky chapter nav, body, and tutor rail.
3. **Practice problem** — multi-step calc problem with hints and worked solution.
4. **Glossary** — searchable list of code sections, forms, and terms.

## Components

- `Shell.jsx` — three-column app frame (left nav, main, right rail).
- `LeftNav.jsx` — course navigation, chapters and progress.
- `LessonCard.jsx` — chapter/lesson cards with progress.
- `LessonReader.jsx` — body of a lesson with §-ref pills and highlights.
- `TutorRail.jsx` — AI tutor chat panel.
- `PracticeProblem.jsx` — practice problem with steps, hints, attempts.
- `GlossaryEntry.jsx` — code section / form definitions.
- `Pill.jsx`, `Button.jsx`, `Input.jsx` — primitives.

## Notes

This is a fresh design — there was no existing codebase or Figma. Voice & vocabulary are taken from the SWFT 2026 textbook source.
