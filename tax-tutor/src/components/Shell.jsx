import { Icon } from './Primitives';
import { Button } from './Primitives';

const COURSE = [
  { id: 'ch9', num: '09', title: 'Partnerships: Formation & Basis' },
  { id: 'ch10', num: '10', title: 'Partnership Distributions' },
  { id: 'ch11', num: '11', title: 'S Corporations' },
  { id: 'ch18', num: '18', title: 'Federal Gift & Estate Taxes' },
];

export function LeftNav({ activeView, onNav, activeChapter, onChapter }) {
  const navItems = [
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard' },
    { id: 'topics', icon: 'list', label: 'Topics' },
    { id: 'practice', icon: 'pencil-line', label: 'Practice' },
    { id: 'glossary', icon: 'bookmark', label: 'Glossary' },
    { id: 'premium', icon: 'file-text', label: 'Premium Inc.' },
  ];

  return (
    <nav className="lnav">
      <div className="brand">
        <img src="/logo-mark.svg" alt="Tax Tutor" />
        <div className="name">
          <span style={{ display: 'block', fontWeight: 800 }}>Flow Through</span>
          <span style={{ display: 'block', fontWeight: 900 }}>Tax Tutor</span>
        </div>
      </div>

      <div className="section">
        {navItems.map(({ id, icon, label }) => (
          <div
            key={id}
            className={`item ${activeView === id ? 'active' : ''}`}
            onClick={() => onNav(id)}
          >
            <Icon name={icon} size={16} />
            <span>{label}</span>
          </div>
        ))}
      </div>

      <div className="section">
        <div className="heading">SWFT 2026 · Chapters</div>
        <div className="chapters">
          {COURSE.map(ch => (
            <div
              key={ch.id}
              className={`chapter ${activeChapter === ch.id ? 'active' : ''}`}
              onClick={() => onChapter(ch.id)}
            >
              <div className="ch-row">
                <div className="num">CH {ch.num}</div>
                <div className="title">{ch.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />
      <div className="footer">
        <div className="who" style={{ paddingLeft: 4 }}>
          <div className="name">Exam cram</div>
          <div className="role">No sign-in · no saved progress</div>
        </div>
      </div>
    </nav>
  );
}

export function TopBar({ crumbs }) {
  return (
    <div className="topbar">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {i > 0 && <span className="dot">·</span>}
            {i === crumbs.length - 1 ? <strong>{c}</strong> : <span>{c}</span>}
          </span>
        ))}
      </div>
      <div className="spacer" />
      <Button variant="subtle" size="sm" icon="search">
        Search
      </Button>
    </div>
  );
}
