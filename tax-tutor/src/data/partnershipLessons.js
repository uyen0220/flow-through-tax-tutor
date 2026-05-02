/**
 * Partnership lessons — comprehensive coverage of SWFT 2026 Instructor Guide
 * Ch. 9 (Formation, Operation, and Basis) and Ch. 10 (Distributions, Transfers, Terminations).
 * Pedagogical structure and paraphrase; cite your textbook for authority and examples.
 */

export const PARTNERSHIP_LESSONS = [
  /* ========== Chapter 9 ========== */
  {
    id: 'p-ch9-i-partnership-overview',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'What is a partnership? Entity types, flow-through, inside vs outside basis',
    estMinutes: 22,
    blocks: [
      {
        type: 'p',
        text: 'A partnership is an association of two or more persons to carry on a trade or business, with each contributing money, property, labor, or skill, and all sharing in profits and losses. A "person" includes individuals, trusts, estates, corporations, associations, and other partnerships. The entity must be unincorporated and cannot be classified as a corporation, trust, or estate for this chapter\'s partnership rules.',
      },
      {
        type: 'h2',
        text: 'State-law entity types (taxed as partnerships)',
      },
      {
        type: 'ul',
        items: [
          'General partnership (GP): two or more general partners may manage; often used for operations and corporate joint ventures; general partners may be liable on recourse debt.',
          'Limited partnership (LP): at least one general partner and one or more limited partners; common for capital raises (real estate, oil and gas, R&D, investment vehicles). Limited partners typically do not manage and are not liable for partnership debts.',
          'LLC: members get limited liability like a corporation with partnership-style single-level federal tax when elected/qualified.',
          'LLP: similar to a GP in many states; key difference — a partner is generally not personally liable for other partners\' malpractice.',
          'Partnership agreement (LLC: operating agreement): rights, obligations, income/deduction/cash allocations, capital calls, termination — governs allocations subject to Code limits.',
        ],
      },
      {
        type: 'h2',
        text: 'Flow-through and Form 1065',
      },
      {
        type: 'p',
        text: 'The partnership pays no Federal income tax. It files Form 1065 and issues a Schedule K-1 to each partner. Partners take their distributive share into account on their own returns and pay tax there.',
      },
      {
        type: 'h2',
        text: 'Aggregate (conduit) vs entity concept',
      },
      {
        type: 'ul',
        items: [
          'Aggregate: the partnership is a channel — items flow to partners (e.g., each partner uses K-1 amounts on their return).',
          'Entity: the partnership is a separate unit with its own tax "personality" (e.g., the partnership files Form 1065).',
          'Actual rules blend both concepts across formation, operation, and liquidation.',
        ],
      },
      {
        type: 'h2',
        text: 'Inside basis and outside basis (core of single taxation)',
      },
      {
        type: 'ul',
        items: [
          'Inside basis: the partnership\'s adjusted basis in each asset it holds.',
          'Outside basis: each partner\'s basis in the partnership interest.',
          'Income/gain allocated to a partner increases outside basis; deductions/losses decrease outside basis — so partnership items are not taxed twice (e.g., on allocation and again on disposition of the interest). See the Paige example in your text.',
          'Broadly: aggregate inside basis aligns with aggregate outside bases (before operations distort the two).',
        ],
      },
      {
        type: 'h2',
        text: 'Capital vs profits (loss) interests',
      },
      {
        type: 'p',
        text: 'A capital interest reflects the sharing ratio for partnership capital — what the partner would get on immediate liquidation based on NAV. A profits interest is the share of current operating results. They need not match; profit/loss sharing can change by amending the agreement, and allocations can vary by item within a single year.',
      },
    ],
  },
  {
    id: 'p-ch9-ii-formation-721723',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'Formation: §721, basis, holding periods, exceptions, contributed property',
    estMinutes: 28,
    blocks: [
      {
        type: 'p',
        text: 'Formation is intended to be tax-neutral as a matter of congressional policy — you can organize without generally prohibitive tax costs. Under the general rule, neither the partnership nor contributing partner recognizes gain or loss when property is contributed for a partnership interest. Realized gain or loss is deferred, not forgiven.',
      },
      {
        type: 'h2',
        text: 'Carryover and substituted basis (§722 / §723)',
      },
      {
        type: 'ul',
        items: [
          'Partnership takes a carryover basis in contributed property equal to the contributor\'s adjusted basis.',
          'The partner receives a substituted basis in the partnership interest reflecting contributed basis (including cash contributed).',
        ],
      },
      {
        type: 'h2',
        text: 'Holding period',
      },
      {
        type: 'ul',
        items: [
          'The partnership includes the contributing partner\'s holding period in contributed assets ("tacking").',
          'The partner\'s holding period for the partnership interest depends on what was contributed: if capital asset or §1231 property contributed, periods align; if only cash or non-capital/non-§1231 assets, the interest\'s holding period starts when acquired.',
        ],
      },
      {
        type: 'h2',
        text: 'When §721 does not apply — common triggers',
      },
      {
        type: 'ul',
        items: [
          'Appreciated securities to an investment partnership — can recognize built-in diversification gain at contribution.',
          'Disguised sales — Regulations treat certain contribution-plus-distribution patterns as partial sales; assumption of liabilities other than qualified liabilities matters. Distribution more than two years after contribution may avoid presumptions; distributions "reasonable" relative to invested capital can also matter.',
          'Services for an interest — not covered by §721 like property: a fully vested capital interest for services often produces ordinary compensation for FMV of the interest; profits interests often taxed as profits are earned (often no ascertainable FMV upfront). Discuss carried interest rules and recharacterization of certain future capital gains vs other K-1 items; paying for the interest with cash/other property or §83 income avoids "pure" carried interest treatment.',
          '§721(c): another exception area covered in-depth in text/Regs.',
        ],
      },
      {
        type: 'h2',
        text: 'Cost recovery after contribution',
      },
      {
        type: 'p',
        text: 'For depreciable property, the partnership generally steps into the shoes of the contributor for depreciation/amortization. For intangible assets, similarly. §197 intangibles amortize over 15 years when applicable (examples in text: goodwill, going concern, systems, customer intangibles, patents, franchises, trademarks, §197 covenants, etc.); others over useful life if any.',
      },
      {
        type: 'h2',
        text: 'Character and built-in ordinary/capital on later partnership sale',
      },
      {
        type: 'ul',
        items: [
          'If a partner contributes receivables unrecognized under the partnership\'s method (e.g., cash basis receivables) or contributes inventory-like hot items, ordinary income treatment can arise when the partnership later sells — aggregate theory assigns items to contributing partner/partnership mechanics as modeled in text.',
          'If a partner contributes property with built-in capital loss and the partnership sells within five years of contribution, recognized capital loss is limited to the built-in capital loss.',
        ],
      },
      {
        type: 'h2',
        text: '§704(c): precontribution built-in gain and loss',
      },
      {
        type: 'p',
        text: 'Fair market value and tax basis diverge at contribution. Income, gain, loss, and depreciation must be specially allocated over time so the built-in amount is not shifted away from the contributing partner. Concept Summary 9.2 in the text summarizes contribution and basis topics.',
      },
    ],
  },
  {
    id: 'p-ch9-iii-elections-methods-year',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'Elections, organizational costs, syndication, accounting methods, tax year §706',
    estMinutes: 24,
    blocks: [
      {
        type: 'h2',
        text: 'Partnership-level elections bind partners',
      },
      {
        type: 'p',
        text: 'New partnerships face many elections: cost recovery assumptions, §179 where applicable, inventory, business interest (§163(j)) at entity level as modeled, credits (excluding foreign tax credit computed at partnership with partner elections), percentage vs cost depletion (except oil/gas wells at partner election), research expense treatment, and more.',
      },
      {
        type: 'p',
        text: 'If the partnership skips an election on items it must decide, partners generally cannot resurrect it individually.',
      },
      {
        type: 'h2',
        text: 'Elections retained by each partner',
      },
      {
        type: 'ul',
        items: [
          'COD income: whether to reduce depreciable property basis first.',
          'Oil/gas: cost vs percentage depletion.',
          'Foreign taxes: credit vs deduction.',
        ],
      },
      {
        type: 'h2',
        text: 'Organizational, startup, syndication',
      },
      {
        type: 'ul',
        items: [
          'Organizational and startup parallel corporate rules — each bucket has its own §: up to $5,000 immediate (subject to phaseout) plus 180‑month amortization from the month business begins.',
          'Syndication costs (marketing interests, brokerage, regs fees, prospectus/legal/accounting tied to offerings, printing selling materials): capitalized, no amortization election.',
          'Additional tangible basis from post-contribution expenditures can be treated as newly placed‑in‑service MACRS.',
        ],
      },
      {
        type: 'h2',
        text: 'Methods of accounting',
      },
      {
        type: 'ul',
        items: [
          'Partnerships may adopt cash, accrual, or hybrid with rules.',
          'Accrual partnerships may need to accelerate income timing relative to applicable financial statements (per text coverage).',
          'Cash generally barred if there is any C‑corporation partner or the partnership is a tax shelter — unless exempted via $31 million (2025, text) gross receipts average over three preceding years test, PSC C corp partner, farming, etc.; failure triggers accrual next year.',
        ],
      },
      {
        type: 'h2',
        text: 'Partnership taxable year — §706(b)',
      },
      {
        type: 'ul',
        items: [
          'Partners recognize items for partnership years ending within their taxable year.',
          'Required taxable year cascade: majority partners (>50%) same year → all "principal partners" (≥5%) same year → least aggregate deferral under Regs.',
          'Alternatives: business purpose fiscal year; §444 election capped at ~3‑month deferral vs required year; 52/53‑week permitted framework.',
        ],
      },
    ],
  },
  {
    id: 'p-ch9-iv-form1065-income-measurement',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'Form 1065: reporting ordinary income vs separately stated items',
    estMinutes: 26,
    blocks: [
      {
        type: 'p',
        text: 'A partnership measures and reports taxable items but does not pay entity-level Federal income tax. Form 1065 is due the 15th day of the third month after yearend (March 15 for calendar year). The partnership is still subject to payroll, sales, property, franchise, and other non-income taxes.',
      },
      {
        type: 'h2',
        text: 'Six-page structure (survey level)',
      },
      {
        type: 'ul',
        items: [
          'Page 1 ordinary trade or business net.',
          'Pages 2–4 factual and partner disclosures.',
          'Schedule K summarizes partnership‑wide flows to allocate on Schedules K-1.',
          'Page 6 area includes balance sheet, book vs tax reconciliation, partnership capital reconciliation (Schedule M-2 ties to tax‑basis capital on K‑1 trend).',
        ],
      },
      {
        type: 'h2',
        text: 'Two buckets: ordinary business vs separately stated',
      },
      {
        type: 'p',
        text: 'Ordinary business income bundles items not requiring partner‑by‑partner attribute variation (elections like depreciation/§174 style issues often net here conceptually — while interest expense may reside on page 1 until limited, with disallowed interest separately stated under rules you study).',
      },
      {
        type: 'p',
        text: 'Separately stated items: any item whose character/limits/credits/nature diverge partner to partner.',
      },
      {
        type: 'h2',
        text: 'Representative Schedule K separates (non‑exhaustive exam list)',
      },
      {
        type: 'ul',
        items: [
          'ST/LT capital nets; §1231.',
          'Portfolio — dividends (qualified vs ordinary), interest, royalties, related expenses.',
          'Disallowed business interest with carryforward data.',
          '§179 expense.',
          'Guaranteed payments (services vs capital characterization matters elsewhere).',
          'Passive rents and similar.',
          'IDC intangibles in oil.',
          'General business credits with partner‑level limitation mechanics.',
          'Foreign taxes paid/accruled with FTC vs deduction packing.',
        ],
      },
      {
        type: 'h2',
        text: 'What the partnership does not deduct at entity level (examples)',
      },
      {
        type: 'ul',
        items: [
          'Partnership NOL deductions as such.',
          'Oil/gas percentage depletion in partnership form (conceptually partner-level framing).',
          'Dividends received deduction.',
        ],
      },
      {
        type: 'h2',
        text: 'Guaranteed payments & interest layering',
      },
      {
        type: 'p',
        text: 'Guaranteed payments compensate for services or capital regardless of profitability — capitalization vs deduction hinges on underlying nature. Allocate interest tracing across activities inside the Regulations framework; disallowance under §163(j) can pass through separately with excess taxable income carryforward mechanics at partner tier.',
      },
      {
        type: 'h2',
        text: 'Reconciling book and taxable capital flows',
      },
      {
        type: 'p',
        text: 'Schedule K line 18 style reconciliation nets ordinary and separately stated items (see text\'s Beachside excerpt). Schedule M-2 tracks partners\' capital at tax‑basis conventions and should tie Schedule L equity when schedules use compatible bases.',
      },
      {
        type: 'h2',
        text: 'Schedules K-2/K-3 cross-border overlays',
      },
      {
        type: 'p',
        text: 'Modern exams reference additional international granularity — follow your Forms and instructions for FTC, withholding, treaty, and ancillary codes beyond base K lines.',
      },
    ],
  },
  {
    id: 'p-ch9-v-k1-allocations-704bc',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'Schedules K-1; §704(b) substantial economic effect; §704(c); QBI notes',
    estMinutes: 28,
    blocks: [
      {
        type: 'p',
        text: 'Schedule K aggregates; each Schedule K‑1 allocates to one partner respecting the partnership agreement unless Code/regulations dictate otherwise.',
      },
      {
        type: 'p',
        text: 'The sum across all K‑1s for each line equals Schedule K totals (timing and §706 closing matters on sales). Line 20 "Other information" conveys coded data (e.g., §199A QBI scaffolding). Follow K‑1 Instructions for exhaustive code lists.',
      },
      {
        type: 'h2',
        text: 'Guaranteed payments on K-1',
      },
      {
        type: 'p',
        text: 'Include GP in income by last day of partnership year attribution to recipient; wages vs SE vs NII treatment studied later.',
      },
      {
        type: 'h2',
        text: '§704(b) substantial economic effect (outline)',
      },
      {
        type: 'ul',
        items: [
          'Regulatory capital accounts at FMV contributions/distributions: income/gain boosts capital; losses/deductions reduce capital.',
          'Liquidating distribution to positive capital: partner must receive net assets with FMV ≥ terminal positive account.',
          'Negative capital: obligated to restore/deficit obligations under alternative tests satisfying Regulations.',
          'Substantiality: allocations must materially affect after‑tax economics, not manipulate taxes alone.',
          'Built‑in FMV/book differences on contributions reside in §704(b) bookkeeping and pair with §704(c) layering.',
        ],
      },
      {
        type: 'h2',
        text: '§704(c)(1)/(3) layering',
      },
      {
        type: 'p',
        text: 'Pre‑contribution built‑ins tracked in §704(b) book capital; tax allocations must claw back/forbid shifting so contributing partner economically bears inherent gain or loss timing.',
      },
      {
        type: 'h2',
        text: 'QBID scaffolding for partners',
      },
      {
        type: 'ul',
        items: [
          'Guaranteed payments for services excluded from partner QBI baseline; similarly §707(a) unrelated‑service characterization.',
          'Guaranteed payments for use of capital may look like investment/income segregation per regulations.',
          'QBID is computed at partner level with partnership furnishing QBI wages, UBIA schedules as required.',
        ],
      },
    ],
  },
  {
    id: 'p-ch9-vi-partner-basis-liabilities-capital',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: '§705 adjustments; liabilities; partner capital vs outside basis',
    estMinutes: 26,
    blocks: [
      {
        type: 'h2',
        text: '§705 upward adjustments',
      },
      {
        type: 'ul',
        items: [
          'Distributive share of income incl. LT/ST gains and exempt income flows.',
          'Share of partnership liability increases deemed cash contribution.',
          'Post‑formation contributions of cash/property.',
        ],
      },
      {
        type: 'h2',
        text: '§705 downward adjustments',
      },
      {
        type: 'ul',
        items: [
          'Distributive deductions/losses including capital limitation layers, FTC choice amounts, charitable, suspended BI interest slated for revival.',
          'Nondeductible partnership expenses flowing through.',
          'Liability reductions treated as distributions.',
          'Cash/property distributions after formation.',
        ],
      },
      {
        type: 'h2',
        text: 'Partner perspective',
      },
      {
        type: 'p',
        text: 'Outside basis governs distributions and allowable losses; Schedule K‑1 does not spoon‑feed cumulative basis — partners must roll forward externally. Basis cannot descend below zero before loss deductibility regimes.',
      },
      {
        type: 'h2',
        text: 'Partnership liabilities in basis — overview',
      },
      {
        type: 'ul',
        items: [
          'Debt allocations increase/decrease basis analogous to constructive cash flows.',
          'Recourse: partners bear economic risk — allocation uses economic‑risk‑of‑loss constructs; guaranteeing debt can recharacterize as recourse.',
          'Nonrecourse: lender looks only to collateral; profit‑sharing fractions often allocate introductory layers with §752 regulatory complexity deferred to advanced courses.',
          'Qualified non‑recourse financing (QNR) interacts with §465 at‑risk computations for real‑estate debt from banks/governments/etc.',
          'Consult Exhibit 9.2 sequencing in your text.',
        ],
      },
      {
        type: 'h2',
        text: 'Partner capital accounts vs tax basis capital',
      },
      {
        type: 'p',
        text: 'Capital accounting can use tax basis GAAP §704(b): book valuations differ. Partnership return uses tax‑basis capital on Schedule M‑2 and related K‑1 capital analysis; negatives require documentation of permitted deficits and interplay with allocations and liquidation waterfall.',
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Paige example (double taxation avoidance)',
        text: 'Income increases basis before sale proceeds are compared — otherwise pre‑basis gain would recur on exit. Memorize sequencing for exam stories.',
      },
    ],
  },
  {
    id: 'p-ch9-vii-loss-limits-selfemployment-nii-planning',
    chapterKey: 'ch9',
    track: 'Partnership · Ch. 9',
    title: 'Loss limits §704(d)/§465/§469/EBL; SE & NII; planning & partner transactions',
    estMinutes: 30,
    blocks: [
      {
        type: 'h2',
        text: 'Four sequential hurdles for losses',
      },
      {
        type: 'ol',
        items: [
          '§704(d) partnership basis limitation — deductible only against outside basis computed before layering current losses.',
          '§465 at‑risk ceilings after surviving basis hurdle.',
          '§469 passive limitation unless materially participating / RE professional / special rental carveouts.',
          'Excess business loss limitation §461(l)‑style overlays for noncorporate taxpayers exceeding thresholds ($313k single / $626k MFJ‑style numbers for 2025 per text illustration) with NOL carry linkage.',
        ],
      },
      {
        type: 'p',
        text: 'Suspended losses revive when basis restores via income, liabilities, contributions, etc.; ordering matters across code sections.',
      },
      {
        type: 'h2',
        text: 'At‑risk — snapshot',
      },
      {
        type: 'p',
        text: 'Recourse and QNR real estate financings broaden at‑risk mounts; naked non‑recourse does not absent QNR scaffolding.',
      },
      {
        type: 'h2',
        text: 'Passive activity — snapshot',
      },
      {
        type: 'ul',
        items: [
          'Rental presumption passive absent RE professional status.',
          '$25,000 rental offset phases out MAGI thresholds with 50 ¢ haircut past $100k modified AGI thresholds (text cites).',
        ],
      },
      {
        type: 'h2',
        text: 'Self‑employment tax (partnerships)',
      },
      {
        type: 'ul',
        items: [
          'Partners ≠ employees — no wage withholding paradigm by default.',
          'General partner distributives often incur SE wage base + Medicare overlays (2025 OASDI cap $176.1k with wage coordination; +0.9% extra Medicare tiers).',
          'Guaranteed payment for services: SE; GP for capital: explicitly not SE in contrast.',
          'Proposed 1997 Regulations (still not finalized) list tests for LLP member vs general analogue (liability management contract authority hours).',
        ],
      },
      {
        type: 'h2',
        text: 'Net investment income tax',
      },
      {
        type: 'p',
        text: '3.8% levy on lesser of net investment income or MAGI exceeding MFJ vs other thresholds described in outline. GP capital may count as portfolio style; enumerated partnership investment income classes include dividends interest passive gains etc.',
      },
      {
        type: 'h2',
        text: 'Entity choice framing (survey)',
      },
      {
        type: 'p',
        text: 'Compare combined federal burdens of partnership flow vs corporate double‑tax stories; partnerships flexibly admit assets without corporate control prerequisites; beware GP unlimited liability hedged via LLC/LLP; contrasts with pro‑rata corp distribution rules.',
      },
      {
        type: 'h2',
        text: 'Loss planning vignettes',
      },
      {
        type: 'p',
        text: 'Year‑end contributions/debt boosts can unlock deductions if hurdles satisfied; unwind later when income shields.',
      },
      {
        type: 'h2',
        text: 'Tax administration & substantive partner dealings',
      },
      {
        type: 'ul',
        items: [
          'Tax matters partnership representation of IRS audits.',
          'Consistent reporting — notify IRS when deviating plus penalties.',
          'Substance‑over‑form anti‑abuse partnership transaction disregards abusive schemes.',
          'Partner vs partnership dealings: leases sales loans short tech services mimic third parties versus related party disallowance (>50%) loss suppression or ordinary income conversion when not dual capital‑asset statuses.',
          'Partnership agreements anchor distributive allocations — reduce uncertainty + operational clarity.',
        ],
      },
    ],
  },

  /* ========== Chapter 10 ========== */
  {
    id: 'p-ch10-i-definitions-hot-assets',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: 'Distributions: definitions, aggregate theory, current vs liquidating, §751 basics',
    estMinutes: 22,
    blocks: [
      {
        type: 'p',
        text: 'A distribution shifts partnership property/cash referencing partner ownership stakes under aggregate theory — but not every partner payment qualifies (rent versus guaranteed compensation ≠ distribution). Subsequent rules hinge on altering hot asset shares vs mere liquidity.',
      },
      {
        type: 'h2',
        text: 'Current vs liquidating',
      },
      {
        type: 'ul',
        items: [
          'Current (nonliquidating): partner remains after receipt.',
          'Liquidating: partner ceases existence as partner via redemption or wholesale partnership termination distributions.',
          'Classification depends solely on partner survival thereafter.',
        ],
      },
      {
        type: 'h2',
        text: 'Hot assets §751(c)-(d)',
      },
      {
        type: 'p',
        text: 'Unrealized receivables arise from unrecognized income under accounting methods stemming from ordinary income originations (goods non‑capital deliveries, rendered services pipelines). Inventory definition for partnership distribution/sale overlays is notoriously broad — items producing ordinary income if sold by partnership or contributing partner historically. Concept Summary 10.1 cross‑maps differing definitional footprints for distributions vs partnership interest transfers.',
      },
      {
        type: 'h2',
        text: 'Proportionate vs disproportionate framing',
      },
      {
        type: 'p',
        text: 'Proportionate preserves each partner\'s share of unrealized ordinary buckets; disproportionate reallocations trigger §751(b) ordinary recharacterizations (detailed forward). Substantially appreciated inventory test (FMV >120% aggregate basis) governs disparity modeling.',
      },
    ],
  },
  {
    id: 'p-ch10-ii-proportionate-current',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: 'Proportionate current distributions — cash, liabilities, securities, ordering',
    estMinutes: 26,
    blocks: [
      {
        type: 'p',
        text: 'Generally neither partner nor partnership recognizes gain/loss purely from proportionality if rules satisfied — but cash/overbasis triggers gain. Current distributions cannot crystalize recognizable losses ordinarily — uncertainty deferral rationale.',
      },
      {
        type: 'h2',
        text: 'Cash constructs',
      },
      {
        type: 'ul',
        items: [
          'Gain if money distributed exceeds outside basis.',
          'Debt‑share reductions can mimic cash receipts when disproportionate drops exceed remaining basis shields.',
          'Marketable securities carry pseudo‑cash treatment with basis/FMV quirks per Chapter coverage.',
        ],
      },
      {
        type: 'h2',
        text: 'Property basis caps',
      },
      {
        type: 'p',
        text: 'Substituted carried basis capped by partnership interior basis absent liquidating uplift story — step‑down permissible to absorb partner outside basis scarcity.',
      },
      {
        type: 'h2',
        text: 'Mandatory ordering',
      },
      {
        type: 'ol',
        items: [
          'Cash first trimming outside basis recognizing gain if overrun.',
          'Unrealized receivables/inventory tiers second allocating carryover ceilings vs remaining outside basis compression.',
          'Other asset classes lastly with multi‑asset disparity adjustments collapsing basis toward FMVs when shortages demand.',
        ],
      },
      {
        type: 'callout',
        variant: 'tip',
        title: 'Bob scenario cluster (exam staple)',
        text: 'Practice the cash‑only trims, overheated cash capital gain bursts, combos with receivables, inventory carryovers, paired land parcels with depression of loss‑lurking appreciated mixture — reproduce numeric templates from your textbook until mechanical.',
      },
    ],
  },
  {
    id: 'p-ch10-iii-liquidating-proportionate',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: 'Proportionate liquidating distributions vs corporate contrast; Jill patterns',
    estMinutes: 24,
    blocks: [
      {
        type: 'h2',
        text: 'No partnership‑level liquidation gain/loss (contrast liquidating corp FMV hypothetical sale regimes)',
      },
      {
        type: 'h2',
        text: 'Liquidation ordering parallels current with twist',
      },
      {
        type: 'p',
        text: 'Cash first can ignite capital gains if punching above collapsing outside basis shells. Ordinary hot assets capped by lesser of partnership inside or remaining partner equity. Residual pours into residual capital‑style assets unlocking step‑UP opportunities impossible for hot inventory tiers.',
      },
      {
        type: 'h2',
        text: 'Loss recognition permitted only narrowly',
      },
      {
        type: 'p',
        text: 'Partner realizes loss only collecting solely cash unrealized AR/inventory combos while outside basis overshadows aggregated inside assigned bases — aligning Jill fact matrix from guide.',
      },
      {
        type: 'h2',
        text: 'Dual land appreciation allocation drill',
      },
      {
        type: 'p',
        text: 'Carry totals, inject appreciation uplift on discount plots, finalize residual split weighting tying aggregate substituted basis footprint to mandated FMV loadings.',
      },
    ],
  },
  {
    id: 'p-ch10-iv-special-dist-751b-precontrib',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: 'Disguised sales, securities; seven‑year §704(b) distributions; §751(b) disproportionate',
    estMinutes: 24,
    blocks: [
      {
        type: 'h2',
        text: 'Disguised sales via distribution ladders',
      },
      {
        type: 'p',
        text: 'Recharacterizations force gain recognition partner‑side acquiring cost basis echoes for residual partnership holdings.',
      },
      {
        type: 'h2',
        text: 'Marketable securities overlays',
      },
      {
        type: 'p',
        text: 'Portions treated as monetization events can trigger gain interplay when partnership intrinsic basis exceeds dwindling recipient basis.',
      },
      {
        type: 'h2',
        text: 'Seven‑year pre‑contribution distribution traps',
      },
      {
        type: 'ul',
        items: [
          'Distribution of contributor\'s appreciated property to another partner <7 years sparks gain.',
          'Any non‑cash payout to contributing partner soon after inbound contribution also surfaces gain under twin triggers.',
          'Partners must adjust interplay between outside basis layering and lingering built‑in parcels.',
        ],
      },
      {
        type: 'h2',
        text: 'Disproportionate hot manipulations §751(b)',
      },
      {
        type: 'p',
        text: 'Deemed simultaneous distribution followed by instant resale to partnership injects ordinary treatment with resetting cost basis overlays for redeemed hot nests.',
      },
    ],
  },
  {
    id: 'p-ch10-v-section-736-buyouts',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: '§736 liquidating retirees/decedents — (a) income vs (b) property payments',
    estMinutes: 26,
    blocks: [
      {
        type: 'p',
        text: 'Ongoing redemption or inherited interest buyouts echo corporate redemption analogies albeit partnership overlay.',
      },
      {
        type: 'h2',
        text: 'When §736 choreography matters chiefly',
      },
      {
        type: 'p',
        text: 'General‑partner human retiring from service‑centric ventures lacking capital materially driving income historically — capital intensive or limited partner redemptions gravitate simplified §736(b) universes.',
      },
      {
        type: 'h2',
        text: '§736(a) constructs',
      },
      {
        type: 'ul',
        items: [
          'Pro‑rata unrealized receivable purchase streams.',
          'Unstated partnership goodwill payouts absent agreement definitions.',
          'Certain annuity / lump classifications enumerated in readings.',
          'Residual classification becomes partnership ordinary deduction via guaranteed payment analogue or retains pass‑through flavored income references per drafting.',
        ],
      },
      {
        type: 'h2',
        text: '§736(b) property settlement bucket',
      },
      {
        type: 'ul',
        items: [
          'Fixed capital equipment, inventories even if hot-coded, accrual receivables, stated goodwill textual definitions.',
          'Non‑cash hot cashouts might become disproportionate distribution hybrids.',
          'Taxation: partnerships typically nondeductible; partner walks down outside basis ladders then capital characterization surpluses/shortfalls.',
        ],
      },
      {
        type: 'h2',
        text: 'Partnership‑level deductibility distinctions',
      },
      {
        type: 'p',
        text: '736(a) GP treatments may yield deductions whereas 736(b) payments remain capitalization style — align service partnership goodwill interplay with examiner stories.',
      },
    ],
  },
  {
    id: 'p-ch10-vi-sale-interest-741-751-corporate',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: 'Sale of partnership interest §741; Natalie; §751 ordinary; §706(c); other dispositions',
    estMinutes: 26,
    blocks: [
      {
        type: 'h2',
        text: 'Amount realized − outside basis netting debt assumed',
      },
      {
        type: 'p',
        text: 'Liabilities enlarge both numerator and denominator identically netting zero deltas yet shifting liquidity metrics — memorization trap.',
      },
      {
        type: 'h2',
        text: 'Natalie arithmetic template',
      },
      {
        type: 'p',
        text: 'Tiny capital account interplay with sizable debt uplift demonstrates economic leverage recognition absent historical operating profit stories.',
      },
      {
        type: 'h2',
        text: 'Hot asset ordinary overlay on disguised liquidation of ordinary pockets',
      },
      {
        type: 'p',
        text: 'Receivable / inventory composites convert portions to ordinary without requiring substantial appreciation gating pertinent to §751 inventory definition on interest transfers.',
      },
      {
        type: 'h2',
        text: 'Carried interest resale clock',
      },
      {
        type: 'p',
        text: '>3 year holdings obtain LTCG coloring otherwise short‑term characterization sweeps speculative flips.',
      },
      {
        type: 'h2',
        text: '§706(c)(2)(A) taxable year closures for exiting partners vs K‑1 logistical lag',
      },
      {
        type: 'h2',
        text: 'Other dispositions',
      },
      {
        type: 'ul',
        items: [
          '§351 corporate contributions often nontaxable continuing businesses.',
          'Death triggers income splits + basis step interplay + buy‑sell interplay with §736 vs §741 vs eventual §754 patch.',
          'Gifts bifurcate interim ownership income reporting splits without donor year closing.',
        ],
      },
    ],
  },
  {
    id: 'p-ch10-vii-section-754-termination-planning',
    chapterKey: 'ch10',
    track: 'Partnership · Ch. 10',
    title: '§754 adjustments; termination (NOP technical); LLC/LLP; reporting; planning §10.14',
    estMinutes: 28,
    blocks: [
      {
        type: 'h2',
        text: '§754 elective / mandatory remedial arcs',
      },
      {
        type: 'p',
        text: 'Inside vs outside divergence after trades or asymmetric distributions fosters optional inside readjustments; partnership files election binding future years absent IRS revocation consents.',
      },
      {
        type: 'h2',
        text: '$250k substantial built‑in loss or loss allocation gateways + $250k substantial basis reductions on hefty liquidations triggering compulsory adjustments',
      },
      {
        type: 'h2',
        text: 'Sale vs distribution adjustment mechanics enumerated in instructor guide bullets (gain boosts inside; step downs on property receipt; symmetrical reversals)',
      },
      {
        type: 'h2',
        text: 'Technical termination choreography — NOP churn fact pattern',
      },
      {
        type: 'p',
        text: 'Two largest interests sold within rolling windows spawns phantom termination with carryover asset blocks feeding newly minted bridging partnership before instantaneous redistribution of fresh interests preserving tack histories per examples.',
      },
      {
        type: 'h2',
        text: 'Statutory termination triad vs non‑closing events enumerated (death redemption new partner swaps contrast).',
      },
      {
        type: 'h2',
        text: 'Family partnerships + LLC/LLP administration appendices',
      },
      {
        type: 'p',
        text: 'Family definitions exclude siblings purposely; legitimacy demands capital materially producing income with bona fide control OR vital services alternatively; gratuitous gifting partial recognition exposures.',
      },
      {
        type: 'p',
        text: 'LLCs taxed as partnerships with no statutory general partner yet debt allocation analogies continue; LLP conversions emphasize continuity clauses retaining ownership proportions.',
      },
      {
        type: 'h2',
        text: 'Tax administration',
      },
      {
        type: 'p',
        text: 'Designated TMP + partner item consistency oath + punitive mismatch penalties.',
      },
      {
        type: 'h2',
        text: 'Planning playbook highlights',
      },
      {
        type: 'ul',
        items: [
          'Monitor cash/debt footprints vs recipient basis shields pre‑distribution sequencing.',
          'Pair capital‑character property to absorb residual basis instead of trapping capital losses on liquidation.',
          'Proportionately seed hot inventories when avoiding §751 burns.',
          'Watch seven‑year horizon after appreciated inbound moves planning subsequent cross‑partner dribbles.',
          'Embed liquidation formulas valuations buy‑sell coherence.',
          'Sales vs redemption vs installment interplay with goodwill amortization qualifiers.',
          '§754 conditioning for buyers + state tax overlays.',
          'Service partnerships harvesting §736(a) goodwill deductions juxtaposed corp double layer liquidations contrasts.',
          'Family juniors perform actual services lest allocations collapse.',
        ],
      },
    ],
  },
];
