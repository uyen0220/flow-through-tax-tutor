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
        text: 'Think "corporate shell + partnership-ish tax," but with stricter eligibility, AAA/AEP distribution layers, and no debt basis from third-party corporate borrowing.',
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
        text: 'For this course\'s practice software, depreciation recapture on the S corporation return is treated as nonseparately stated (ordinary/page 1 bucket), even though many capital/recapture items are separately stated in other contexts. Follow that convention on exams using the same materials.',
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
        text: 'AAA is a corporate-level running account of cumulative S-period results that helps police single taxation of S earnings. It is not the same as any one shareholder\'s stock basis, though they move together in many simple facts.',
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
        text: 'Federal gift and estate taxes are unified: one cumulative transfer tax system. Lifetime taxable transfers and the estate at death draw on the same exemption/credit architecture (with details in your textbook\'s rate and credit schedules).',
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
        text: 'The marital deduction requires property passing to the surviving spouse in a nondeductible terminable-interest way unless an exception such as QTIP applies — policy: don\'t skip tax on both spouses\' deaths for property that will never be taxed in the survivor\'s estate.',
      },
      {
        type: 'h2',
        text: 'GSTT (outline)',
      },
      {
        type: 'p',
        text: 'Generation-skipping transfer tax hits certain transfers that skip a generation (direct skips, taxable distributions, taxable terminations). It shares exemption concepts with the unified system; rate is the highest transfer tax rate (40% in your materials\' simplification).',
      },
    ],
  },
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
];

export function getLessonById(id) {
  return LESSONS.find(l => l.id === id) ?? null;
}

export function getLessonIndexInCram(id, order) {
  return order.indexOf(id);
}
