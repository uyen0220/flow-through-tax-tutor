# Cram Path Expansion & Content Completion — Design Spec
**Date:** 2026-05-01  
**Status:** Approved

---

## Problem

The exam-cram app covers four chapters (Ch 9, 10, 11, 18) but the cram path only walks students through Ch 11 (S corp) and Ch 18 (transfer taxes). Ch 9 and Ch 10 — which already have thorough lesson libraries — are unreachable from the cram flow. Ch 18 has only 2 thin lessons vs 6–7 for the other chapters. Three practice sets have only 3 questions each.

Additionally, `Topics.jsx` has a display bug: chapter labels for Ch 9 and Ch 10 lessons both render as "Ch 18".

---

## Goals

1. Fix the `Topics.jsx` chapter label bug.
2. Expand the cram path from 8 → 21 lessons by adding 5 Ch 9 lessons, 4 Ch 10 lessons, and 4 new Ch 18 lessons.
3. Bring Ch 18 lesson depth to parity with Ch 9/10/11 (add 4 new lessons).
4. Expand thin practice sets and add one new Ch 10 distributions set.

---

## Section 1 — Bug Fix

**File:** `src/components/Topics.jsx`, line 42

**Problem:** The chapter label is a ternary that only handles `ch11` and `ch18`:
```js
lesson.chapterKey === 'ch11' ? 'Ch 11' : 'Ch 18'
```

**Fix:** Replace with an object lookup covering all four chapter keys:
```js
({ ch9: 'Ch 9', ch10: 'Ch 10', ch11: 'Ch 11', ch18: 'Ch 18' })[lesson.chapterKey] ?? lesson.chapterKey
```

---

## Section 2 — Cram Path Order (8 → 21 lessons)

`src/data/cramSession.js` — update `CRAM_LESSON_ORDER`:

```
// Ch 9 (5 lessons)
p-ch9-i-partnership-overview
p-ch9-ii-formation-721723
p-ch9-v-k1-allocations-704bc
p-ch9-vi-partner-basis-liabilities-capital
p-ch9-vii-loss-limits-selfemployment-nii-planning

// Ch 10 (4 lessons)
p-ch10-i-definitions-hot-assets
p-ch10-ii-proportionate-current
p-ch10-iii-liquidating-proportionate
p-ch10-vi-sale-interest-741-751-corporate

// Ch 11 — S corp (6 lessons, unchanged)
s-overview
s-eligibility-election
s-items-basis
s-distributions-aaa
s-big-pii
s-allocations-property

// Ch 18 — Transfer taxes (6 lessons: 2 existing + 4 new)
t18-unified-gift
t18-gift-tax-computation       ← new
t18-estate-formula             ← new
t18-estate-gst
t18-charitable-marital         ← new
t18-special-valuation          ← new
```

`DEFAULT_LESSON_ID` stays `'s-overview'` (Dashboard still emphasises S corp as the "Start here" card). The cram path now starts at the Ch 9 overview when the user clicks "Start cram".

---

## Section 3 — New Ch 18 Lessons (add to `src/data/lessons.js`)

Four new lessons inserted between the two existing Ch 18 lessons:

| ID | Title | Key topics |
|---|---|---|
| `t18-gift-tax-computation` | Gift tax: taxable gifts, prior gifts, and the unified credit | Taxable gift formula; annual exclusion subtraction; gift-splitting mechanics ($19k → $38k/donee); cumulative prior gifts stacking; tentative tax minus prior-year tax; unified credit offset; Form 709 due date |
| `t18-estate-formula` | Estate tax formula: gross estate, deductions, §2001 computation | Gross estate inclusions §§2033–2044 (owned property, JTWROS, life insurance with incidents of ownership, revocable transfers, annuities, powers of appointment); allowable deductions (admin expenses, debts, casualty losses, charitable, marital); §2001 tentative tax on cumulative taxable transfers minus gift taxes paid; unified credit/applicable exclusion amount; portability election and DSUE |
| `t18-charitable-marital` | Charitable and marital deductions — QTIP, bypass trust, portability | §2055 estate charitable deduction; §2522 gift charitable deduction; terminable interest rule; QTIP election (income to spouse, estate tax on death); bypass (credit shelter) trust vs outright marital bequest; portability of DSUE between spouses; Form 706 election requirements |
| `t18-special-valuation` | Special valuation, FLPs, and §§2701–2704 | FLP/LLC valuation discounts (lack of control, lack of marketability); §2036 retained-interest trap (grantor retains enjoyment → included in gross estate); GRATs; §2701 anti-freeze rules for preferred interest transfers; §2703 buy-sell agreement valuation; §2704 lapsing rights; planning guardrails |

Each lesson follows the existing block schema (`p`, `h2`, `ul`, `ol`, `callout`). Target ~12–16 min read time each.

---

## Section 4 — Practice Set Expansions (`src/data/practiceSets.js`)

### 4a. Expand `partnership-formation` (3 → ~10 questions)

Add questions covering:
- §721 non-recognition general rule (T/F)
- §721 exception: contribution to investment company (T/F)
- Services-for-interest: capital interest vs profits interest treatment (choice)
- §704(c): which partner bears pre-contribution built-in gain (T/F)
- Holding period tacking for capital asset contributions (T/F)
- Guaranteed payment character (services vs capital) (choice)
- Numeric: basis after contribution with liability assumption

### 4b. Expand `transfer-tax-quick` (3 → ~12 questions)

Add questions covering:
- Annual exclusion present vs future interest distinction (T/F)
- Gift splitting mechanics (numeric: effective exclusion per donee)
- §2503(e) tuition/medical exclusion (T/F)
- Disclaimer requirements (T/F)
- Gross estate inclusion: revocable trust (T/F)
- Gross estate inclusion: life insurance with incidents of ownership (T/F)
- JTWROS inclusion rule for non-spouse (numeric: % included)
- Marital deduction: terminable interest (T/F)
- GSTT: what is a "direct skip" (choice)

### 4c. New set `partnership-distributions` (~8 questions)

| ID | Type | Topic |
|---|---|---|
| `pd1` | T/F | Gain on cash distribution > outside basis |
| `pd2` | T/F | Loss recognition on current distributions |
| `pd3` | numeric | Cash distribution, compute remaining outside basis |
| `pd4` | T/F | §751 hot assets defined (unrealized receivables + inventory) |
| `pd5` | choice | Ordering: cash, then URs/inventory, then other property |
| `pd6` | T/F | §754 election is mandatory once made for future years |
| `pd7` | numeric | Liquidating distribution: loss computation |
| `pd8` | T/F | Proportionate current distribution triggers §751 recharacterization |

---

## Files Changed

| File | Change |
|---|---|
| `src/components/Topics.jsx` | Fix chapter label ternary (bug) |
| `src/data/cramSession.js` | Expand `CRAM_LESSON_ORDER` to 21 lessons |
| `src/data/lessons.js` | Add 4 new Ch 18 lesson objects |
| `src/data/practiceSets.js` | Expand 2 existing sets; add `partnership-distributions` |
| `src/components/Dashboard.jsx` | Update "Start here" card sub-copy to reflect full Ch 9–18 path |

No new components, no CSS changes, no routing changes needed.

### Dashboard copy update

The `resume` card currently reads:
> "S corporation core → distributions & BIG/PII → transfer taxes (gift & estate/GST outline)."

Replace with:
> "Partnerships (formation, basis, distributions) → S corporation (eligibility, basis, BIG, PII) → transfer taxes (gift, estate, GST)."

---

## Out of Scope

- Making the TutorRail functional (live AI responses) — mock is acceptable for MVP
- User authentication / progress persistence
- Mobile responsive layout
- Any Ch 9/10 lessons NOT listed in Section 2 (already exist in the library; not added to cram path by design)
