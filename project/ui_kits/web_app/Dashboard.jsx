// Dashboard view.

function Dashboard({ onOpenLesson, onOpenPractice }) {
  return (
    <div className="dash">
      <h1>Hi Lila — pick up where you left off.</h1>
      <div className="greeting-sub">You're 7 days into your streak. Don't break it on us now.</div>

      <div className="stats">
        <div className="stat">
          <div className="lbl">Streak</div>
          <div className="val" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            7
            <Icon name="flame" size={28} color="var(--highlight)"/>
          </div>
          <div className="sub">days in a row</div>
        </div>
        <div className="stat">
          <div className="lbl">Mastery</div>
          <div className="val">42<span style={{ fontSize: 22, color: 'var(--ink-2)' }}>/100</span></div>
          <div className="sub">across 4 chapters</div>
        </div>
        <div className="stat">
          <div className="lbl">Practice today</div>
          <div className="val">9<span style={{ fontSize: 22, color: 'var(--ink-2)' }}>/12</span></div>
          <div className="sub">problems correct</div>
        </div>
      </div>

      <div className="resume" onClick={onOpenLesson} style={{ cursor: 'pointer' }}>
        <div className="body">
          <div className="eyebrow">Resume · Chapter 9 · Lesson 3 of 12</div>
          <h3>Contributing property — and the §721 rule</h3>
          <div className="sub">~ 8 min remaining · You stopped after the cash-vs-property example.</div>
          <Button variant="primary" iconRight="arrow-right">Continue lesson</Button>
        </div>
        <div className="art">
          <img src="../../assets/illustration-partnership.svg" alt="" style={{ width: '100%' }}/>
        </div>
      </div>

      <div className="section-head">
        <h2>Up next in Subchapter K</h2>
        <a href="#">View all lessons</a>
      </div>
      <div className="grid-2">
        <div className="lesson-card" onClick={onOpenLesson}>
          <div className="eyebrow">Chapter 9 · Lesson 4</div>
          <div className="title">Inside basis vs. outside basis</div>
          <div className="meta"><span>~ 12 min</span> · <Pill variant="neutral">Up next</Pill></div>
          <div className="progress"><div style={{ width: '0%' }}/></div>
        </div>
        <div className="lesson-card" onClick={onOpenPractice}>
          <div className="eyebrow">Chapter 10 · Practice set</div>
          <div className="title">Hot-asset distributions, three ways</div>
          <div className="meta"><span>5 problems</span> · <Pill variant="warn">Needs review</Pill></div>
          <div className="progress"><div style={{ width: '35%', background: 'var(--highlight)' }}/></div>
        </div>
      </div>

      <div className="section-head">
        <h2>From your last practice attempt</h2>
        <a href="#">Open practice queue</a>
      </div>
      <div className="grid-2">
        <div className="lesson-card">
          <div className="eyebrow">Got tripped up</div>
          <div className="title" style={{ fontSize: 18 }}>§704(b) substantial-economic-effect test</div>
          <div className="meta"><Ref>§704(b)</Ref> <Pill variant="err">2 of 3 missed</Pill></div>
        </div>
        <div className="lesson-card">
          <div className="eyebrow">Solid</div>
          <div className="title" style={{ fontSize: 18 }}>Schedule K-1 line items, top to bottom</div>
          <div className="meta"><Ref>Sch. K-1</Ref> <Pill variant="ok">5 of 5 correct</Pill></div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Dashboard });
