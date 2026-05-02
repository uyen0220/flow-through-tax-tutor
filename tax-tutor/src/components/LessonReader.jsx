import { Icon, Button, Pill } from './Primitives';
import { getLessonById } from '../data/lessons';
import { CRAM_LESSON_ORDER } from '../data/cramSession';

function Block({ block }) {
  switch (block.type) {
    case 'p':
      return <p>{block.text}</p>;
    case 'h2':
      return <h2>{block.text}</h2>;
    case 'ul':
      return (
        <ul>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case 'ol':
      return (
        <ol>
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case 'callout': {
      const warn = block.variant === 'warn';
      return (
        <div
          className="callout"
          style={
            warn
              ? {
                  borderColor: 'var(--highlight)',
                  background: 'var(--highlight-soft)',
                }
              : undefined
          }
        >
          <div
            className="head"
            style={warn ? { color: 'var(--highlight-ink)' } : undefined}
          >
            {warn ? <Icon name="alert-triangle" size={14} /> : <Icon name="sparkles" size={14} />}
            {block.title}
          </div>
          <p style={warn ? { color: 'var(--highlight-ink)', margin: 0 } : { margin: 0 }}>
            {block.text}
          </p>
        </div>
      );
    }
    default:
      return null;
  }
}

export function LessonReader({
  lessonId,
  onOpenPractice,
  onOpenTopics,
  onNextLesson,
  onPrevLesson,
  hasNext,
  hasPrev,
}) {
  const lesson = getLessonById(lessonId);
  const inCram = lessonId && CRAM_LESSON_ORDER.includes(lessonId);
  const idx = inCram ? CRAM_LESSON_ORDER.indexOf(lessonId) : -1;

  if (!lesson) {
    return (
      <div className="reader">
        <h1>No lesson selected</h1>
        <p className="lede">Choose a topic from the Topics list to start reading.</p>
        <div className="lesson-foot">
          <Button variant="primary" onClick={onOpenTopics}>
            Open topics
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="reader">
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <Pill variant="ok" dot>
          {lesson.track}
        </Pill>
        <Pill variant="neutral">
          ~{lesson.estMinutes} min · {lesson.chapterKey === 'ch11' ? 'Ch 11' : lesson.chapterKey === 'ch18' ? 'Ch 18' : lesson.chapterKey === 'ch9' ? 'Ch 9' : 'Ch 10'}
        </Pill>
        {inCram && (
          <Pill variant="neutral">
            Cram {idx + 1}/{CRAM_LESSON_ORDER.length}
          </Pill>
        )}
      </div>

      <h1>{lesson.title}</h1>

      {lesson.blocks.map((block, i) => (
        <Block key={i} block={block} />
      ))}

        <div className="lesson-foot">
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <Button variant="ghost" icon="arrow-left" onClick={onOpenTopics}>
            Topics
          </Button>
          {hasPrev && (
            <Button variant="ghost" size="sm" icon="arrow-left" onClick={onPrevLesson}>
              Previous
            </Button>
          )}
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="subtle" onClick={onOpenPractice}>
            Practice set
          </Button>
          {hasNext ? (
            <Button variant="primary" iconRight="arrow-right" onClick={onNextLesson}>
              Next lesson
            </Button>
          ) : (
            <Button variant="primary" iconRight="arrow-right" onClick={onOpenTopics}>
              All topics
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
