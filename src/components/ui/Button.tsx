import React from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading,
  leftIcon,
  rightIcon,
  children,
  className = '',
  disabled,
  ...props
}: ButtonProps) {
  const baseStyles =
  'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-lg';
  const variants = {
    primary:
    'bg-soil-500 text-white hover:bg-soil-700 focus:ring-soil-500 shadow-sm',
    secondary:
    'bg-leaf-500 text-white hover:bg-leaf-700 focus:ring-leaf-500 shadow-sm',
    outline:
    'border border-sand-300 text-sand-900 hover:bg-sand-50 focus:ring-sand-500 bg-white',
    ghost:
    'text-sand-700 hover:bg-sand-100 hover:text-sand-900 focus:ring-sand-500',
    danger:
    'bg-danger text-white hover:bg-red-700 focus:ring-red-500 shadow-sm'
  };
  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2'
  };
  return (
    <motion.button
      whileTap={{
        scale: disabled || isLoading ? 1 : 0.98
      }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={disabled || isLoading}
      {...props}>
      
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </motion.button>);

}