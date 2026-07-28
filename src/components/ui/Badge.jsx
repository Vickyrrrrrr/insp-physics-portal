import React from 'react';

export function Badge({ 
  children, 
  variant = 'subtle', // 'accent' | 'green' | 'gold' | 'subtle'
  className = '', 
  style = {}, 
  ...props 
}) {
  const variantClass = 
    variant === 'accent' ? 'badge-accent' : 
    variant === 'green' ? 'badge-green' : 
    variant === 'gold' ? 'badge-gold' : 'badge-subtle';

  return (
    <span className={`badge ${variantClass} ${className}`} style={{ ...style }} {...props}>
      {children}
    </span>
  );
}
