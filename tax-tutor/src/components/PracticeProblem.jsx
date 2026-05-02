import { useState, useMemo } from 'react';
import { Icon, Button, Pill } from './Primitives';
import { getPracticeSetById, checkQuestion } from '../data/practiceSets';

export function PracticeProblem({ setId, onBack, onOpenTopics }) {
  const set = useMemo(() => getPracticeSetById(setId), [setId]);
  const [qi, setQi] = useState(0);
  const [status, setStatus] = useState('idle');
  const [numericDraft, setNumericDraft] = useState('');
  const [showHint, setShowHint] = useState(false);

  const q = set.questions[qi];
  const isLast = qi === set.questions.length - 1;

  function resetForQuestion(nextIdx) {
    setQi(nextIdx);
    setStatus('idle');
    setNumericDraft('');
    setShowHint(false);
  }

  function submitNumeric() {
    const ok = checkQuestion(q, numericDraft);
    setStatus(ok ? 'done' : 'wrong');
  }

  function submitTrueFalse(val) {
    const ok = checkQuestion(q, val);
    setStatus(ok ? 'done' : 'wrong');
  }

  function submitChoice(idx) {
    const ok = checkQuestion(q, String(idx));
    setStatus(ok ? 'done' : 'wrong');
  }

  function nextQuestion() {
    if (!isLast) resetForQuestion(qi + 1);
    else resetForQuestion(0);
  }

  return (
    <div className="practice">
      <div className="header">
        <div>
          <div className="eyebrow">{set.eyebrow}</div>
          <div className="title">{set.title}</div>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <Pill variant="neutral">
            Question {qi + 1} of {set.questions.length}
          </Pill>
        </div>
      </div>

      <div className="stem">
        <p>{q.prompt}</p>
      </div>

      <div className={`step ${status === 'done' ? 'done' : 'curr'}`}>
        <div className="step-head">
          <div className="step-num">{status === 'done' ? <Icon name="check" size={12} /> : qi + 1}</div>
          Your answer
        </div>

        {q.type === 'numeric' && (
          <div className="answer-row" style={{ flexWrap: 'wrap' }}>
            <input
              className="input"
              placeholder="Enter amount (numbers ok)"
              value={numericDraft}
              onChange={e => {
                setNumericDraft(e.target.value);
                setStatus('idle');
              }}
              onKeyDown={e => e.key === 'Enter' && status !== 'done' && submitNumeric()}
              style={{ maxWidth: 220 }}
              disabled={status === 'done'}
            />
            {status !== 'done' && (
              <>
                <Button variant="primary" size="sm" onClick={submitNumeric}>
                  Check
                </Button>
                <Button variant="ghost" size="sm" icon="lightbulb" onClick={() => setShowHint(true)}>
                  Hint
                </Button>
              </>
            )}
          </div>
        )}

        {q.type === 'truefalse' && status !== 'done' && (
          <div className="answer-row" style={{ flexWrap: 'wrap' }}>
            <Button variant="subtle" size="sm" onClick={() => submitTrueFalse('true')}>
              True
            </Button>
            <Button variant="subtle" size="sm" onClick={() => submitTrueFalse('false')}>
              False
            </Button>
          </div>
        )}

        {q.type === 'truefalse' && status === 'done' && (
          <div className="answer-row">
            <div className="ans-correct">{q.correctBool ? 'True' : 'False'} ✓</div>
            <Pill variant="ok" dot>
              Correct
            </Pill>
          </div>
        )}

        {q.type === 'choice' && status !== 'done' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
            {q.choices.map((c, i) => (
              <Button key={i} variant="ghost" style={{ justifyContent: 'flex-start' }} onClick={() => submitChoice(i)}>
                {String.fromCharCode(65 + i)}. {c}
              </Button>
            ))}
          </div>
        )}

        {q.type === 'choice' && status === 'done' && (
          <div className="answer-row">
            <div className="ans-correct">
              {String.fromCharCode(65 + q.correctChoiceIndex)}. {q.choices[q.correctChoiceIndex]} ✓
            </div>
            <Pill variant="ok" dot>
              Correct
            </Pill>
          </div>
        )}

        {status === 'wrong' && (
          <div
            className="explain"
            style={{
              borderColor: 'var(--danger)',
              color: 'var(--danger-ink)',
              background: 'var(--danger-soft)',
            }}
          >
            Not quite — try again or read the hint.
          </div>
        )}

        {showHint && q.hint && status !== 'done' && (
          <div className="hint">
            <strong>Hint —</strong> {q.hint}
          </div>
        )}

        {status === 'done' && (
          <div className="explain">
            <strong>Why —</strong> {q.explain}
          </div>
        )}
      </div>

      <div className="lesson-foot">
        <Button variant="ghost" icon="arrow-left" onClick={onBack}>
          Back
        </Button>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <Button variant="subtle" onClick={onOpenTopics}>
            Topics
          </Button>
          {status === 'done' && (
            <Button variant="primary" iconRight="arrow-right" onClick={nextQuestion}>
              {isLast ? 'Restart set' : 'Next question'}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
