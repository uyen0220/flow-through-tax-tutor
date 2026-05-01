import * as LucideIcons from 'lucide-react';

function toPascalCase(kebab) {
  return kebab
    .split('-')
    .map(p => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');
}

export function Icon({ name, size = 16, color, style }) {
  const key = toPascalCase(name);
  const IconComponent = LucideIcons[key];
  if (!IconComponent) return null;
  return (
    <IconComponent
      size={size}
      color={color}
      strokeWidth={1.75}
      style={style}
    />
  );
}

export function Button({ children, variant = 'primary', size, onClick, disabled, icon, iconRight, style, type = 'button' }) {
  const cls = ['btn', variant, size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : '']
    .filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick} disabled={disabled} style={style} type={type}>
      {icon && <Icon name={icon} size={16} />}
      {children}
      {iconRight && <Icon name={iconRight} size={16} />}
    </button>
  );
}

export function Pill({ children, variant = 'neutral', dot }) {
  return (
    <span className={`pill ${variant}`}>
      {dot && <span className="dot" />}
      {children}
    </span>
  );
}

export function Ref({ children, onClick }) {
  return <span className="ref" onClick={onClick}>{children}</span>;
}

export function Field({ label, children }) {
  return (
    <div className="field">
      {label && <div className="lbl">{label}</div>}
      {children}
    </div>
  );
}

export function Input(props) {
  return <input className="input" {...props} />;
}

export function Divider() {
  return <div className="divider" />;
}
