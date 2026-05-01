import { Icon, Button, Pill } from './Primitives';
import { CRAM_LESSON_ORDER } from '../data/cramSession';

export function Dashboard({ onStartCram, onOpenTopics, onOpenLesson, onOpenPractice, onOpenPremium }) {
  return (
    <div className="dash">
      <h1>Exam cram — flow-through & transfer taxes</h1>
      <div className="greeting-sub">
        Short sessions before an exam. Open any topic or run the ordered cram path ({CRAM_LESSON_ORDER.length}{' '}
        lessons). Nothing is stored on a server.
      </div>

      <div
        className="resume"
        onClick={onStartCram}
        style={{ marginBottom: 28, cursor: 'pointer' }}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && onStartCram()}
      >
        <div className="body">
          <div className="eyebrow">Start here</div>
          <h3>Run the cram path</h3>
          <div className="sub">
            Partnerships (formation, basis, distributions) → S corporation (eligibility, basis, BIG, PII) → transfer taxes (gift, estate, GST).
          </div>
          <Button variant="primary" iconRight="arrow-right">
            Start cram
          </Button>
        </div>
        <div className="art">
          <img src="/illustration-partnership.svg" alt="" style={{ width: '100%' }} />
        </div>
      </div>

      <div className="section-head">
        <h2>Jump in</h2>
      </div>
      <div className="grid-2">
        <div className="lesson-card" onClick={onOpenTopics}>
          <div className="eyebrow">All chapters</div>
          <div className="title">Browse topics</div>
          <div className="meta">
            <Pill variant="neutral">Lessons</Pill>
            <span>Ch 9–11 &amp; 18</span>
          </div>
          <div className="lc-progress">
            <div style={{ width: '100%' }} />
          </div>
        </div>
        <div className="lesson-card" onClick={onOpenPremium}>
          <div className="eyebrow">Annotated answer key</div>
          <div className="title">Premium, Inc. · Form 1120-S</div>
          <div className="meta">
            <Pill variant="ok">Read-only</Pill>
            <span>Schedule K, M-1, M-2, K-1</span>
          </div>
          <div className="lc-progress">
            <div style={{ width: '100%', background: 'var(--accent)' }} />
          </div>
        </div>
      </div>

      <div className="section-head" style={{ marginTop: 28 }}>
        <h2>Practice sets</h2>
      </div>
      <div className="grid-2">
        <div className="lesson-card" onClick={() => onOpenPractice('s-corp-core')}>
          <div className="eyebrow">S corporation</div>
          <div className="title">Eligibility, basis, BIG, PII, distributions</div>
          <div className="meta">
            <Icon name="pencil-line" size={14} />
            <span>Interactive checks</span>
          </div>
        </div>
        <div className="lesson-card" onClick={() => onOpenPractice('partnership-formation')}>
          <div className="eyebrow">Partnership · Ch 9</div>
          <div className="title">Anna &amp; Ben formation drill</div>
          <div className="meta">
            <span>§721 · §722 · §723</span>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 14 }}>
        <div className="lesson-card" onClick={() => onOpenPractice('transfer-tax-quick')}>
          <div className="eyebrow">Ch 18</div>
          <div className="title">Gift &amp; estate warm-up</div>
          <div className="meta">
            <span>True/false + concepts</span>
          </div>
        </div>
        <div className="lesson-card" onClick={() => onOpenLesson('p-ch9-i-partnership-overview')}>
          <div className="eyebrow">Lesson</div>
          <div className="title">Partnership formation (read)</div>
          <div className="meta">
            <span>Open in reader</span>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ marginTop: 14 }}>
        <div className="lesson-card" onClick={() => onOpenPractice('partnership-distributions')}>
          <div className="eyebrow">Partnership · Ch 10</div>
          <div className="title">Distributions, §751 &amp; §754</div>
          <div className="meta">
            <Icon name="pencil-line" size={14} />
            <span>Interactive checks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
