import { LESSONS } from '../data/lessons';
import { Pill } from './Primitives';

export function Topics({ activeChapter, onOpenLesson }) {
  const filtered = LESSONS.filter(l => {
    if (activeChapter === 'ch9') return l.chapterKey === 'ch9';
    if (activeChapter === 'ch10') return l.chapterKey === 'ch10';
    if (activeChapter === 'ch11') return l.chapterKey === 'ch11';
    if (activeChapter === 'ch18') return l.chapterKey === 'ch18';
    return true;
  });

  return (
    <div className="progress-view">
      <h1>Topics</h1>
      <div className="sub-text">
        Pick a lesson to read. Nothing is saved — this is a local cram session. Use the left
        sidebar to filter by chapter (Ch 9–11, 18).
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--ink-2)' }}>No lessons match this filter.</p>
      )}

      {filtered.map(lesson => (
        <div
          key={lesson.id}
          className="chapter-row"
          style={{ cursor: 'pointer' }}
          onClick={() => onOpenLesson(lesson.id)}
          role="button"
          tabIndex={0}
          onKeyDown={e => e.key === 'Enter' && onOpenLesson(lesson.id)}
        >
          <div className="ch-head">
            <div className="ch-title">{lesson.title}</div>
            <div className="ch-pct" style={{ fontFamily: 'var(--font-ui)' }}>
              <Pill variant="neutral">{lesson.track}</Pill>
            </div>
          </div>
          <div style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 6 }}>
            ~{lesson.estMinutes} min · {({ ch9: 'Ch 9', ch10: 'Ch 10', ch11: 'Ch 11', ch18: 'Ch 18' })[lesson.chapterKey] ?? lesson.chapterKey}
          </div>
        </div>
      ))}
    </div>
  );
}
