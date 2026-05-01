# Cram Path Expansion & Content Completion Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fix the Topics.jsx chapter label bug, expand the cram path from 8 to 21 lessons (adding Ch 9 and Ch 10), add 4 new Ch 18 lessons, and expand three practice sets.

**Architecture:** All changes are pure data and presentation — no new components, no routing changes. Five files touched: `Topics.jsx` (bug fix), `cramSession.js` (cram order), `Dashboard.jsx` (copy), `lessons.js` (4 new lessons), `practiceSets.js` (2 expanded sets + 1 new set).

**Tech Stack:** React 18, Vite, plain JavaScript data files (no TypeScript, no test runner).

---

## File Map

| File | Change |
|---|---|
| `src/components/Topics.jsx` | Fix chapter label ternary — one line |
| `src/data/cramSession.js` | Replace `CRAM_LESSON_ORDER` array |
| `src/components/Dashboard.jsx` | Update "Start here" sub-copy string |
| `src/data/lessons.js` | Append 4 new Ch 18 lesson objects before closing `];` |
| `src/data/practiceSets.js` | Expand `partnership-formation` + `transfer-tax-quick`; append new `partnership-distributions` set |

---

## Task 1: Fix Topics.jsx chapter label bug

**Files:**
- Modify: `src/components/Topics.jsx:42`

- [ ] **Step 1: Open the file and locate the broken ternary**

Current code at line 42 of `src/components/Topics.jsx`:
```jsx
~{lesson.estMinutes} min · {lesson.chapterKey === 'ch11' ? 'Ch 11' : 'Ch 18'}
```
This renders "Ch 18" for Ch 9 and Ch 10 lessons.

- [ ] **Step 2: Replace the ternary with an object lookup**

Replace the entire line with:
```jsx
~{lesson.estMinutes} min · {({ ch9: 'Ch 9', ch10: 'Ch 10', ch11: 'Ch 11', ch18: 'Ch 18' })[lesson.chapterKey] ?? lesson.chapterKey}
```

Full context of the surrounding block (lines 40–45 after the fix):
```jsx
        <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6 }}>
          ~{lesson.estMinutes} min · {({ ch9: 'Ch 9', ch10: 'Ch 10', ch11: 'Ch 11', ch18: 'Ch 18' })[lesson.chapterKey] ?? lesson.chapterKey}
        </div>
```

- [ ] **Step 3: Commit**

```bash
git add tax-tutor/src/components/Topics.jsx
git commit -m "fix: correct chapter label for Ch 9 and Ch 10 in Topics view"
```

---

## Task 2: Expand cram path + update Dashboard copy

**Files:**
- Modify: `src/data/cramSession.js`
- Modify: `src/components/Dashboard.jsx`

- [ ] **Step 1: Replace CRAM_LESSON_ORDER in cramSession.js**

Replace the entire contents of `src/data/cramSession.js` with:
```js
/** Ordered lesson IDs for the exam-cram path (Ch 9 → Ch 10 → S corp → transfer taxes). */
export const CRAM_LESSON_ORDER = [
  // Ch 9 — Partnerships: Formation & Basis
  'p-ch9-i-partnership-overview',
  'p-ch9-ii-formation-721723',
  'p-ch9-v-k1-allocations-704bc',
  'p-ch9-vi-partner-basis-liabilities-capital',
  'p-ch9-vii-loss-limits-selfemployment-nii-planning',
  // Ch 10 — Partnership Distributions
  'p-ch10-i-definitions-hot-assets',
  'p-ch10-ii-proportionate-current',
  'p-ch10-iii-liquidating-proportionate',
  'p-ch10-vi-sale-interest-741-751-corporate',
  // Ch 11 — S Corporations
  's-overview',
  's-eligibility-election',
  's-items-basis',
  's-distributions-aaa',
  's-big-pii',
  's-allocations-property',
  // Ch 18 — Federal Gift & Estate Taxes
  't18-unified-gift',
  't18-gift-tax-computation',
  't18-estate-formula',
  't18-estate-gst',
  't18-charitable-marital',
  't18-special-valuation',
];

export const DEFAULT_LESSON_ID = 's-overview';
export const DEFAULT_PRACTICE_SET_ID = 's-corp-core';
```

- [ ] **Step 2: Update Dashboard sub-copy**

In `src/components/Dashboard.jsx`, find the `.sub` div text inside the `.resume` block (around line 26):

Current:
```jsx
<div className="sub">
  S corporation core → distributions & BIG/PII → transfer taxes (gift & estate/GST outline).
</div>
```

Replace with:
```jsx
<div className="sub">
  Partnerships (formation, basis, distributions) → S corporation (eligibility, basis, BIG, PII) → transfer taxes (gift, estate, GST).
</div>
```

- [ ] **Step 3: Commit**

```bash
git add tax-tutor/src/data/cramSession.js tax-tutor/src/components/Dashboard.jsx
git commit -m "feat: expand cram path to 21 lessons (Ch 9, 10, 11, 18) and update Dashboard copy"
```

---

## Task 3: Add t18-gift-tax-computation lesson

**Files:**
- Modify: `src/data/lessons.js` — append before the final `];`

- [ ] **Step 1: Add the lesson object**

In `src/data/lessons.js`, locate the closing `];` (currently the last line before `export function getLessonById`). Insert the following object immediately before it, after `t18-estate-gst`:

```js
  {
    id: 't18-gift-tax-computation',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Gift tax computation — taxable gifts, prior cumulation, and the unified credit',
    estMinutes: 13,
    blocks: [
      {
        type: 'p',
        text: 'The federal gift tax uses a cumulative lifetime system. Each year\'s computation builds on all prior taxable gifts — preventing rate manipulation by splitting large transfers over multiple years.',
      },
      {
        type: 'h2',
        text: 'Step 1: Compute taxable gifts for the current year',
      },
      {
        type: 'ol',
        items: [
          'Start with the FMV of all completed gifts made during the year.',
          'Subtract any consideration received (an arm\'s-length sale is not a gift).',
          'Subtract the annual exclusion — $19,000 per donee (2025, indexed) for gifts of present interests only.',
          'Subtract unlimited exclusions: direct tuition or medical payments to providers under §2503(e); transfers to political organizations.',
          'Subtract the marital deduction for gifts to a U.S. citizen spouse (unlimited).',
          'Subtract the charitable deduction for qualifying gifts.',
          'The remainder is the taxable gift for the year.',
        ],
      },
      {
        type: 'h2',
        text: 'Gift splitting',
      },
      {
        type: 'p',
        text: 'A married couple can elect on Form 709 to treat any gift made by either spouse as made one-half by each. This doubles the annual exclusion to $38,000 per donee per year. Both spouses must consent on Form 709, even the one who made no gifts.',
      },
      {
        type: 'h2',
        text: 'Step 2: Cumulate all prior taxable gifts',
      },
      {
        type: 'p',
        text: 'Add all prior post-1976 taxable gifts to the current year taxable gifts to get the cumulative total. Compute the tentative tax on the total using the unified rate schedule, then subtract the tentative tax on prior gifts alone. This isolates the tax increment attributable to the current year\'s gifts.',
      },
      {
        type: 'h2',
        text: 'Step 3: Subtract the unified credit',
      },
      {
        type: 'p',
        text: 'The applicable credit amount offsets the tentative gift tax. For 2025, the applicable exclusion amount is approximately $13.99 million per person — the credit means no gift tax is owed until lifetime taxable gifts exceed that threshold. Credit used during life reduces the amount available against the estate.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Annual exclusion vs unified credit',
        text: 'Annual exclusion gifts ($19,000/donee) never eat into the unified credit — they are excluded before computing taxable gifts. Only amounts above the annual exclusion reduce the credit.',
      },
      {
        type: 'h2',
        text: 'Form 709 filing requirement',
      },
      {
        type: 'p',
        text: 'Form 709 is required when: (1) gifts to any one donee exceed the annual exclusion, (2) any gift of a future interest is made, or (3) gift splitting is elected. Due April 15 of the year following the gift year. An income tax extension automatically extends the Form 709 due date, but does not extend the time to pay any gift tax owed.',
      },
    ],
  },
```

- [ ] **Step 2: Commit**

```bash
git add tax-tutor/src/data/lessons.js
git commit -m "feat: add t18-gift-tax-computation lesson"
```

---

## Task 4: Add t18-estate-formula lesson

**Files:**
- Modify: `src/data/lessons.js` — append before closing `];`

- [ ] **Step 1: Add the lesson object**

Append immediately after the `t18-gift-tax-computation` object added in Task 3:

```js
  {
    id: 't18-estate-formula',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Estate tax formula: gross estate inclusions, deductions, and §2001 computation',
    estMinutes: 16,
    blocks: [
      {
        type: 'p',
        text: 'The estate tax formula follows a precise sequence: gross estate minus deductions equals taxable estate; add adjusted taxable gifts; compute tentative tax; subtract gift taxes paid and the unified credit. Each step has detailed rules.',
      },
      {
        type: 'h2',
        text: 'Gross estate inclusions (§§2033–2044)',
      },
      {
        type: 'ul',
        items: [
          '§2033: All property the decedent owned at death — valued at date-of-death FMV.',
          '§2040: Joint tenancy (JTWROS) — 100% included except for spouses (50% for spousal JTWROS). For non-spouses: include the fraction equal to the decedent\'s contribution divided by total consideration paid.',
          '§2042: Life insurance — included if (a) proceeds are payable to the estate, or (b) the decedent held any "incidents of ownership" (right to change beneficiary, borrow against the policy, assign, surrender, or exercise any option).',
          '§2038: Revocable transfers — anything the decedent could revoke, alter, amend, or terminate at death.',
          '§2036: Transfers with retained life estate or retained control over income or enjoyment are pulled back into the gross estate.',
          '§2039: Annuities — the value of a survivor benefit is included if the decedent had a right to payments.',
          '§2041: General powers of appointment (power to appoint to oneself, one\'s creditors, one\'s estate, or creditors of one\'s estate) cause inclusion; limited or special powers do not.',
        ],
      },
      {
        type: 'h2',
        text: 'Deductions from gross estate',
      },
      {
        type: 'ul',
        items: [
          '§2053: Debts of the decedent; administration expenses (executor fees, attorney fees, court costs, funeral expenses).',
          '§2054: Casualty or theft losses during estate administration (only if not claimed on the estate\'s income tax return).',
          '§2055: Charitable deduction — unlimited for qualifying transfers to charitable organizations.',
          '§2056: Marital deduction — unlimited for qualifying transfers to a U.S. citizen surviving spouse.',
          'State death taxes paid are deductible (not a credit) under current law.',
        ],
      },
      {
        type: 'h2',
        text: '§2001 tentative tax computation',
      },
      {
        type: 'ol',
        items: [
          'Taxable estate + adjusted taxable gifts (all post-1976 taxable gifts at their original gift-time values) = cumulative tax base.',
          'Apply the unified rate schedule to the tax base → tentative tax.',
          'Subtract gift taxes paid (or payable) on post-1976 taxable gifts.',
          'Subtract the applicable credit amount (unified credit).',
          'Result = net federal estate tax due.',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Why add back adjusted taxable gifts?',
        text: 'Adding prior taxable gifts pushes the estate into higher rate brackets — reflecting the cumulative unified system. Subtracting gift taxes previously paid prevents double-taxation of the same dollars.',
      },
      {
        type: 'h2',
        text: 'Applicable exclusion amount and portability',
      },
      {
        type: 'p',
        text: 'For 2025, the applicable exclusion amount is approximately $13.99 million per person. The unused portion of a deceased spouse\'s applicable exclusion — the deceased spousal unused exclusion (DSUE) — can be transferred to the surviving spouse by making a portability election on a timely filed Form 706. This election must be made even if no estate tax is otherwise owed.',
      },
      {
        type: 'h2',
        text: 'Alternate valuation date',
      },
      {
        type: 'p',
        text: 'The executor may elect to value the gross estate six months after death only if the election would reduce BOTH the gross estate value AND the estate tax liability. Partial elections are not permitted.',
      },
    ],
  },
```

- [ ] **Step 2: Commit**

```bash
git add tax-tutor/src/data/lessons.js
git commit -m "feat: add t18-estate-formula lesson"
```

---

## Task 5: Add t18-charitable-marital lesson

**Files:**
- Modify: `src/data/lessons.js` — append before closing `];`

- [ ] **Step 1: Add the lesson object**

Append immediately after the `t18-estate-formula` object:

```js
  {
    id: 't18-charitable-marital',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Charitable and marital deductions — QTIP, bypass trusts, and portability',
    estMinutes: 14,
    blocks: [
      {
        type: 'p',
        text: 'The charitable and marital deductions are each unlimited in amount. Knowing their conditions, exceptions, and planning applications is central to transfer tax practice.',
      },
      {
        type: 'h2',
        text: 'Charitable deduction (§2055 estate / §2522 gift)',
      },
      {
        type: 'ul',
        items: [
          '§2055 (estate): unlimited deduction for transfers to qualifying domestic charities, governments, and certain foreign organizations.',
          '§2522 (gift): same organizations; also unlimited.',
          'Split-interest trusts: a charitable remainder trust (CRT) pays an annuity or unitrust amount to a non-charitable beneficiary for a term; the remainder passes to charity. A charitable lead trust (CLT) pays income to charity first; the remainder passes to heirs.',
          'The deductible amount equals the present value of the charitable interest computed using the §7520 rate.',
        ],
      },
      {
        type: 'h2',
        text: 'Marital deduction and the terminable interest rule',
      },
      {
        type: 'p',
        text: 'The unlimited marital deduction (§2056 estate / §2523 gift) is available for transfers to a U.S. citizen surviving spouse. However, a terminable interest — one that will end on the occurrence of an event and then pass to a third party — generally does not qualify. Policy: prevent a deduction now for property that will escape tax in the surviving spouse\'s estate entirely.',
      },
      {
        type: 'h2',
        text: 'QTIP — the key exception to the terminable interest rule',
      },
      {
        type: 'p',
        text: 'Qualified terminable interest property (QTIP) qualifies for the marital deduction even though it is a terminable interest. Requirements: (1) the surviving spouse receives all income from the property at least annually, (2) no person (including the surviving spouse) has a power to appoint the property to anyone other than the surviving spouse during the survivor\'s lifetime, and (3) the executor makes the QTIP election on Form 706. The trade-off: QTIP is included in the surviving spouse\'s gross estate at death under §2044.',
      },
      {
        type: 'h2',
        text: 'Power of appointment trust',
      },
      {
        type: 'p',
        text: 'A marital trust where the surviving spouse holds a general power of appointment over the trust assets. Because the survivor can appoint the assets to themselves or their estate, the full value qualifies for the marital deduction and is included in the survivor\'s estate.',
      },
      {
        type: 'h2',
        text: 'Bypass (credit shelter) trust',
      },
      {
        type: 'p',
        text: 'Uses the first-to-die spouse\'s applicable exclusion amount to fund a trust for children or other beneficiaries. The surviving spouse may receive income and limited principal but holds no general power of appointment. Result: the bypass trust is not included in the surviving spouse\'s estate — effectively allowing both spouses\' exclusion amounts to shelter assets from estate tax.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Bypass trust vs portability',
        text: 'Portability (electing to transfer the DSUE) achieves a similar result with less administration but requires a timely Form 706 filing, and the DSUE is not indexed for inflation after transfer. Bypass trusts lock in the exclusion amount at death and allow future appreciation to grow outside both estates.',
      },
      {
        type: 'h2',
        text: 'Non-citizen spouse',
      },
      {
        type: 'p',
        text: 'The unlimited marital deduction is not available for transfers to a non-citizen surviving spouse. A qualified domestic trust (QDOT) can preserve the deduction: the trust must have at least one U.S. trustee and meet distribution restrictions that ensure the U.S. can collect estate tax on distributions to the non-citizen spouse.',
      },
    ],
  },
```

- [ ] **Step 2: Commit**

```bash
git add tax-tutor/src/data/lessons.js
git commit -m "feat: add t18-charitable-marital lesson"
```

---

## Task 6: Add t18-special-valuation lesson

**Files:**
- Modify: `src/data/lessons.js` — append before closing `];`

- [ ] **Step 1: Add the lesson object**

Append immediately after the `t18-charitable-marital` object:

```js
  {
    id: 't18-special-valuation',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Special valuation: FLPs, GRATs, and §§2701–2704',
    estMinutes: 14,
    blocks: [
      {
        type: 'p',
        text: 'Advanced transfer tax planning often involves transferring assets at discounted values or shifting future appreciation out of the estate. Congress enacted §§2701–2704 to prevent the most aggressive techniques from undermining the unified transfer tax system.',
      },
      {
        type: 'h2',
        text: 'Family limited partnerships (FLPs) and valuation discounts',
      },
      {
        type: 'ul',
        items: [
          'Parents form an FLP, contribute appreciated assets (real estate, securities), and retain the general partner interest.',
          'LP interests are gifted to children at discounted values reflecting two recognized discounts.',
          'Lack of control (minority interest) discount: LP has no management rights — typically 15–35% of pro-rata FMV.',
          'Lack of marketability discount (DLOM): no public market for the LP interest — typically 15–30%.',
          'Combined discounts of 30–45% can significantly reduce the taxable gift or estate value.',
        ],
      },
      {
        type: 'h2',
        text: '§2036 retained-interest trap',
      },
      {
        type: 'p',
        text: 'If the transferor retains the right to income, enjoyment, or control over transferred FLP assets — or if the transfer is not a bona fide sale for adequate consideration — the IRS can pull the full FMV of those assets back into the gross estate under §2036. Common red flags: commingling personal and FLP funds, failing to follow formalities, or using FLP assets as if they were still personally owned.',
      },
      {
        type: 'h2',
        text: 'GRATs (Grantor Retained Annuity Trusts)',
      },
      {
        type: 'ul',
        items: [
          'Grantor transfers appreciating assets to an irrevocable trust and retains an annuity for a fixed term.',
          'Taxable gift = FMV of transferred assets minus the present value of the retained annuity (discounted at the §7520 rate).',
          '"Zeroed-out" GRAT: the annuity is sized so that its present value equals the FMV transferred — resulting in a near-zero taxable gift.',
          'If assets grow faster than the §7520 hurdle rate, the excess passes to beneficiaries gift-tax-free.',
          'Risk: if the grantor dies during the GRAT term, the full trust value is included in the grantor\'s gross estate.',
        ],
      },
      {
        type: 'h2',
        text: '§2701 — anti-freeze for preferred equity interests',
      },
      {
        type: 'p',
        text: 'When a family member transfers a junior equity interest (e.g., common stock) while retaining a senior interest (e.g., preferred stock), the retained senior interest is assigned zero value for gift tax purposes — unless it carries a "qualified payment right" (a cumulative preferred dividend at a fixed rate). This prevents the classic "estate freeze" of locking in the senior interest\'s value while shifting all future appreciation to heirs through the junior interest.',
      },
      {
        type: 'h2',
        text: '§2702 — retained interests in trusts',
      },
      {
        type: 'p',
        text: 'When a grantor transfers property in trust and retains an interest, the retained interest is generally valued at zero — making the entire transfer a taxable gift. Exceptions: qualified personal residence trusts (QPRTs) and qualified annuity or unitrust interests (GRATs/GRUTs) may be valued using actuarial tables.',
      },
      {
        type: 'h2',
        text: '§2703 — buy-sell agreements',
      },
      {
        type: 'p',
        text: 'Buy-sell agreements that set prices below FMV are disregarded for estate and gift tax valuation unless: (1) it is a bona fide business arrangement, (2) it is not a device to transfer property to family members for less than FMV, and (3) its terms are comparable to an arm\'s-length agreement between unrelated parties.',
      },
      {
        type: 'h2',
        text: '§2704 — lapsing voting and liquidation rights',
      },
      {
        type: 'p',
        text: 'The lapse of a voting or liquidation right in a family-controlled entity is treated as a transfer by the holder of the lapsed right. This prevents families from artificially depressing values by creating rights that immediately lapse upon transfer.',
      },
      {
        type: 'callout',
        variant: 'warn',
        title: 'Exam focus',
        text: '§2036 is the IRS\'s primary weapon against FLPs — know the retained-interest and adequate-consideration tests. For §2701, the key rule is: retained preferred interest is valued at zero unless it carries a qualified payment right.',
      },
    ],
  },
```

- [ ] **Step 2: Commit**

```bash
git add tax-tutor/src/data/lessons.js
git commit -m "feat: add t18-special-valuation lesson"
```

---

## Task 7: Expand partnership-formation practice set (3 → 10 questions)

**Files:**
- Modify: `src/data/practiceSets.js`

- [ ] **Step 1: Locate the existing partnership-formation questions array**

Find the `partnership-formation` set in `src/data/practiceSets.js`. It currently ends with:
```js
      {
        id: 'p3',
        type: 'numeric',
        prompt: 'Partnership\'s inside basis in the equipment?',
        accepted: ['25000', '25,000'],
        hint: '§723 carryover basis from the contributing partner.',
        explain: 'Inside basis is $25,000.',
      },
    ],
  },
```

- [ ] **Step 2: Add 7 new questions after p3**

Replace the closing `],` of the questions array with:
```js
      {
        id: 'p3',
        type: 'numeric',
        prompt: 'Partnership\'s inside basis in the equipment?',
        accepted: ['25000', '25,000'],
        hint: '§723 carryover basis from the contributing partner.',
        explain: 'Inside basis is $25,000.',
      },
      {
        id: 'p4',
        type: 'truefalse',
        prompt: 'Under §721, a partner generally does not recognize gain or loss when contributing property to a partnership in exchange for a partnership interest.',
        correctBool: true,
        explain: '§721 provides nonrecognition for both partner and partnership on property contributions — realized gain or loss is deferred, not forgiven.',
      },
      {
        id: 'p5',
        type: 'truefalse',
        prompt: 'A partner who contributes appreciated securities to an investment company partnership always qualifies for §721 nonrecognition.',
        correctBool: false,
        explain: 'The investment company exception to §721 can trigger gain recognition when a partner effectively diversifies a concentrated appreciated position through a contribution to an investment company partnership.',
      },
      {
        id: 'p6',
        type: 'truefalse',
        prompt: 'A partner who receives a capital interest in a partnership in exchange for services must generally recognize ordinary income equal to the FMV of that interest.',
        correctBool: true,
        explain: 'Services are not "property" under §721. A fully vested capital interest received for services is ordinary compensation income at FMV.',
      },
      {
        id: 'p7',
        type: 'truefalse',
        prompt: 'Under §723, the partnership takes a carryover basis in contributed property equal to the contributing partner\'s adjusted basis.',
        correctBool: true,
        explain: '§723 carryover basis — the partnership steps into the contributor\'s shoes for the asset\'s tax basis, preserving the built-in gain or loss.',
      },
      {
        id: 'p8',
        type: 'truefalse',
        prompt: 'When a partner contributes a capital asset to a partnership, the partnership\'s holding period for that asset includes (tacks) the contributing partner\'s holding period.',
        correctBool: true,
        explain: 'The partnership tacks the contributing partner\'s holding period for contributed capital assets and §1231 property under §1223.',
      },
      {
        id: 'p9',
        type: 'truefalse',
        prompt: '§704(c) requires that pre-contribution built-in gain be allocated to the non-contributing partners when the contributed property is later sold by the partnership.',
        correctBool: false,
        explain: '§704(c) allocates pre-contribution built-in gain to the CONTRIBUTING partner — not the other partners — to prevent built-in gain from being shifted away from the person who economically realized it.',
      },
      {
        id: 'p10',
        type: 'numeric',
        prompt: 'Dana contributes land with basis $60,000 and FMV $100,000 to a partnership. The partnership later sells the land for $110,000. How much of the total $50,000 gain is allocated to Dana under §704(c)?',
        accepted: ['40000', '40,000'],
        hint: 'Dana\'s §704(c) built-in gain = FMV at contribution ($100,000) minus her basis ($60,000) = $40,000. Post-contribution appreciation ($10,000) is shared among all partners.',
        explain: 'The $40,000 pre-contribution built-in gain is allocated entirely to Dana. The remaining $10,000 of post-contribution appreciation is allocated among all partners per their agreement.',
      },
    ],
  },
```

- [ ] **Step 3: Commit**

```bash
git add tax-tutor/src/data/practiceSets.js
git commit -m "feat: expand partnership-formation practice set to 10 questions"
```

---

## Task 8: Expand transfer-tax-quick practice set (3 → 12 questions)

**Files:**
- Modify: `src/data/practiceSets.js`

- [ ] **Step 1: Locate the transfer-tax-quick questions array**

Find the `transfer-tax-quick` set. It currently ends with:
```js
      {
        id: 't3',
        type: 'truefalse',
        prompt: 'The gross estate is always the same as the probate estate.',
        correctBool: false,
        explain: 'Gross estate is broader — many non-probate assets are included.',
      },
    ],
  },
```

- [ ] **Step 2: Add 9 new questions after t3**

Replace the closing `],` of the questions array with:
```js
      {
        id: 't3',
        type: 'truefalse',
        prompt: 'The gross estate is always the same as the probate estate.',
        correctBool: false,
        explain: 'Gross estate is broader — many non-probate assets are included.',
      },
      {
        id: 't4',
        type: 'truefalse',
        prompt: 'A direct payment of tuition made to an educational institution (not to the student) can be excluded from federal gift tax under §2503(e) regardless of amount.',
        correctBool: true,
        explain: '§2503(e) provides an unlimited exclusion for direct tuition payments to educational institutions and direct medical payments to providers — these do not count against the annual per-donee exclusion.',
      },
      {
        id: 't5',
        type: 'truefalse',
        prompt: 'A gift of a future interest (such as a remainder interest in a trust) qualifies for the annual per-donee exclusion.',
        correctBool: false,
        explain: 'Only gifts of present interests qualify for the annual exclusion. Future interests — where the donee cannot currently use or enjoy the property — do not qualify.',
      },
      {
        id: 't6',
        type: 'truefalse',
        prompt: 'Gift splitting allows a married couple to treat a gift by one spouse as made half by each, effectively doubling the annual exclusion per donee to $38,000 (2025).',
        correctBool: true,
        explain: 'When gift splitting is elected on Form 709 with both spouses\' consent, each spouse is treated as making half the gift — $19,000 × 2 = $38,000 per donee.',
      },
      {
        id: 't7',
        type: 'numeric',
        prompt: 'What is the annual gift tax exclusion per donee for 2025 (in dollars)?',
        accepted: ['19000', '19,000'],
        explain: 'The 2025 annual per-donee exclusion is $19,000, indexed for inflation.',
      },
      {
        id: 't8',
        type: 'numeric',
        prompt: 'A married couple elects gift splitting. What is the maximum they can give to one grandchild completely gift-tax-free using only annual exclusions in 2025?',
        accepted: ['38000', '38,000'],
        hint: '$19,000 per spouse × 2 spouses.',
        explain: 'With gift splitting elected, each spouse is treated as giving $19,000, for a combined $38,000 per donee per year.',
      },
      {
        id: 't9',
        type: 'truefalse',
        prompt: 'Life insurance proceeds are always excluded from the insured\'s gross estate.',
        correctBool: false,
        explain: 'Life insurance is included in the gross estate if (a) proceeds are payable to the estate, or (b) the decedent held any "incidents of ownership" such as the right to change the beneficiary, borrow against the policy, or assign it.',
      },
      {
        id: 't10',
        type: 'truefalse',
        prompt: 'Property held in a revocable living trust is included in the grantor\'s gross estate at death.',
        correctBool: true,
        explain: 'Under §2038, because the decedent could revoke, alter, or amend the trust at any time before death, the full value is included in the gross estate.',
      },
      {
        id: 't11',
        type: 'truefalse',
        prompt: 'The unlimited marital deduction is available for any property passing to the surviving spouse, regardless of the form of transfer.',
        correctBool: false,
        explain: 'The terminable interest rule denies the marital deduction for interests that terminate on an event and pass to a third party — unless an exception (such as QTIP or power of appointment trust) applies.',
      },
      {
        id: 't12',
        type: 'choice',
        prompt: 'A "direct skip" for generation-skipping transfer tax (GSTT) purposes is:',
        choices: [
          'Any transfer to a grandchild that is made through a trust',
          'A transfer subject to gift or estate tax made directly to a person two or more generations below the transferor (a "skip person")',
          'Any transfer that avoids the estate tax entirely',
        ],
        correctChoiceIndex: 1,
        explain: 'A direct skip is a transfer subject to gift or estate tax made directly to a skip person — someone two or more generations below the transferor. It can be outright or in trust if the trust itself qualifies as a skip person.',
      },
    ],
  },
```

- [ ] **Step 3: Commit**

```bash
git add tax-tutor/src/data/practiceSets.js
git commit -m "feat: expand transfer-tax-quick practice set to 12 questions"
```

---

## Task 9: Add partnership-distributions practice set

**Files:**
- Modify: `src/data/practiceSets.js`

- [ ] **Step 1: Locate the end of PRACTICE_SETS**

Find the closing `];` of the `PRACTICE_SETS` array (after `transfer-tax-quick`).

- [ ] **Step 2: Append the new set**

Insert before `];`:
```js
  {
    id: 'partnership-distributions',
    eyebrow: 'Partnership · Ch. 10',
    title: 'Distributions — current, liquidating, and §751',
    questions: [
      {
        id: 'pd1',
        type: 'truefalse',
        prompt: 'A partner recognizes capital gain when the cash received in a current distribution exceeds the partner\'s outside basis immediately before the distribution.',
        correctBool: true,
        explain: 'Under §731(a), gain equal to the excess of money distributed over outside basis is recognized as capital gain. Deemed cash from liability reductions also counts.',
      },
      {
        id: 'pd2',
        type: 'truefalse',
        prompt: 'A partner can recognize a loss on a current (non-liquidating) distribution of cash and property.',
        correctBool: false,
        explain: 'Losses are generally not recognized on current distributions. Loss recognition is only available on liquidating distributions, and only when the partner receives solely cash, unrealized receivables, and/or inventory.',
      },
      {
        id: 'pd3',
        type: 'numeric',
        prompt: 'A partner\'s outside basis is $30,000 before a current distribution of $12,000 cash. What is the partner\'s outside basis after the distribution?',
        accepted: ['18000', '18,000'],
        hint: '$30,000 − $12,000.',
        explain: 'Cash distributions reduce outside basis dollar-for-dollar. $30,000 − $12,000 = $18,000 remaining outside basis. No gain — cash did not exceed basis.',
      },
      {
        id: 'pd4',
        type: 'truefalse',
        prompt: '"Hot assets" under §751 include both unrealized receivables and inventory items.',
        correctBool: true,
        explain: '§751 hot assets are: (1) unrealized receivables — items that would produce ordinary income when collected, such as cash-method accounts receivable; and (2) inventory items — broadly defined as any item that would produce ordinary income if sold by the partnership.',
      },
      {
        id: 'pd5',
        type: 'choice',
        prompt: 'In a current proportionate distribution, in what order must a partner reduce outside basis?',
        choices: [
          'Unrealized receivables and inventory first, then cash, then other property',
          'Cash first, then unrealized receivables and inventory, then other property',
          'Other property first, then unrealized receivables and inventory, then cash',
        ],
        correctChoiceIndex: 1,
        explain: 'The mandatory ordering under §732 is: (1) cash — which can trigger gain if it exceeds basis; (2) unrealized receivables and inventory — capped at partnership\'s inside basis and remaining outside basis; (3) other property — any remaining outside basis.',
      },
      {
        id: 'pd6',
        type: 'truefalse',
        prompt: 'A §754 election, once made, is binding on the partnership for all future years unless the IRS consents to revocation.',
        correctBool: true,
        explain: 'A §754 election is attached to the partnership\'s timely filed return and applies to all qualifying distributions and sales in that year and all future years. Revocation requires IRS consent.',
      },
      {
        id: 'pd7',
        type: 'numeric',
        prompt: 'Partner A\'s outside basis is $50,000. In a liquidating distribution, Partner A receives only $35,000 cash. What is the recognized capital loss?',
        accepted: ['15000', '15,000'],
        hint: 'Outside basis ($50,000) minus cash received ($35,000).',
        explain: 'When a liquidating distribution consists solely of cash, unrealized receivables, and/or inventory, the partner recognizes a capital loss equal to the outside basis minus what was received. $50,000 − $35,000 = $15,000 capital loss.',
      },
      {
        id: 'pd8',
        type: 'truefalse',
        prompt: 'A proportionate current distribution — one that does not change each partner\'s share of hot assets relative to their partnership interest — can trigger §751(b) ordinary income recharacterization.',
        correctBool: false,
        explain: '§751(b) only applies to disproportionate distributions that shift a partner\'s share of hot assets relative to their partnership interest. Proportionate distributions preserve each partner\'s hot asset share and do not trigger §751(b).',
      },
    ],
  },
```

- [ ] **Step 3: Wire the new set into Dashboard**

In `src/components/Dashboard.jsx`, find the second `grid-2` div (the one with `style={{ marginTop: 14 }}` that currently holds the `transfer-tax-quick` and the "Partnership formation (read)" lesson card). Add a **third** `grid-2` row immediately after the second one:

```jsx
<div className="grid-2" style={{ marginTop: 14 }}>
  <div className="lesson-card" onClick={() => onOpenPractice('partnership-distributions')}>
    <div className="eyebrow">Partnership · Ch 10</div>
    <div className="title">Distributions, §751 &amp; §754</div>
    <div className="meta">
      <Icon name="pencil-line" size={14} />
      <span>Interactive checks</span>
    </div>
  </div>
</div>
```

Leave the existing two `grid-2` rows untouched.

- [ ] **Step 4: Commit**

```bash
git add tax-tutor/src/data/practiceSets.js tax-tutor/src/components/Dashboard.jsx
git commit -m "feat: add partnership-distributions practice set and wire into Dashboard"
```

---

## Task 10: Smoke test — verify all views and cram path

**No code changes — verification only.**

- [ ] **Step 1: Start the dev server**

```bash
cd tax-tutor && npm run dev
```

Open `http://localhost:5173` in a browser.

- [ ] **Step 2: Verify Topics view — chapter labels**

Click "Topics" in the left nav. Select Ch 9 in the sidebar — confirm lessons show "Ch 9", not "Ch 18". Select Ch 10 — confirm "Ch 10". Select Ch 11 — confirm "Ch 11". Select Ch 18 — confirm "Ch 18".

- [ ] **Step 3: Verify cram path length and order**

On the Dashboard, confirm the "Start here" sub-copy reads: "Partnerships (formation, basis, distributions) → S corporation (eligibility, basis, BIG, PII) → transfer taxes (gift, estate, GST)."

Click "Start cram" — confirm first lesson is "What is a partnership?" (p-ch9-i-partnership-overview). Navigate forward using "Next lesson" — confirm the cram pill increments (e.g., "Cram 1/21", "Cram 2/21", …). Skip to the last lesson and confirm it is "Special valuation: FLPs, GRATs, and §§2701–2704."

- [ ] **Step 4: Verify four new Ch 18 lessons render**

In Topics (Ch 18 filter), confirm these four lessons appear:
- "Gift tax computation — taxable gifts, prior cumulation, and the unified credit"
- "Estate tax formula: gross estate inclusions, deductions, and §2001 computation"
- "Charitable and marital deductions — QTIP, bypass trusts, and portability"
- "Special valuation: FLPs, GRATs, and §§2701–2704"

Open each one and confirm all blocks render (no blank sections, no console errors).

- [ ] **Step 5: Verify expanded practice sets**

- Open "S corporation" practice set — confirm it still has 13 questions.
- Open "Anna & Ben formation drill" — confirm it now has 10 questions; navigate through all 10.
- Open "Gift & estate warm-up" — confirm it now has 12 questions; navigate through all 12.
- Open "Distributions, §751, and §754" (new) — confirm 8 questions load and check/answer flow works.

- [ ] **Step 6: Commit verification note**

No code to commit. If any issue was found and fixed in Steps 2–5, commit those fixes now with a descriptive message.
