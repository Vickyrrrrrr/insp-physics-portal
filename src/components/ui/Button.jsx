import React from 'react';

export function Button({ 
  children, 
  variant = 'secondary', // 'primary' | 'secondary' | 'ghost'
  size = 'md',           // 'sm' | 'md' | 'lg'
  className = '', 
  style = {}, 
  ...props 
}) {
  const variantClass = variant === 'primary' ? 'btn-primary' : variant === 'ghost' ? 'btn-ghost' : 'btn-secondary';
  const sizeClass = size === 'lg' ? 'btn-lg' : '';

  return (
    <button 
      className={`btn ${variantClass} ${sizeClass} ${className}`} 
      style={{ ...style }} 
      {...props}
    >
      {children}
    </button>
  );
}
