const CHAPTERS = [
  { id: 'ch9',  num: '09', title: 'Partnerships: Formation, Operation, and Basis', progress: 0.68, lessons: 12, done: 8 },
  { id: 'ch10', num: '10', title: 'Partnerships: Distributions, Transfer of Interests, and Terminations', progress: 0.23, lessons: 11, done: 3 },
  { id: 'ch11', num: '11', title: 'S Corporations', progress: 0.05, lessons: 10, done: 1 },
  { id: 'ch18', num: '18', title: 'The Federal Gift and Estate Taxes', progress: 0, lessons: 9, done: 0 },
];

export function ProgressView() {
  return (
    <div className="progress-view">
      <h1>Progress</h1>
      <div className="sub-text">Your mastery across SWFT 2026 — updated after every practice attempt.</div>

      {CHAPTERS.map(ch => (
        <div key={ch.id} className="chapter-row">
          <div className="ch-head">
            <div className="ch-title">Ch {ch.num} — {ch.title}</div>
            <div className="ch-pct">{Math.round(ch.progress * 100)}% · {ch.done}/{ch.lessons} lessons</div>
          </div>
          <div className="bar">
            <div style={{ width: `${Math.round(ch.progress * 100)}%` }} />
          </div>
        </div>
      ))}

      <div style={{ marginTop: 32, padding: '20px', background: 'var(--paper-1)', border: '1px solid var(--ink-5)', borderRadius: 12 }}>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-2)', marginBottom: 8 }}>
          Overall mastery
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 48, fontWeight: 900, color: 'var(--ink)', lineHeight: 1 }}>
          42<span style={{ fontSize: 24, color: 'var(--ink-2)', fontWeight: 500 }}>/100</span>
        </div>
        <div style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--ink-2)', marginTop: 6 }}>
          Chapter mastery, attempt history, and time-to-CPA estimates will appear here as you progress.
        </div>
      </div>
    </div>
  );
}
