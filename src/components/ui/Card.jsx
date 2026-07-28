import React from 'react';

export function Card({ children, className = '', style = {}, ...props }) {
  return (
    <div 
      className={`card ${className}`} 
      style={{
        background: 'var(--c-surface)',
        border: '1px solid var(--c-border)',
        borderRadius: 14,
        transition: 'border-color var(--t-fast)',
        ...style
      }} 
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`card-header ${className}`} style={{ marginBottom: '0.75rem', ...style }} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className = '', style = {}, ...props }) {
  return (
    <h3 className={`heading ${className}`} style={{ fontSize: '1.1rem', ...style }} {...props}>
      {children}
    </h3>
  );
}

export function CardDescription({ children, className = '', style = {}, ...props }) {
  return (
    <p className={`caption text-dim ${className}`} style={{ marginTop: 2, ...style }} {...props}>
      {children}
    </p>
  );
}

export function CardContent({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`card-content ${className}`} style={{ ...style }} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ children, className = '', style = {}, ...props }) {
  return (
    <div className={`card-footer ${className}`} style={{ marginTop: '1rem', paddingTop: '0.85rem', borderTop: '1px solid var(--c-border)', ...style }} {...props}>
      {children}
    </div>
  );
}
