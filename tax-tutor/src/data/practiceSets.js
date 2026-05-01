/** @typedef {'numeric' | 'truefalse' | 'choice'} QuestionType */

/**
 * @typedef {Object} PracticeQuestion
 * @property {string} id
 * @property {QuestionType} type
 * @property {string} prompt
 * @property {string} [hint]
 * @property {string} explain
 * @property {string[]} [accepted] normalized numeric or text answers
 * @property {boolean} [correctBool] for truefalse
 * @property {string[]} [choices] for choice
 * @property {number} [correctChoiceIndex]
 */

/**
 * @typedef {Object} PracticeSet
 * @property {string} id
 * @property {string} title
 * @property {string} eyebrow
 * @property {PracticeQuestion[]} questions
 */

/** @param {string} raw */
export function normalizeAnswer(raw) {
  return String(raw ?? '')
    .trim()
    .toLowerCase()
    .replace(/[$,\s]/g, '');
}

/** @param {string} raw */
export function normalizeTrueFalse(raw) {
  const s = String(raw ?? '').trim().toLowerCase();
  if (s === 't' || s === 'true' || s === 'yes') return 'true';
  if (s === 'f' || s === 'false' || s === 'no') return 'false';
  return s;
}

/**
 * @param {PracticeQuestion} q
 * @param {string} userInput
 */
export function checkQuestion(q, userInput) {
  if (q.type === 'numeric') {
    const n = normalizeAnswer(userInput);
    return (q.accepted ?? []).some(a => normalizeAnswer(a) === n);
  }
  if (q.type === 'truefalse') {
    return normalizeTrueFalse(userInput) === (q.correctBool ? 'true' : 'false');
  }
  if (q.type === 'choice') {
    const idx = parseInt(String(userInput).trim(), 10);
    return !Number.isNaN(idx) && idx === q.correctChoiceIndex;
  }
  return false;
}

/** @type {PracticeSet[]} */
export const PRACTICE_SETS = [
  {
    id: 's-corp-core',
    eyebrow: 'S corporation · Exam cram set',
    title: 'Eligibility, basis I-D-L, BIG, PII, and distributions',
    questions: [
      {
        id: 's1a',
        type: 'truefalse',
        prompt: 'Federal income tax treatment of S corporations resembles partnerships.',
        correctBool: true,
        explain: 'S corps are pass-through entities for federal income tax.',
      },
      {
        id: 's1b',
        type: 'truefalse',
        prompt: 'S corporations are treated as partnerships under state law.',
        correctBool: false,
        explain: 'S status is a federal tax election; the entity remains a corporation under state law.',
      },
      {
        id: 's2b',
        type: 'truefalse',
        prompt: 'S corporations may only issue one class of stock.',
        correctBool: true,
        explain: 'Only one class of stock; voting differences are allowed if economic rights match.',
      },
      {
        id: 's2f',
        type: 'truefalse',
        prompt: 'Nonresident alien shareholders are allowed in an S corporation.',
        correctBool: false,
        explain: 'Nonresident aliens cannot be S corporation shareholders.',
      },
      {
        id: 's3d',
        type: 'choice',
        prompt: 'A valid S election requires consent of:',
        choices: [
          'Shareholders owning more than 50% of the stock',
          'All shareholders',
          'Only the board of directors',
        ],
        correctChoiceIndex: 1,
        explain: 'Form 2553 requires consent of all shareholders.',
      },
      {
        id: 's6c',
        type: 'truefalse',
        prompt: 'If a loss and a distribution occur in the same year, the distribution reduces stock basis after the loss.',
        correctBool: false,
        explain: 'Use I-D-L: income increases basis first; then distributions reduce basis; then losses.',
      },
      {
        id: 's7a',
        type: 'numeric',
        prompt:
          'Kaiwan: beginning stock basis $32,000; LTCG $5,000; ordinary loss $18,000; distribution $20,000. How much loss is deductible this year (before suspension)?',
        accepted: ['17000'],
        hint: 'Apply I-D-L: $32,000 + $5,000 − $20,000 = $17,000 basis left for losses.',
        explain: 'After income and the distribution, only $17,000 of basis remains to absorb the $18,000 loss — so $17,000 is deductible now.',
      },
      {
        id: 's7b',
        type: 'numeric',
        prompt: 'Kaiwan (same facts): suspended loss carryforward?',
        accepted: ['1000', '1,000'],
        hint: '$18,000 loss minus $17,000 deductible.',
        explain: '$1,000 of loss is suspended until basis is restored.',
      },
      {
        id: 's11a',
        type: 'numeric',
        prompt: 'Built-in gain: C corp asset basis $325,000, FMV $800,000 when sold after S election. Built-in gain amount?',
        accepted: ['475000', '475,000'],
        explain: '$800,000 − $325,000 = $475,000.',
      },
      {
        id: 's11b',
        type: 'numeric',
        prompt: 'Corporate-level built-in gains tax at 21% on that BIG?',
        accepted: ['99750', '99,750'],
        explain: '$475,000 × 21% = $99,750.',
      },
      {
        id: 's12d',
        type: 'numeric',
        prompt:
          'Tyrone: gross receipts $400,000; passive investment income $200,000; related expenses $80,000. Net passive investment income?',
        accepted: ['120000', '120,000'],
        explain: '$200,000 − $80,000 = $120,000.',
      },
      {
        id: 's13a',
        type: 'numeric',
        prompt:
          'Greiner has no AEP. Distribution $30,000; stock basis $25,000. Ordinary income from the distribution?',
        accepted: ['0'],
        explain: 'With no AEP, there is no dividend layer — only basis reduction and possible capital gain.',
      },
      {
        id: 's13b',
        type: 'numeric',
        prompt: 'Greiner (same facts): recognized capital gain?',
        accepted: ['5000', '5,000'],
        explain: 'Distribution exceeds basis by $5,000 → capital gain.',
      },
    ],
  },
  {
    id: 'partnership-formation',
    eyebrow: 'Partnership · Formation',
    title: '§721, §722, §723 — Anna and Ben',
    questions: [
      {
        id: 'p1',
        type: 'numeric',
        prompt:
          'Anna contributes $40,000 cash; Ben contributes equipment FMV $40,000, basis $25,000. Each receives 50%. Anna’s outside basis immediately after formation?',
        accepted: ['40000', '40,000'],
        hint: 'Cash basis equals cash contributed.',
        explain: 'Anna’s outside basis is $40,000.',
      },
      {
        id: 'p2',
        type: 'numeric',
        prompt: 'Ben’s outside basis immediately after formation?',
        accepted: ['25000', '25,000'],
        hint: '§722 substituted basis — use adjusted basis of property contributed, not FMV.',
        explain: 'Ben’s outside basis is $25,000; built-in gain is preserved for §704(c) later.',
      },
      {
        id: ‘p3’,
        type: ‘numeric’,
        prompt: ‘Partnership’s inside basis in the equipment?’,
        accepted: [‘25000’, ‘25,000’],
        hint: ‘§723 carryover basis from the contributing partner.’,
        explain: ‘Inside basis is $25,000.’,
      },
      {
        id: ‘p4’,
        type: ‘truefalse’,
        prompt: ‘Under §721, a partner generally does not recognize gain or loss when contributing property to a partnership in exchange for a partnership interest.’,
        correctBool: true,
        explain: ‘§721 provides nonrecognition for both partner and partnership on property contributions — realized gain or loss is deferred, not forgiven.’,
      },
      {
        id: ‘p5’,
        type: ‘truefalse’,
        prompt: ‘A partner who contributes appreciated securities to an investment company partnership always qualifies for §721 nonrecognition.’,
        correctBool: false,
        explain: ‘The investment company exception to §721 can trigger gain recognition when a partner effectively diversifies a concentrated appreciated position through a contribution to an investment company partnership.’,
      },
      {
        id: ‘p6’,
        type: ‘truefalse’,
        prompt: ‘A partner who receives a capital interest in a partnership in exchange for services must generally recognize ordinary income equal to the FMV of that interest.’,
        correctBool: true,
        explain: ‘Services are not "property" under §721. A fully vested capital interest received for services is ordinary compensation income at FMV.’,
      },
      {
        id: ‘p7’,
        type: ‘truefalse’,
        prompt: ‘Under §723, the partnership takes a carryover basis in contributed property equal to the contributing partner\’s adjusted basis.’,
        correctBool: true,
        explain: ‘§723 carryover basis — the partnership steps into the contributor\’s shoes for the asset\’s tax basis, preserving the built-in gain or loss.’,
      },
      {
        id: ‘p8’,
        type: ‘truefalse’,
        prompt: ‘When a partner contributes a capital asset to a partnership, the partnership\’s holding period for that asset includes (tacks) the contributing partner\’s holding period.’,
        correctBool: true,
        explain: ‘The partnership tacks the contributing partner\’s holding period for contributed capital assets and §1231 property under §1223.’,
      },
      {
        id: ‘p9’,
        type: ‘truefalse’,
        prompt: ‘§704(c) requires that pre-contribution built-in gain be allocated to the non-contributing partners when the contributed property is later sold by the partnership.’,
        correctBool: false,
        explain: ‘§704(c) allocates pre-contribution built-in gain to the CONTRIBUTING partner — not the other partners — to prevent built-in gain from being shifted away from the person who economically realized it.’,
      },
      {
        id: ‘p10’,
        type: ‘numeric’,
        prompt: ‘Dana contributes land with basis $60,000 and FMV $100,000 to a partnership. The partnership later sells the land for $110,000. How much of the total $50,000 gain is allocated to Dana under §704(c)?’,
        accepted: [‘40000’, ‘40,000’],
        hint: ‘Dana\’s §704(c) built-in gain = FMV at contribution ($100,000) minus her basis ($60,000) = $40,000. Post-contribution appreciation ($10,000) is shared among all partners.’,
        explain: ‘The $40,000 pre-contribution built-in gain is allocated entirely to Dana. The remaining $10,000 of post-contribution appreciation is allocated among all partners per their agreement.’,
      },
    ],
  },
  {
    id: 'transfer-tax-quick',
    eyebrow: 'Ch. 18 · Transfer taxes',
    title: 'Gift and estate warm-up',
    questions: [
      {
        id: 't1',
        type: 'truefalse',
        prompt: 'The federal gift tax is generally imposed on the donor, not the donee.',
        correctBool: true,
        explain: 'The donor is primarily liable (donee can be liable if donor fails to pay, up to value received).',
      },
      {
        id: 't2',
        type: 'truefalse',
        prompt: 'Gifts of present interests can qualify for the annual per-donee exclusion (amount is indexed yearly).',
        correctBool: true,
        explain: 'Future interests generally do not qualify.',
      },
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
];

export function getPracticeSetById(id) {
  return PRACTICE_SETS.find(s => s.id === id) ?? PRACTICE_SETS[0];
}
