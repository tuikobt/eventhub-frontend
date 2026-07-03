import React, { useState } from 'react';

export default function FloatingInput({
  id,
  name,
  label,
  type = 'text',
  value,
  onChange,
  required = false,
  className = '',
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const inputType = isPassword ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`relative ${className}`}>
      <input
        className="floating-input input-glow w-full px-sm py-xs h-[56px] border border-border-gray rounded-DEFAULT bg-transparent focus:outline-none transition-all duration-200"
        id={id}
        name={name}
        placeholder=" "
        required={required}
        type={inputType}
        value={value}
        onChange={onChange}
        {...props}
      />
      <label
        className="floating-label absolute left-sm top-[16px] text-text-muted transition-all duration-200 pointer-events-none origin-left"
        htmlFor={id}
      >
        {label}
      </label>
      {isPassword && (
        <button
          className="absolute right-sm top-[16px] text-text-muted hover:text-primary transition-colors focus:outline-none cursor-pointer animate-none"
          onClick={togglePasswordVisibility}
          type="button"
        >
          <span className="material-symbols-outlined">
            {showPassword ? 'visibility' : 'visibility_off'}
          </span>
        </button>
      )}
    </div>
  );
}
