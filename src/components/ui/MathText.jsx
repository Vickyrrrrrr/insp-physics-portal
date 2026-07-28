import React from 'react';

export function MathText({ children, className = '', style = {} }) {
  if (typeof children !== 'string') return <span>{children}</span>;

  // Split string by LaTeX inline math delimeters ($...$)
  const parts = children.split(/(\$[^\$]+\$)/g);

  return (
    <span className={className} style={{ ...style }}>
      {parts.map((part, index) => {
        if (part.startsWith('$') && part.endsWith('$') && part.length > 2) {
          const rawMath = part.slice(1, -1);
          
          // Format common LaTeX formulas into clean math symbols
          const formatted = rawMath
            .replace(/\\vec\{F\}/g, 'F⃗')
            .replace(/\\vec\{B\}/g, 'B⃗')
            .replace(/\\vec\{l\}/g, 'l⃗')
            .replace(/\\vec\{E\}/g, 'E⃗')
            .replace(/\\vec\{J\}/g, 'J⃗')
            .replace(/\\times/g, '×')
            .replace(/\\cdot/g, '·')
            .replace(/\\oint/g, '∮')
            .replace(/\\frac\{dQ\}\{T\}/g, 'dQ / T')
            .replace(/\\le/g, '≤')
            .replace(/\\ge/g, '≥')
            .replace(/\\lambda_0/g, 'λ₀')
            .replace(/\\lambda/g, 'λ')
            .replace(/\\mu_0/g, 'μ₀')
            .replace(/\\varepsilon_0/g, 'ε₀')
            .replace(/\\nabla/g, '∇')
            .replace(/\\partial/g, '∂')
            .replace(/\\infty/g, '∞')
            .replace(/\\Delta/g, 'Δ')
            .replace(/\\omega/g, 'ω')
            .replace(/\\theta/g, 'θ')
            .replace(/\\pi/g, 'π')
            .replace(/\\int/g, '∫');

          return (
            <span 
              key={index} 
              className="mono text-accent" 
              style={{ 
                fontStyle: 'italic', 
                fontWeight: 600, 
                padding: '0 0.2rem',
                background: 'var(--c-surface-subtle)',
                borderRadius: 4,
                border: '1px solid var(--c-border)',
                fontSize: '0.88em'
              }}
            >
              {formatted}
            </span>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
