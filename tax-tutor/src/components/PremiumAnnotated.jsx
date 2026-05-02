import { Button } from './Primitives';
import { PREMIUM_ANNOTATED } from '../data/premiumAnnotated';

export function PremiumAnnotated({ onBack }) {
  const d = PREMIUM_ANNOTATED;

  return (
    <div className="reader premium-sheet">
      <div style={{ display: 'flex', gap: 8, marginBottom: 14, flexWrap: 'wrap' }}>
        <span className="pill neutral">Read-only</span>
        <span className="pill ok">Answer key</span>
      </div>

      <h1>{d.title}</h1>
      <p className="lede">{d.intro}</p>

      <div className="callout" style={{ marginBottom: 24 }}>
        <div className="head">Facts snapshot</div>
        <ul style={{ margin: '8px 0 0', paddingLeft: 20 }}>
          {d.facts.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </div>

      {d.sections.map(section => (
        <section key={section.title} style={{ marginBottom: 32 }}>
          <h2>{section.title}</h2>
          <div
            style={{
              border: '1px solid var(--ink-5)',
              borderRadius: 12,
              overflow: 'hidden',
              background: 'var(--paper-1)',
            }}
          >
            <table className="premium-table">
              <tbody>
                {section.rows.map((row, i) => (
                  <tr key={i}>
                    <td className="pt-label">{row.label}</td>
                    <td className="pt-val">{row.value}</td>
                    <td className="pt-note">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      ))}

      <div className="lesson-foot">
        <Button variant="ghost" icon="arrow-left" onClick={onBack}>
          Back
        </Button>
      </div>
    </div>
  );
}
