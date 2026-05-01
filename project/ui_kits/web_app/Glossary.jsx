// Glossary view.

const GLOSSARY = [
  { group: 'Code sections', mono: true, entries: [
    { term: '§721', tag: 'Nonrecognition on contribution', def: 'No gain or loss is recognized to a partnership or to any of its partners on the contribution of property to the partnership in exchange for a partnership interest.' },
    { term: '§722', tag: 'Partner\'s basis', def: 'A contributing partner\'s outside basis equals the adjusted basis of the property contributed (plus any cash).' },
    { term: '§723', tag: 'Partnership\'s basis', def: 'The partnership\'s inside basis in contributed property is a carryover basis — the same as the contributing partner\'s.' },
    { term: '§704(b)', tag: 'Substantial economic effect', def: 'A partner\'s distributive share of income, gain, loss, deduction, or credit is determined by the partnership agreement, but only if the allocation has substantial economic effect.' },
    { term: '§704(c)', tag: 'Pre-contribution gain/loss', def: 'Income, gain, loss, and deduction with respect to property contributed to the partnership are shared so as to take account of the difference between basis and FMV at the time of contribution.' },
    { term: '§754', tag: 'Optional basis adjustment', def: 'A one-time election that lets the partnership adjust the basis of partnership property under §734(b) (distributions) or §743(b) (transfers).' },
    { term: '§707(c)', tag: 'Guaranteed payments', def: 'Payments made to a partner for services or use of capital determined without regard to partnership income — deductible by the partnership, ordinary income to the partner.' },
  ]},
  { group: 'Forms & schedules', mono: true, entries: [
    { term: 'Form 1065', tag: 'Partnership return', def: 'The annual information return filed by every domestic partnership. Reports income, deductions, and the allocations among partners.' },
    { term: 'Sch. K-1', tag: 'Partner\'s share', def: 'Issued to each partner, reporting that partner\'s distributive share of income, deductions, credits, and other items for the year.' },
    { term: 'Form 1120-S', tag: 'S corporation return', def: 'The annual information return for an S corporation, with shareholder Schedules K-1.' },
  ]},
  { group: 'Concepts', mono: false, entries: [
    { term: 'Outside basis', tag: 'partner-side', def: 'A partner\'s basis in their partnership interest. Starts at contribution basis and adjusts for income, distributions, and liability shares.' },
    { term: 'Inside basis', tag: 'entity-side', def: 'The partnership\'s basis in its assets. Carries over from contributing partners and tracks separately from outside basis.' },
    { term: 'Hot assets', tag: 'distribution-rule', def: 'Unrealized receivables and inventory that, on certain distributions, can convert what would be capital gain into ordinary income.' },
    { term: 'Substantial economic effect', tag: '§704(b) test', def: 'A two-pronged test that an allocation must satisfy to be respected: (1) economic effect, and (2) substantiality.' },
  ]},
];

function Glossary({ onBack }) {
  return (
    <div className="gloss">
      <div className="search">
        <input className="input" placeholder="Search code sections, forms, terms…" style={{ flex: 1 }}/>
        <Button variant="subtle" icon="filter">Filter</Button>
      </div>
      {GLOSSARY.map(group => (
        <div key={group.group}>
          <div className="group-head">{group.group}</div>
          {group.entries.map(e => (
            <div key={e.term} className="entry">
              <div className="hdr">
                <div className={`term ${group.mono ? 'mono' : ''}`}>{e.term}</div>
                <div className="tag">{e.tag}</div>
              </div>
              <div className="def">{e.def}</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Glossary });
