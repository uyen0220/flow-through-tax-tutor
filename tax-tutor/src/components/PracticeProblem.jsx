import { useState } from 'react';
import { Icon, Button, Pill, Ref } from './Primitives';

export function PracticeProblem({ onBack }) {
  const [step1] = useState({ value: '40000', state: 'done' });
  const [step2, setStep2] = useState({ value: '', state: 'curr' });
  const [showHint, setShowHint] = useState(false);

  function check() {
    const normalized = step2.value.replace(/[$,\s]/g, '');
    if (normalized === '25000') {
      setStep2(s => ({ ...s, state: 'done' }));
    } else {
      setStep2(s => ({ ...s, state: 'wrong' }));
    }
  }

  const step2Done = step2.state === 'done';

  return (
    <div className="practice">
      <div className="header">
        <div>
          <div className="eyebrow">Chapter 9 · Practice 2 of 5</div>
          <div className="title">Outside basis on formation</div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <Pill variant="info" dot>3 hints left</Pill>
          <Pill variant="neutral">~ 4 min</Pill>
        </div>
      </div>

      <div className="stem">
        <p>
          <strong>Anna and Ben</strong> form the AB Partnership. Anna contributes $40,000 cash. Ben
          contributes equipment with an FMV of $40,000 and an adjusted basis of $25,000. Each
          receives a 50% partnership interest.
        </p>
        <div className="facts">
          <div className="fact-row">
            <span className="lbl">Anna — cash contributed</span>
            <span className="val">$40,000</span>
          </div>
          <div className="fact-row">
            <span className="lbl">Ben — equipment FMV</span>
            <span className="val">$40,000</span>
          </div>
          <div className="fact-row">
            <span className="lbl">Anna — % interest</span>
            <span className="val">50%</span>
          </div>
          <div className="fact-row">
            <span className="lbl">Ben — equipment basis</span>
            <span className="val">$25,000</span>
          </div>
        </div>
      </div>

      {/* Step 1 — done */}
      <div className="step done">
        <div className="step-head">
          <div className="step-num"><Icon name="check" size={12} /></div>
          Step 1 — Anna's outside basis
        </div>
        <div className="q">
          What is Anna's outside basis in her partnership interest immediately after formation?
        </div>
        <div className="answer-row">
          <div className="ans-correct">$40,000 ✓</div>
          <Pill variant="ok" dot>Correct</Pill>
        </div>
        <div className="explain">
          Cash contributions get a basis equal to the cash. No surprises here — see <Ref>§722</Ref>.
        </div>
      </div>

      {/* Step 2 — current */}
      <div className={`step ${step2Done ? 'done' : 'curr'}`}>
        <div className="step-head">
          <div className="step-num">
            {step2Done ? <Icon name="check" size={12} /> : '2'}
          </div>
          Step 2 — Ben's outside basis
        </div>
        <div className="q">
          What is Ben's outside basis in his partnership interest immediately after formation?
        </div>
        <div className="answer-row">
          {step2Done ? (
            <>
              <div className="ans-correct">$25,000 ✓</div>
              <Pill variant="ok" dot>Correct</Pill>
            </>
          ) : (
            <>
              <input
                className="input"
                placeholder="$ amount"
                value={step2.value}
                onChange={e => setStep2(s => ({ ...s, value: e.target.value, state: 'curr' }))}
                onKeyDown={e => e.key === 'Enter' && check()}
                style={{ maxWidth: 200 }}
              />
              <Button variant="primary" size="sm" onClick={check}>Check</Button>
              <Button variant="ghost" size="sm" icon="lightbulb" onClick={() => setShowHint(true)}>
                Hint
              </Button>
            </>
          )}
        </div>
        {step2.state === 'wrong' && (
          <div className="explain" style={{ borderColor: 'var(--danger)', color: 'var(--danger-ink)', background: 'var(--danger-soft)' }}>
            Not quite. Remember — outside basis on a property contribution isn't FMV.
          </div>
        )}
        {showHint && !step2Done && (
          <div className="hint">
            <strong>Hint —</strong> §722 gives the contributing partner a basis equal to the{' '}
            <em>basis of the property contributed</em>, not its FMV. Ben brought property with a
            basis of $25,000.
          </div>
        )}
        {step2Done && (
          <div className="explain">
            Right — §722 carries Ben's $25,000 basis over. The $15,000 of built-in gain rides on the
            books and gets allocated back to Ben under §704(c) when realized.
          </div>
        )}
      </div>

      {/* Step 3 — locked */}
      <div className="step" style={{ opacity: 0.55 }}>
        <div className="step-head">
          <div className="step-num">3</div>
          Step 3 — Partnership's inside basis in the equipment
        </div>
        <div className="q" style={{ color: 'var(--ink-2)' }}>
          Locked until you finish step 2.
        </div>
      </div>

      <div className="lesson-foot">
        <Button variant="ghost" icon="arrow-left" onClick={onBack}>Back to lesson</Button>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="subtle">Skip</Button>
          <Button variant="primary" iconRight="arrow-right">Submit attempt</Button>
        </div>
      </div>
    </div>
  );
}
