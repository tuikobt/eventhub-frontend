import React from 'react';

export default function Checkbox({
  id,
  checked,
  onChange,
  label,
  className = '',
  ...props
}) {
  return (
    <label className={`flex items-center gap-xs cursor-pointer group ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-4 h-4 rounded border-border-gray text-primary focus:ring-primary/20 transition-all duration-200 cursor-pointer"
        {...props}
      />
      {label && (
        <span className="font-body-md text-body-md text-text-muted group-hover:text-text-main transition-colors duration-200 select-none">
          {label}
        </span>
      )}
    </label>
  );
}
