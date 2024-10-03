 import React from 'react';
import '../../styles/components/Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  fullWidth = false, 
  loading = false, 
  icon, 
  onClick, 
  type = 'button',
  className = ''
}) => {
  const buttonClasses = [
    'custom-button',
    `button-${variant}`,
    `button-${size}`,
    fullWidth ? 'button-full-width' : '',
    loading ? 'button-loading' : '',
    disabled ? 'button-disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && (
        <span className="button-spinner">
          <svg 
            className="animate-spin" 
            viewBox="0 0 24 24"
          >
            <circle 
              className="spinner-circle" 
              cx="12" 
              cy="12" 
              r="10" 
              fill="none" 
              strokeWidth="3" 
            />
          </svg>
        </span>
      )}
      {icon && !loading && <span className="button-icon">{icon}</span>}
      <span className="button-text">{children}</span>
      Button
    </button>
  );
};

export default Button;