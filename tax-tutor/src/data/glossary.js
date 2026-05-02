export const GLOSSARY_GROUPS = [
  {
    group: 'S corporation — eligibility & election',
    mono: false,
    entries: [
      {
        term: 'One class of stock',
        tag: '§1361',
        def: 'An S corporation may have only one class of stock outstanding. Voting rights may differ, but rights to distributions and liquidation proceeds must be identical.',
      },
      {
        term: 'Form 2553',
        tag: 'S election',
        def: 'Form used to elect S corporation status. All shareholders must consent; timing rules determine whether election is effective for the current year.',
      },
      {
        term: 'AAA (accumulated adjustments account)',
        tag: 'Distributions',
        def: 'Corporate-level account tracking cumulative S-period income and certain adjustments; used in distribution ordering when C corporation E&P exists.',
      },
      {
        term: 'I-D-L ordering',
        tag: 'Stock basis',
        def: 'Income increases stock basis first; then distributions reduce basis; then losses/deductions reduce remaining basis (before debt basis).',
      },
      {
        term: 'Built-in gains tax',
        tag: '§1374',
        def: 'Corporate-level tax on net recognized built-in gain after a C corporation converts to S, within the recognition period, generally at corporate rates.',
      },
    ],
  },
  {
    group: 'Partnership — formation & basis',
    mono: true,
    entries: [
      {
        term: '§721',
        tag: 'Nonrecognition on contribution',
        def: 'No gain or loss is generally recognized to the partnership or a partner on contribution of property for a partnership interest.',
      },
      {
        term: '§722',
        tag: "Partner's outside basis",
        def: "Contributing partner's outside basis is the substituted basis of contributed property plus cash contributed.",
      },
      {
        term: '§723',
        tag: 'Inside basis',
        def: "Partnership takes a carryover basis in contributed property — same as the contributor's basis.",
      },
      {
        term: '§704(c)',
        tag: 'Built-in gain/loss',
        def: 'Allocations must account for precontribution built-in gain or loss on contributed property.',
      },
    ],
  },
  {
    group: 'Transfer taxes (Ch. 18)',
    mono: false,
    entries: [
      {
        term: 'Unified transfer tax',
        tag: 'Gift & estate',
        def: 'Gift, estate, and GST taxes operate as a cumulative system with shared exemption/credit concepts over a taxpayer’s lifetime and at death.',
      },
      {
        term: 'Annual exclusion (present interest)',
        tag: 'Gift tax',
        def: 'Indexed amount excludable per donee per year for qualifying present-interest gifts; future interests generally excluded from this exclusion.',
      },
      {
        term: '§2503(e) payments',
        tag: 'Tuition & medical',
        def: 'Direct payments of tuition to an educational institution or medical expenses to a provider may be excluded from gift tax if requirements are met.',
      },
      {
        term: 'Gross estate',
        tag: 'Estate tax',
        def: 'Broad inclusion of property owned or controlled at death — wider than the probate estate.',
      },
      {
        term: 'Marital deduction',
        tag: 'Estate & gift',
        def: 'Deduction for qualifying transfers to a spouse; terminable-interest rules limit abusive structures unless an exception like QTIP applies.',
      },
      {
        term: 'GSTT',
        tag: 'Generation-skipping',
        def: 'Tax on certain transfers that skip a generation (direct skips, taxable distributions, taxable terminations), with a shared exemption framework.',
      },
    ],
  },
  {
    group: 'Forms',
    mono: true,
    entries: [
      { term: 'Form 1120-S', tag: 'S corporation', def: 'U.S. income tax return for an S corporation; Schedule K-1 to each shareholder.' },
      { term: 'Form 1065', tag: 'Partnership', def: 'Partnership return of income; Schedules K-1 to partners.' },
      { term: 'Form 709', tag: 'Gift tax', def: 'United States gift (and generation-skipping transfer) tax return.' },
      { term: 'Form 706', tag: 'Estate tax', def: 'United States estate (and generation-skipping transfer) tax return.' },
    ],
  },
];
