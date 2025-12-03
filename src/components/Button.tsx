import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
const Button = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  icon,
  iconPosition = 'right'
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none';
  const variantStyles = {
    primary: 'bg-[#141926] text-white hover:bg-[#1e2438] border border-transparent',
    secondary: 'bg-gray-100 text-gray-800 hover:bg-gray-200 border border-transparent',
    outline: 'bg-transparent text-[#141926] hover:bg-gray-100 border border-[#141926]',
    text: 'bg-transparent text-[#141926] hover:text-gray-700 border-none hover:underline'
  };
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg'
  };
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-60 cursor-not-allowed' : '';
  const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyle} ${disabledStyle} ${className}`;
  const content = <>
      {icon && iconPosition === 'left' && <span className="mr-2">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
    </>;
  if (to) {
    return <Link to={to} className={styles}>
        {content}
      </Link>;
  }
  if (href) {
    return <a href={href} className={styles} target="_blank" rel="noopener noreferrer">
        {content}
      </a>;
  }
  return <button type={type} onClick={onClick} className={styles} disabled={disabled}>
      {content}
    </button>;
};
export default Button;