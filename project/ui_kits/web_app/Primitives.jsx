// Component primitives + small utilities for the Tax Tutor web app.

const { useState, useEffect, useRef } = React;

// Tiny icon component using Lucide CDN
function Icon({ name, size = 16, color, style }) {
  const ref = useRef(null);
  useEffect(() => {
    if (window.lucide && ref.current) window.lucide.createIcons({ nameAttr: 'data-lucide', icons: window.lucide.icons });
  }, [name]);
  return <i ref={ref} data-lucide={name} style={{ width: size, height: size, display: 'inline-flex', color, ...style }}></i>;
}

function Button({ children, variant = 'primary', size, onClick, disabled, icon, iconRight, style, type = 'button' }) {
  const cls = ['btn', variant, size === 'lg' ? 'lg' : size === 'sm' ? 'sm' : '', disabled ? 'disabled' : ''].filter(Boolean).join(' ');
  return (
    <button className={cls} onClick={onClick} disabled={disabled} style={style} type={type}>
      {icon && <Icon name={icon} size={16}/>}
      {children}
      {iconRight && <Icon name={iconRight} size={16}/>}
    </button>
  );
}

function Pill({ children, variant = 'neutral', dot }) {
  return (
    <span className={`pill ${variant}`}>
      {dot && <span className="dot"></span>}
      {children}
    </span>
  );
}

function Ref({ children, onClick }) {
  return <span className="ref" onClick={onClick}>{children}</span>;
}

function Field({ label, children }) {
  return (
    <div className="field">
      {label && <div className="lbl">{label}</div>}
      {children}
    </div>
  );
}

function Input(props) {
  return <input className="input" {...props}/>;
}

function Divider() {
  return <div className="divider"/>;
}

Object.assign(window, { Icon, Button, Pill, Ref, Field, Input, Divider });
