/**
 * Lesson bodies for exam cram — grounded in SWFT 2026 instructor-guide outlines
 * and the S corporation practice answer key.
 */

import { PARTNERSHIP_LESSONS } from './partnershipLessons';

export const LESSONS = [
  ...PARTNERSHIP_LESSONS,
  {
    id: 's-overview',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'S corporations — overview and how they differ from partnerships',
    estMinutes: 10,
    blocks: [
      {
        type: 'p',
        text: 'An S corporation is a state-law corporation that has elected pass-through treatment for federal income tax. Economically it behaves like a hybrid: owners get limited liability like a C corporation, but income generally flows through to shareholders like a partnership.',
      },
      {
        type: 'p',
        text: 'Key exam truths: (1) Federal income taxation resembles a partnership — the corporation computes items and allocates them to owners. (2) S status is only a federal tax election — the entity is still a corporation for state law. (3) Distributions can be tax-free to the extent earnings were already taxed to shareholders and basis/AAA mechanics support that result.',
      },
      {
        type: 'h2',
        text: 'Compared to partnerships (exam contrasts)',
      },
      {
        type: 'ul',
        items: [
          'Corporate debt generally does not increase shareholder stock basis (unlike partnership liabilities).',
          'Special allocations of tax items are not available — allocation is per-share, per-day (with limited exceptions such as a short-year election).',
          'Distributions of appreciated property trigger corporate-level gain recognition (§311(b)); partnerships often defer at entity level on liquidating distributions.',
          'An S corporation can owe federal income tax at the entity level in specific cases (e.g., built-in gains tax, excess net passive income tax).',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Memory anchor',
        text: 'Think “corporate shell + partnership-ish tax,” but with stricter eligibility, AAA/AEP distribution layers, and no debt basis from third-party corporate borrowing.',
      },
    ],
  },
  {
    id: 's-eligibility-election',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'Eligibility, Form 2553, consent, and losing S status',
    estMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'To be an S corporation the entity must be a domestic corporation, an eligible corporation type, have only allowable shareholders, meet the 100-shareholder limit, and have only one class of stock outstanding.',
      },
      {
        type: 'h2',
        text: 'One class of stock',
      },
      {
        type: 'p',
        text: 'Economic rights to distributions and liquidation must be identical. Voting rights may differ — nonvoting vs voting shares are allowed if economics match.',
      },
      {
        type: 'h2',
        text: 'Shareholders',
      },
      {
        type: 'ul',
        items: [
          'Individuals, estates, certain trusts, and exempt organizations can qualify.',
          'Partnerships, corporations, and nonresident aliens generally cannot be shareholders.',
          'Family aggregation rules can treat multiple family members as one shareholder for the 100-count.',
        ],
      },
      {
        type: 'h2',
        text: 'Form 2553 and consent',
      },
      {
        type: 'ul',
        items: [
          'Election: Form 2553; all shareholders must consent (unanimous), not majority.',
          'For current-year S status: file by the 15th day of the 3rd month of the tax year, or anytime in the prior year (calendar year → often March 15).',
          'Joint owners: both spouses must consent. In community property states, both spouses consent even if only one is on title.',
          'Late election after the deadline is generally effective the next tax year.',
        ],
      },
      {
        type: 'h2',
        text: 'Termination vs revocation',
      },
      {
        type: 'ul',
        items: [
          'Voluntary revocation: shareholders owning more than 50% of shares — majority, not unanimous.',
          'Revocation can split the year into a short S year and short C year.',
          'If the corporation fails eligibility, S status ends on the date the requirement is violated.',
          'Passive investment income rule: with C corporation E&P, too much passive investment income for three years can terminate S at the beginning of the 4th year.',
          'Re-election after termination: generally a 5-year wait unless IRS relief applies.',
        ],
      },
    ],
  },
  {
    id: 's-items-basis',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'Separately stated items, stock & debt basis, I-D-L ordering',
    estMinutes: 14,
    blocks: [
      {
        type: 'p',
        text: 'The S corporation computes ordinary business income on page 1 of Form 1120-S. Items that can affect any two shareholders differently are separately stated on Schedule K (capital gains, charitable contributions, §179, foreign taxes, etc.).',
      },
      {
        type: 'callout',
        variant: 'warn',
        title: 'Course drill rule (your answer key)',
        text: 'For this course’s practice software, depreciation recapture on the S corporation return is treated as nonseparately stated (ordinary/page 1 bucket), even though many capital/recapture items are separately stated in other contexts. Follow that convention on exams using the same materials.',
      },
      {
        type: 'h2',
        text: 'Stock basis — increases and decreases',
      },
      {
        type: 'p',
        text: 'Stock basis increases with capital contributions, purchases of stock, and income items (both nonseparately stated income and separately stated income items that increase basis). It decreases for distributions that are tax-free return of basis, then losses and deductions (subject to limits), and nondeductible expenses.',
      },
      {
        type: 'h2',
        text: 'I-D-L ordering (income → distributions → losses)',
      },
      {
        type: 'p',
        text: 'Within a year, apply increases first, then reduce for distributions (that are not taxed as dividends) before losses consume remaining basis. If stock basis hits zero, additional losses can reduce debt basis only for loans the shareholder made directly to the corporation — not mere guarantees.',
      },
      {
        type: 'p',
        text: 'Distributions do not reduce debt basis. If both a loss and a distribution occur in the same year, ordering matters: income increases basis first; then distributions reduce basis; then losses reduce what is left.',
      },
      {
        type: 'h2',
        text: 'Passive and at-risk',
      },
      {
        type: 'p',
        text: 'Section 469 (passive activity loss) and at-risk limits apply at the shareholder level, not the corporation. Material participation is tested at shareholder level.',
      },
    ],
  },
  {
    id: 's-distributions-aaa',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'Cash distributions, AAA, AEP, and OAA',
    estMinutes: 12,
    blocks: [
      {
        type: 'p',
        text: 'When an S corporation has never been a C corporation (no accumulated E&P from a C year), cash distributions are generally tax-free to the extent of stock basis; excess is capital gain.',
      },
      {
        type: 'h2',
        text: 'With C corporation E&P',
      },
      {
        type: 'p',
        text: 'Use distribution ordering: first from AAA (tax-free, reduces stock basis), then dividend income to the extent of AEP, then return of capital (basis), then capital gain if basis is exhausted. Tax-exempt income flows affect shareholder basis and may appear in OAA; OAA distributions are generally tax-free after AAA and AEP are depleted in the ordering rules you study in depth.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'AAA vs basis',
      },
      {
        type: 'p',
        text: 'AAA is a corporate-level running account of cumulative S-period results that helps police single taxation of S earnings. It is not the same as any one shareholder’s stock basis, though they move together in many simple facts.',
      },
    ],
  },
  {
    id: 's-big-pii',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'Built-in gains tax and passive investment income tax',
    estMinutes: 11,
    blocks: [
      {
        type: 'h2',
        text: 'Built-in gains tax (§1374)',
      },
      {
        type: 'p',
        text: 'If a C corporation converts to S with appreciated assets, the built-in gain at conversion can be taxed at the corporate level if recognized during the recognition period. The rate used in your materials is the corporate rate (21%). Net recognized built-in gains and losses for the year are netted; the tax base is also limited by taxable income concepts as modeled in your course.',
      },
      {
        type: 'h2',
        text: 'Passive investment income penalty tax',
      },
      {
        type: 'p',
        text: 'For an S corporation with C corporation E&P, if passive investment income exceeds 25% of gross receipts for three consecutive years, S status can terminate at the start of the fourth year. Separately, a penalty tax can apply on excess net passive income — your answer key walks through: net PII, excess PII over 25% of gross receipts, scaling to excess net passive income, then 21% tax.',
      },
      {
        type: 'h2',
        text: 'LIFO recapture on S election',
      },
      {
        type: 'p',
        text: 'Recapture is generally the excess of FIFO inventory value over LIFO; no negative adjustment if LIFO is higher. Tax is paid in four equal installments in the materials you used.',
      },
    ],
  },
  {
    id: 's-allocations-property',
    chapterKey: 'ch11',
    track: 'S corporation',
    title: 'Per-share-per-day allocations and property distributions',
    estMinutes: 11,
    blocks: [
      {
        type: 'h2',
        text: 'Ownership changes',
      },
      {
        type: 'p',
        text: 'Default: each item is allocated per share, per day. Weight ownership percentages by days held over the year. On a sale of all shares mid-year, the seller is treated as owning the stock on the date of transfer for this allocation unless a short-year election splits the year with actual tracing.',
      },
      {
        type: 'h2',
        text: 'Property distributions (§311(b))',
      },
      {
        type: 'ul',
        items: [
          'The corporation recognizes gain as if it sold the property to the shareholder at FMV.',
          'No loss recognition on distribution of depreciated property.',
          'Shareholder takes FMV basis in the property received.',
          'The recognized gain is an item passed through and allocated among shareholders — not solely to the distributee unless facts say otherwise.',
        ],
      },
    ],
  },
  {
    id: 't18-unified-gift',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Unified gift tax — elements, exclusions, and Form 709',
    estMinutes: 14,
    blocks: [
      {
        type: 'p',
        text: 'Federal gift and estate taxes are unified: one cumulative transfer tax system. Lifetime taxable transfers and the estate at death draw on the same exemption/credit architecture (with details in your textbook’s rate and credit schedules).',
      },
      {
        type: 'h2',
        text: 'What is a gift?',
      },
      {
        type: 'p',
        text: 'A completed gift requires a competent donor, donee who can receive the property, donative intent, delivery, and acceptance. Retained control can make a transfer incomplete for gift tax purposes.',
      },
      {
        type: 'h2',
        text: 'Annual exclusion (indexed)',
      },
      {
        type: 'p',
        text: 'The instructor guide uses $19,000 per donee for 2025 for gifts of present interests. Future interests do not qualify for the annual exclusion. Gift splitting between spouses doubles the available annual exclusion per donee when elected.',
      },
      {
        type: 'h2',
        text: 'Common exclusions and non-gifts',
      },
      {
        type: 'ul',
        items: [
          'Direct payments of tuition or medical expenses to a provider (§2503(e)) can be excluded if structured correctly.',
          'Support obligations under state law are not gifts.',
          'Transfers to political organizations are excluded.',
          'Certain divorce-related property settlements within three years of a final decree may avoid gift treatment.',
        ],
      },
      {
        type: 'h2',
        text: 'Disclaimers',
      },
      {
        type: 'p',
        text: 'A qualified disclaimer must be in writing, within nine months, and without acceptance of benefits — the property passes as if the disclaimant never had the interest.',
      },
      {
        type: 'h2',
        text: 'Returns',
      },
      {
        type: 'p',
        text: 'Form 709 is due April 15 following the year of the gift when required (e.g., gifts exceeding the annual exclusion, future interests, split-gift elections by non-owner spouse).',
      },
    ],
  },
  {
    id: 't18-estate-gst',
    chapterKey: 'ch18',
    track: 'Transfer taxes',
    title: 'Estate tax building blocks, marital deduction, and GST outline',
    estMinutes: 14,
    blocks: [
      {
        type: 'p',
        text: 'The estate tax applies to transfers by reason of death. Valuation is generally date-of-death FMV, with a strict alternate valuation election that must reduce both the gross estate and the estate tax.',
      },
      {
        type: 'h2',
        text: 'Gross estate vs probate estate',
      },
      {
        type: 'p',
        text: 'Probate assets are a subset. The gross estate includes many non-probate items: certain joint property, life insurance incidents of ownership, revocable transfers, and other §203x categories you list in your outline.',
      },
      {
        type: 'h2',
        text: 'Taxable estate',
      },
      {
        type: 'p',
        text: 'Start from gross estate, subtract deductions (administration expenses, debts, casualty/theft losses if elected, charitable and marital transfers that qualify), add adjusted taxable gifts — the full formula is in Concept Summary 18.2 in the text.',
      },
      {
        type: 'h2',
        text: 'Marital deduction and terminable interests',
      },
      {
        type: 'p',
        text: 'The marital deduction requires property passing to the surviving spouse in a nondeductible terminable-interest way unless an exception such as QTIP applies — policy: don’t skip tax on both spouses’ deaths for property that will never be taxed in the survivor’s estate.',
      },
      {
        type: 'h2',
        text: 'GSTT (outline)',
      },
      {
        type: 'p',
        text: ‘Generation-skipping transfer tax hits certain transfers that skip a generation (direct skips, taxable distributions, taxable terminations). It shares exemption concepts with the unified system; rate is the highest transfer tax rate (40% in your materials’ simplification).’,
      },
    ],
  },
  {
    id: ‘t18-gift-tax-computation’,
    chapterKey: ‘ch18’,
    track: ‘Transfer taxes’,
    title: ‘Gift tax computation — taxable gifts, prior cumulation, and the unified credit’,
    estMinutes: 13,
    blocks: [
      {
        type: ‘p’,
        text: ‘The federal gift tax uses a cumulative lifetime system. Each year\’s computation builds on all prior taxable gifts — preventing rate manipulation by splitting large transfers over multiple years.’,
      },
      {
        type: ‘h2’,
        text: ‘Step 1: Compute taxable gifts for the current year’,
      },
      {
        type: ‘ol’,
        items: [
          ‘Start with the FMV of all completed gifts made during the year.’,
          ‘Subtract any consideration received (an arm\’s-length sale is not a gift).’,
          ‘Subtract the annual exclusion — $19,000 per donee (2025, indexed) for gifts of present interests only.’,
          ‘Subtract unlimited exclusions: direct tuition or medical payments to providers under §2503(e); transfers to political organizations.’,
          ‘Subtract the marital deduction for gifts to a U.S. citizen spouse (unlimited).’,
          ‘Subtract the charitable deduction for qualifying gifts.’,
          ‘The remainder is the taxable gift for the year.’,
        ],
      },
      {
        type: ‘h2’,
        text: ‘Gift splitting’,
      },
      {
        type: ‘p’,
        text: ‘A married couple can elect on Form 709 to treat any gift made by either spouse as made one-half by each. This doubles the annual exclusion to $38,000 per donee per year. Both spouses must consent on Form 709, even the one who made no gifts.’,
      },
      {
        type: ‘h2’,
        text: ‘Step 2: Cumulate all prior taxable gifts’,
      },
      {
        type: ‘p’,
        text: ‘Add all prior post-1976 taxable gifts to the current year taxable gifts to get the cumulative total. Compute the tentative tax on the total using the unified rate schedule, then subtract the tentative tax on prior gifts alone. This isolates the tax increment attributable to the current year\’s gifts.’,
      },
      {
        type: ‘h2’,
        text: ‘Step 3: Subtract the unified credit’,
      },
      {
        type: ‘p’,
        text: ‘The applicable credit amount offsets the tentative gift tax. For 2025, the applicable exclusion amount is approximately $13.99 million per person — the credit means no gift tax is owed until lifetime taxable gifts exceed that threshold. Credit used during life reduces the amount available against the estate.’,
      },
      {
        type: ‘callout’,
        variant: ‘tip’,
        title: ‘Annual exclusion vs unified credit’,
        text: ‘Annual exclusion gifts ($19,000/donee) never eat into the unified credit — they are excluded before computing taxable gifts. Only amounts above the annual exclusion reduce the credit.’,
      },
      {
        type: ‘h2’,
        text: ‘Form 709 filing requirement’,
      },
      {
        type: ‘p’,
        text: ‘Form 709 is required when: (1) gifts to any one donee exceed the annual exclusion, (2) any gift of a future interest is made, or (3) gift splitting is elected. Due April 15 of the year following the gift year. An income tax extension automatically extends the Form 709 due date, but does not extend the time to pay any gift tax owed.’,
      },
    ],
  },
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) ?? null;
}

export function getLessonIndexInCram(id, order) {
  return order.indexOf(id);
}
