import { useState } from 'react';
import { Button } from './Primitives';
import { GLOSSARY_GROUPS } from '../data/glossary';

export function Glossary() {
  const [query, setQuery] = useState('');

  const filtered = GLOSSARY_GROUPS.map(group => ({
    ...group,
    entries: group.entries.filter(e => {
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        e.term.toLowerCase().includes(q) ||
        e.def.toLowerCase().includes(q) ||
        e.tag.toLowerCase().includes(q)
      );
    }),
  })).filter(g => g.entries.length > 0);

  return (
    <div className="gloss">
      <h1>Glossary</h1>
      <div className="search">
        <input
          className="input"
          placeholder="Search code sections, forms, terms…"
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={{ flex: 1 }}
        />
        <Button variant="subtle" icon="filter">
          Filter
        </Button>
      </div>
      {filtered.map(group => (
        <div key={group.group}>
          <div className="group-head">{group.group}</div>
          {group.entries.map(e => (
            <div key={e.term} className="entry">
              <div className="hdr">
                <div className={`term ${group.mono ? 'mono' : ''}`}>{e.term}</div>
                <div className="tag">{e.tag}</div>
              </div>
              <div className="def">{e.def}</div>
            </div>
          ))}
        </div>
      ))}
      {filtered.length === 0 && (
        <p style={{ color: 'var(--ink-2)', fontStyle: 'italic' }}>
          No results for "{query}" — try a code section number or concept.
        </p>
      )}
    </div>
  );
}
