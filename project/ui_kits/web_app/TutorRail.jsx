// Tutor right rail — chat with the AI tutor.

function TutorRail() {
  const [msgs, setMsgs] = React.useState([
    { who: 'tutor', text: <>A partnership doesn't pay its own income tax — it hands every partner a <Ref>Sch. K-1</Ref> and says: <em>here's your share, go report it.</em></> },
    { who: 'user', text: 'Wait, but what about guaranteed payments?' },
    { who: 'tutor', text: <>Good catch. Guaranteed payments are deductible to the partnership and ordinary income to the partner — see <Ref>§707(c)</Ref>. Want a worked example?</> },
  ]);
  const [draft, setDraft] = React.useState('');

  function send() {
    if (!draft.trim()) return;
    setMsgs(m => [...m, { who: 'user', text: draft }]);
    setDraft('');
    setTimeout(() => {
      setMsgs(m => [...m, { who: 'tutor', text: <>Pulling up the regs… <em>(this is a mock)</em></> }]);
    }, 400);
  }

  return (
    <div className="tutor">
      <div className="tutor-head">
        <div className="av">§</div>
        <div className="who">
          <div className="name">Tutor</div>
          <div className="sub">Ask anything about the lesson</div>
        </div>
        <div style={{ flex: 1 }}/>
        <Icon name="x" size={16} color="var(--ink-2)"/>
      </div>
      <div className="tutor-msgs">
        {msgs.map((m, i) => (
          <div key={i} className={`tutor-msg ${m.who}`}>
            {m.who === 'tutor' && <div className="av">§</div>}
            <div className={`bubble ${m.who}`}>{m.text}</div>
          </div>
        ))}
      </div>
      <div className="tutor-foot">
        <input className="input" placeholder="Ask the tutor…" value={draft} onChange={e => setDraft(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()}/>
        <Button variant="primary" size="sm" icon="arrow-up" onClick={send}/>
      </div>
    </div>
  );
}

Object.assign(window, { TutorRail });
