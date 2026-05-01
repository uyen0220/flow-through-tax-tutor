import { Icon } from './Primitives';
import { Button } from './Primitives';

const COURSE = [
  { id: 'ch9',  num: '09', title: 'Partnerships: Formation & Basis', progress: 0.68, lessons: 12 },
  { id: 'ch10', num: '10', title: 'Partnership Distributions',        progress: 0.23, lessons: 11 },
  { id: 'ch11', num: '11', title: 'S Corporations',                   progress: 0.05, lessons: 10 },
  { id: 'ch18', num: '18', title: 'Federal Gift & Estate Taxes',      progress: 0,    lessons: 9  },
];

export function LeftNav({ activeView, onNav, activeChapter, onChapter }) {
  const navItems = [
    { id: 'dashboard', icon: 'layout-dashboard', label: 'Dashboard',      badge: null },
    { id: 'lesson',    icon: 'book-open',         label: "Today's lesson", badge: null },
    { id: 'practice',  icon: 'pencil-line',        label: 'Practice',       badge: '14' },
    { id: 'glossary',  icon: 'bookmark',           label: 'Glossary',       badge: null },
    { id: 'progress',  icon: 'target',             label: 'Progress',       badge: null },
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
        {navItems.map(({ id, icon, label, badge }) => (
          <div
            key={id}
            className={`item ${activeView === id ? 'active' : ''}`}
            onClick={() => onNav(id)}
          >
            <Icon name={icon} size={16} />
            <span>{label}</span>
            {badge && <span className="badge">{badge}</span>}
          </div>
        ))}
      </div>

      <div className="section">
        <div className="heading">Course · SWFT 2026</div>
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
              <div className="progress">
                <div style={{ width: `${Math.round(ch.progress * 100)}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }} />
      <div className="footer">
        <div className="av">L</div>
        <div className="who">
          <div className="name">Lila Ortiz</div>
          <div className="role">MAcc, Year 2</div>
        </div>
      </div>
    </nav>
  );
}

export function TopBar({ crumbs, progress }) {
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
      {typeof progress === 'number' && (
        <>
          <div className="progress-mini">
            <div style={{ width: `${Math.round(progress * 100)}%` }} />
          </div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-2)' }}>
            {Math.round(progress * 100)}%
          </span>
        </>
      )}
      <Button variant="subtle" size="sm" icon="search">Search</Button>
    </div>
  );
}
