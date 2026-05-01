// Three-column app shell + sticky topbar + left nav.

const { useState: useStateShell } = React;

const COURSE = [
  { id: 'ch9',  num: '09', title: 'Partnerships: Formation & Basis', progress: 0.68, lessons: 12 },
  { id: 'ch10', num: '10', title: 'Partnership Distributions', progress: 0.23, lessons: 11 },
  { id: 'ch11', num: '11', title: 'S Corporations', progress: 0.05, lessons: 10 },
  { id: 'ch18', num: '18', title: 'Federal Gift & Estate Taxes', progress: 0, lessons: 9 },
];

function LeftNav({ activeView, onNav, activeChapter, onChapter }) {
  return (
    <nav className="lnav">
      <div className="brand">
        <img src="../../assets/logo-mark.svg" alt="Tax Tutor"/>
        <div className="name">
          <span style={{display:'block', fontWeight:800}}>Flow Through</span>
          <span style={{display:'block', fontWeight:900}}>Tax Tutor</span>
        </div>
      </div>

      <div className="section">
        {[
          ['dashboard',  'layout-dashboard', 'Dashboard',  null],
          ['lesson',     'book-open',        'Today\'s lesson', null],
          ['practice',   'pencil-line',      'Practice',  '14'],
          ['glossary',   'bookmark',         'Glossary',  null],
          ['progress',   'target',           'Progress',  null],
        ].map(([id, icon, label, badge]) => (
          <div key={id} className={`item ${activeView === id ? 'active' : ''}`} onClick={() => onNav(id)}>
            <Icon name={icon} size={16}/>
            <span>{label}</span>
            {badge && <span className="badge">{badge}</span>}
          </div>
        ))}
      </div>

      <div className="section">
        <div className="heading">Course · SWFT 2026</div>
        <div className="chapters">
          {COURSE.map(ch => (
            <div key={ch.id} className={`chapter ${activeChapter === ch.id ? 'active' : ''}`} onClick={() => onChapter(ch.id)}>
              <div className="row">
                <div className="num">CH {ch.num}</div>
                <div className="title">{ch.title}</div>
              </div>
              <div className="progress"><div style={{ width: `${Math.round(ch.progress * 100)}%` }}/></div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}/>
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

function TopBar({ crumbs, progress }) {
  return (
    <div className="topbar">
      <div className="crumbs">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="dot">·</span>}
            {i === crumbs.length - 1 ? <strong>{c}</strong> : <span>{c}</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="spacer"/>
      {typeof progress === 'number' && (
        <>
          <div className="progress-mini"><div style={{ width: `${Math.round(progress * 100)}%` }}/></div>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--ink-2)' }}>{Math.round(progress * 100)}%</span>
        </>
      )}
      <Button variant="subtle" size="sm" icon="search">Search</Button>
    </div>
  );
}

Object.assign(window, { LeftNav, TopBar, COURSE });
