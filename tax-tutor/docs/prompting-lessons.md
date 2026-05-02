# Prompting Lessons

Lessons learned from this session on how to prompt Claude Code more effectively.

---

## What worked well

- **"Inspect first, don't modify"** — starting a session by asking Claude to read and summarize the codebase before touching anything prevents blind changes.
- **Explicit constraints list** — the OpenAI tutor request included 8 numbered constraints (no frontend key exposure, use server route, specific model, etc.). This produced a correct first implementation with no back-and-forth.
- **Asking for a plan before coding** — for any multi-file change, requesting a written plan + approval checkpoint saved time and avoided unwanted scope creep.
- **Specifying files to NOT touch** — saying "do not modify unrelated files" kept changes focused and diffs clean.

---

## What caused confusion

### Vague layout bug descriptions
Saying "the answer box doesn't expand" caused 5+ iterations. Claude tried JavaScript fixes, flex fixes, and `useLayoutEffect` before arriving at the real cause (flex algorithm assigning fixed heights to scroll container children).

**The fix:** describe what you see in DevTools, not what you expect.
> Instead of: *"the box doesn't expand to show the full answer"*
> Say: *"DevTools shows `.bubble.tutor` has a computed `height: 47px` and the text overflows — what's constraining it?"*

### Ambiguous "it still doesn't work"
After each fix, "it still doesn't work" without additional context forced Claude to guess the next thing to try. A single observation from the browser would have short-circuited multiple attempts.

### Untracked files
Several components existed locally but were never committed. This didn't matter locally but broke Vercel builds. Lesson: after any significant local work session, run `git status` and commit everything the app depends on before pushing.

---

## Better prompt templates

### Reporting a layout/CSS bug
```
The element [selector] has a computed [property: value] in DevTools.
The text/content [is clipped / overflows / is hidden].
Expected: [description].
File: [component], CSS class: [class name].
```

### Requesting a new feature
```
Add [feature]. Constraints:
1. [constraint]
2. [constraint]
Before coding: identify which files are involved and explain the approach.
After coding: run npm run build and summarize files changed.
```

### Requesting a bug fix
```
Bug: [exact symptom, ideally with DevTools observation].
Relevant file: [file:line if known].
Do not modify unrelated files.
```

### Requesting documentation / non-code work
```
Create [file] at [path].
Purpose: [one sentence].
Include: [bulleted list of sections].
Do not modify application code.
```

---

## Approval and checkpointing practice

- **Always ask for a plan before multi-file changes.** One sentence per file is enough. If the plan touches more than 3 files, ask Claude to narrow scope.
- **Review the plan before saying "go."** Check that it doesn't include files you don't want touched.
- **After each logical chunk, check `git diff` before the next step.** Don't let changes accumulate unreviewed across multiple tasks.
- **Ask for `npm run build` confirmation after every change** — catches syntax errors immediately rather than at deploy time.

---

## When to ask for a plan before coding

Always ask for a plan when the change:
- touches more than 2 files
- adds a new dependency or API integration
- changes routing, state management, or data schemas
- involves deployment configuration

Skip the plan for:
- single-line CSS fixes
- text/copy changes
- renaming a variable
- adding a missing import

---

## When to commit, push, and deploy

| Action | When |
|---|---|
| **Commit** | After each self-contained logical change; after `npm run build` passes |
| **Push** | When you want Vercel to deploy, or to back up the work |
| **Deploy check** | After every push — watch the Vercel Deployments tab for build status |
| **Don't push** | Uncommitted local files that the committed code imports — always `git status` first |
