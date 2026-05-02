/**
 * Premium, Inc. — read-only annotated solution (Form 1120-S drill).
 * Source: S_Corp_Practice_Problems_Answer_Key.pdf §15–16.
 */

export const PREMIUM_ANNOTATED = {
  title: 'Premium, Inc. — Form 1120-S (annotated solution)',
  eyebrow: 'Read-only answer key · no grading',
  intro:
    'Calendar-year S corporation, candy manufacturing. Two shareholders: John Parsons 70%, George Smith 30%. Use this page as a walkthrough of where amounts land on the return and K-1s. Facts match the course practice packet.',
  facts: [
    'S election and incorporation: 01/15/2015',
    'EIN: 11-1111120',
    'Business activity code: 311340 (manufacturing — confectionery)',
    'Officer compensation: $75,000 each to Parsons and Smith ($150,000 total)',
    'Interest income is separately stated (not page 1 other income)',
    'Cash charitable contributions: separately stated',
    'Payroll penalties: nondeductible — M-1 add-back; reduces basis',
  ],
  sections: [
    {
      title: 'Form 1120-S — header highlights',
      rows: [
        { label: 'S election effective date', value: '01/15/2015', note: 'Header item A' },
        { label: 'Business activity code', value: '311340', note: 'Header B' },
        { label: 'EIN', value: '11-1111120', note: 'Header D' },
        { label: 'Date incorporated', value: '01/15/2015', note: 'Header E' },
        { label: 'Total assets (ending)', value: '$844,422', note: 'Header F — use ending balance sheet total, not beginning' },
        { label: 'Electing S status beginning this year?', value: 'No', note: 'Header G' },
        { label: 'Number of shareholders', value: '2', note: 'Header I' },
      ],
    },
    {
      title: 'Page 1 — ordinary income (selected lines)',
      rows: [
        { label: 'Line 1a — Gross receipts', value: '$2,410,000', note: '' },
        { label: 'Line 2 — Cost of goods sold', value: '$736,741', note: 'Beg. inv. + labor + materials + other direct − ending inv.' },
        { label: 'Line 3 — Gross profit', value: '$1,673,259', note: 'Line 1a − COGS' },
        { label: 'Line 7 — Compensation of officers', value: '$150,000', note: '$75k × 2' },
        { label: 'Line 8 — Salaries and wages', value: '$442,103', note: 'Non-officer wages' },
        { label: 'Line 13 — Interest expense', value: '$35,222', note: 'Trade/business interest — page 1' },
        { label: 'Line 22 — Ordinary business income', value: '$639,574', note: 'Page 1 bottom line → flows to Schedule K line 1' },
      ],
    },
    {
      title: 'What does NOT belong on page 1 (course convention)',
      rows: [
        { label: 'Charitable contributions', value: 'Schedule K, line 12a', note: 'Separately stated' },
        { label: 'Interest income (portfolio)', value: 'Schedule K, line 4', note: 'Separately stated — not “other income” on page 1' },
        { label: 'Payroll penalties', value: 'Schedule K, line 16c', note: 'Nondeductible; M-1 adjustment from book income' },
      ],
    },
    {
      title: 'Schedule K — partnership totals',
      rows: [
        { label: 'Line 1 — Ordinary business income', value: '$639,574', note: 'From page 1 line 22' },
        { label: 'Line 4 — Interest income', value: '$100,000', note: '' },
        { label: 'Line 12a — Cash charitable contributions', value: '$20,000', note: '' },
        { label: 'Line 16c — Nondeductible expenses (penalties)', value: '$15,000', note: 'Reduces shareholder basis' },
        { label: 'Line 16d — Distributions', value: '$100,000', note: 'Cash distributions' },
        { label: 'Line 17a — Investment income', value: '$100,000', note: 'Info for shareholder limitations' },
        { label: 'Line 18 — Income/loss reconciliation', value: '$719,574', note: '$639,574 + $100,000 − $20,000' },
      ],
    },
    {
      title: 'Schedule M-1 (book vs Schedule K)',
      rows: [
        { label: 'Net income per books', value: '$704,574', note: 'Starting point' },
        { label: 'Add: nondeductible on Schedule K lines 1–12e, 16f', value: '$15,000', note: 'Payroll penalties on books but nondeductible' },
        { label: 'Line 8 — Income per Schedule K line 18', value: '$719,574', note: '704,574 + 15,000; do not duplicate interest here' },
      ],
    },
    {
      title: 'Schedule M-2 — AAA rollforward',
      rows: [
        { label: 'Beginning AAA', value: '$111,148', note: '' },
        { label: 'Ordinary income (page 1)', value: '+ $639,574', note: '' },
        { label: 'Other additions — interest income', value: '+ $100,000', note: 'Separately stated income increases AAA' },
        { label: 'Other reductions — charity + penalties', value: '− $35,000', note: '$20,000 + $15,000' },
        { label: 'Subtotal', value: '$815,722', note: '' },
        { label: 'Distributions', value: '− $100,000', note: 'Cash only in this fact pattern' },
        { label: 'Ending AAA', value: '$715,722', note: 'Matches Schedule L retained earnings in this problem' },
      ],
    },
    {
      title: 'Schedule K-1 — John Parsons (70%)',
      rows: [
        { label: 'Line 1 — Ordinary business income', value: '$447,702', note: '70% of $639,574' },
        { label: 'Line 4 — Interest income', value: '$70,000', note: '' },
        { label: 'Line 12 code A — Charitable', value: '$14,000', note: '' },
        { label: 'Line 16 code C — Nondeductible', value: '$10,500', note: '' },
        { label: 'Line 16 code D — Distributions', value: '$70,000', note: '' },
        { label: 'Line 17 code V — §199A', value: 'Statement', note: 'QBI, W-2 wages, UBIA per answer key' },
      ],
    },
    {
      title: 'Schedule K-1 — George Smith (30%)',
      rows: [
        { label: 'Line 1 — Ordinary business income', value: '$191,872', note: '30% of $639,574' },
        { label: 'Line 4 — Interest income', value: '$30,000', note: '' },
        { label: 'Line 12 code A — Charitable', value: '$6,000', note: '' },
        { label: 'Line 16 code C — Nondeductible', value: '$4,500', note: '' },
        { label: 'Line 16 code D — Distributions', value: '$30,000', note: '' },
      ],
    },
    {
      title: 'Form 1120-S K-1 vs Form 1065 K-1',
      rows: [
        { label: 'Partnership K-1', value: 'N/A here', note: 'Do not use 1065 K-1 — no partner liabilities, capital account like partnership, or §704(c) on S K-1' },
        { label: 'S corporation K-1', value: 'Shareholder lines', note: 'Focus on stock %, debt, separately stated codes' },
      ],
    },
  ],
};
