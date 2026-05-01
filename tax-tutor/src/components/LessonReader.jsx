import { Icon, Button, Pill, Ref } from './Primitives';

export function LessonReader({ onBack, onNext, onOpenPractice }) {
  return (
    <div className="reader">
      <div style={{ display: 'flex', gap: 8, marginBottom: 14 }}>
        <Pill variant="ok" dot>In progress</Pill>
        <Pill variant="neutral">~ 8 min remaining</Pill>
      </div>

      <h1>Contributing property — and the §721 rule</h1>
      <p className="lede">
        When two people start a partnership, they almost never put in the same thing. One brings cash,
        one brings equipment. Without a special rule, that swap would be taxable.{' '}
        <mark>§721 says: hold up — no gain, no loss, no tax. Yet.</mark>
      </p>

      <h2>The general rule</h2>
      <p>
        A partner contributes <strong>cash or property</strong> to a partnership in exchange for a
        partnership interest. Under <Ref>§721</Ref>, neither the partner nor the partnership
        recognizes gain or loss on the contribution. The "yet" matters — that gain doesn't disappear,
        it gets <em>built into basis</em> on both sides.
      </p>

      <p>There are two kinds of basis you'll track for the rest of this chapter:</p>
      <ul>
        <li>
          <strong>Outside basis</strong> — the partner's basis in their <em>partnership interest</em>.
          Starts at the basis of property contributed (plus cash).
        </li>
        <li>
          <strong>Inside basis</strong> — the partnership's basis in the <em>property itself</em>.
          Carries over from the contributing partner.
        </li>
      </ul>

      <div className="callout">
        <div className="head">
          <Icon name="sparkles" size={14} />
          Tutor tip
        </div>
        <p>
          Aggregate inside basis equals aggregate outside basis at the moment of contribution. After
          that, they drift apart — that's where §704 and §754 enter the picture.
        </p>
      </div>

      <h2>A worked example</h2>
      <p>
        <strong>Anna</strong> contributes $40,000 of cash. <strong>Ben</strong> contributes equipment
        with an FMV of $40,000 and an adjusted basis of $25,000. Both receive a 50% partnership
        interest. What are their outside bases? What's the partnership's inside basis in the equipment?
      </p>

      <figure>
        <img
          src="/illustration-partnership.svg"
          alt="Partner A and B contribute to a Partnership which issues K-1s back"
          style={{ maxWidth: 360 }}
        />
        <figcaption>
          Cash and property flow in; partnership interests (and eventually K-1s) flow back out.
        </figcaption>
      </figure>

      <h3>Anna's outside basis</h3>
      <p>
        Anna contributed $40,000 of cash. Cash basis is, of course, $40,000.{' '}
        <strong>Anna's outside basis = $40,000.</strong>
      </p>

      <h3>Ben's outside basis</h3>
      <p>
        Ben's contribution is property, not cash. Per <Ref>§722</Ref>, his outside basis equals his{' '}
        <em>adjusted basis</em> in the property — not its FMV.{' '}
        <strong>Ben's outside basis = $25,000.</strong> The $15,000 of built-in gain doesn't
        disappear; it's preserved in his basis.
      </p>

      <h3>Inside basis</h3>
      <p>
        Per <Ref>§723</Ref>, the partnership takes a carryover basis in contributed property. The
        partnership's basis in the equipment is <strong>$25,000</strong> — same as Ben's basis was.
        The $15,000 of built-in gain rides along on the partnership's books and gets allocated back
        to <em>Ben</em> (not split 50/50) under <Ref>§704(c)</Ref>.
      </p>

      <div className="callout" style={{ borderColor: 'var(--highlight)', background: 'var(--highlight-soft)' }}>
        <div className="head" style={{ color: 'var(--highlight-ink)' }}>
          <Icon name="alert-triangle" size={14} />
          Watch out
        </div>
        <p style={{ color: 'var(--highlight-ink)' }}>
          If Ben contributed <em>services</em> instead of property, none of this applies — §721
          doesn't cover services, and Ben would recognize ordinary income equal to the FMV of the
          interest received.
        </p>
      </div>

      <div className="lesson-foot">
        <Button variant="ghost" icon="arrow-left" onClick={onBack}>Previous</Button>
        <div style={{ display: 'flex', gap: 10 }}>
          <Button variant="subtle" onClick={onOpenPractice}>Try practice</Button>
          <Button variant="primary" iconRight="arrow-right" onClick={onNext}>
            Mark complete &amp; continue
          </Button>
        </div>
      </div>
    </div>
  );
}
