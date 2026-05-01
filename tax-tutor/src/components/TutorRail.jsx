import { useState } from 'react';
import { Icon, Button, Ref } from './Primitives';

const INITIAL_MSGS = [
  {
    who: 'tutor',
    content: (
      <>
        A partnership doesn't pay its own income tax — it hands every partner a <Ref>Sch. K-1</Ref>{' '}
        and says: <em>here's your share, go report it.</em>
      </>
    ),
  },
  { who: 'user', content: 'Wait, but what about guaranteed payments?' },
  {
    who: 'tutor',
    content: (
      <>
        Good catch. Guaranteed payments are deductible to the partnership and ordinary income to the
        partner — see <Ref>§707(c)</Ref>. Want a worked example?
      </>
    ),
  },
];

export function TutorRail() {
  const [msgs, setMsgs] = useState(INITIAL_MSGS);
  const [draft, setDraft] = useState('');

  function send() {
    if (!draft.trim()) return;
    const text = draft;
    setDraft('');
    setMsgs(m => [...m, { who: 'user', content: text }]);
    setTimeout(() => {
      setMsgs(m => [
        ...m,
        { who: 'tutor', content: <>Pulling up the regs… <em>(this is a mock)</em></> },
      ]);
    }, 400);
  }

  function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="tutor">
      <div className="tutor-head">
        <div className="av">§</div>
        <div className="who">
          <div className="name">Tutor</div>
          <div className="sub">Ask anything about the lesson</div>
        </div>
        <div style={{ flex: 1 }} />
        <Icon name="x" size={16} color="var(--ink-2)" />
      </div>

      <div className="tutor-msgs">
        {msgs.map((m, i) => (
          <div key={i} className={`tutor-msg ${m.who}`}>
            {m.who === 'tutor' && <div className="av">§</div>}
            <div className={`bubble ${m.who}`}>{m.content}</div>
          </div>
        ))}
      </div>

      <div className="tutor-foot">
        <input
          className="input"
          placeholder="Ask the tutor…"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={handleKey}
        />
        <Button variant="primary" size="sm" icon="arrow-up" onClick={send} />
      </div>
    </div>
  );
}
