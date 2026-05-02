import { useState, useLayoutEffect, useRef } from 'react';
import { Icon, Button } from './Primitives';
import { getLessonById } from '../data/lessons';

export function TutorRail({ lessonId }) {
  const lesson = getLessonById(lessonId);
  const lessonTitle = lesson?.title ?? 'this topic';

  const systemPrompt =
    `You are a concise tax tutor for a student using an exam-cram app (SWFT 2026). ` +
    `The student is reading: "${lessonTitle}". ` +
    `Answer in 2–4 sentences. Use IRC section numbers where relevant. ` +
    `Only answer tax and accounting questions.`;

  const [msgs, setMsgs] = useState([
    { who: 'tutor', content: `On "${lessonTitle}" — ask me anything.` },
  ]);
  const [apiMsgs, setApiMsgs] = useState([]);
  const [draft, setDraft] = useState('');
  const [loading, setLoading] = useState(false);
  const msgsRef = useRef(null);

  useLayoutEffect(() => {
    if (msgsRef.current) {
      msgsRef.current.scrollTop = msgsRef.current.scrollHeight;
    }
  }, [msgs, loading]);

  async function send() {
    if (!draft.trim() || loading) return;
    const text = draft;
    setDraft('');

    const userMsg = { role: 'user', content: text };
    const newApiMsgs = [...apiMsgs, userMsg];
    setApiMsgs(newApiMsgs);
    setMsgs(m => [...m, { who: 'user', content: text }]);
    setLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [{ role: 'system', content: systemPrompt }, ...newApiMsgs],
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Request failed');

      const reply = data.content;
      setApiMsgs(m => [...m, { role: 'assistant', content: reply }]);
      setMsgs(m => [...m, { who: 'tutor', content: reply }]);
    } catch (err) {
      setMsgs(m => [...m, { who: 'tutor', content: `Error: ${err.message}` }]);
    } finally {
      setLoading(false);
    }
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

      <div className="tutor-msgs" ref={msgsRef}>
        {msgs.map((m, i) => (
          <div key={i} className={`tutor-msg ${m.who}`}>
            {m.who === 'tutor' && <div className="av">§</div>}
            <div className={`bubble ${m.who}`}>{m.content}</div>
          </div>
        ))}
        {loading && (
          <div className="tutor-msg tutor">
            <div className="av">§</div>
            <div className="bubble tutor">…</div>
          </div>
        )}
      </div>

      <div className="tutor-foot">
        <input
          className="input"
          placeholder="Ask the tutor…"
          value={draft}
          onChange={e => setDraft(e.target.value)}
          onKeyDown={handleKey}
          disabled={loading}
        />
        <Button variant="primary" size="sm" icon="arrow-up" onClick={send} disabled={loading} />
      </div>
    </div>
  );
}
