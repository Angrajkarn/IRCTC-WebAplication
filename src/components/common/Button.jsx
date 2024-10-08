import React from 'react';
import './Button.scss';

const Button = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'medium',
  disabled = false,
  icon: Icon,
}) => {
  return (
    <button
      type={type}
      className={`button button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon className="button__icon" />}
      {children}
    </button>
  );
};

export default Button;
