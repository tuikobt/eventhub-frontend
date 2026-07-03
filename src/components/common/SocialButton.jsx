import React from 'react';

export default function SocialButton({
  iconUrl,
  iconName,
  altText,
  onClick,
  className = '',
  ...props
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex justify-center items-center py-xs px-sm border border-border-gray rounded-DEFAULT hover:bg-surface-container-low hover:border-outline-variant transition-all duration-200 cursor-pointer ${className}`}
      {...props}
    >
      {iconUrl ? (
        <img className="w-5 h-5 object-contain" alt={altText} src={iconUrl} />
      ) : (
        <span className="material-symbols-outlined text-[20px] text-text-main">{iconName}</span>
      )}
    </button>
  );
}
