import React from 'react';

export default function Button({
  children,
  onClick,
  type = 'button',
  variant = 'primary', // 'primary' | 'secondary' | 'outline'
  icon,
  className = '',
  ...props
}) {
  const baseStyles = 'w-full py-sm rounded-DEFAULT flex items-center justify-center gap-xs transition-all duration-200 ease-out cursor-pointer font-label-md text-label-md';
  
  const variants = {
    primary: 'bg-primary text-on-primary hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]',
    secondary: 'bg-secondary text-on-secondary hover:scale-[1.02] hover:shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]',
    outline: 'border border-border-gray hover:bg-surface-container-low hover:border-outline-variant',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {icon && <span className="material-symbols-outlined text-[20px]">{icon}</span>}
    </button>
  );
}
