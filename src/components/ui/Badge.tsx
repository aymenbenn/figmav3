import React from 'react';
type BadgeVariant =
'default' |
'success' |
'warning' |
'danger' |
'soil' |
'leaf' |
'outline' |
'info' |
'neutral';
interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}
export function Badge({
  variant = 'default',
  children,
  className = '',
  ...props
}: BadgeProps) {
  const variants = {
    default: 'bg-sand-100 text-sand-900',
    success: 'bg-leaf-50 text-leaf-700 border border-leaf-300',
    warning: 'bg-amber-50 text-amber-700 border border-amber-300',
    danger: 'bg-red-50 text-red-700 border border-red-300',
    soil: 'bg-soil-50 text-soil-700 border border-soil-300',
    leaf: 'bg-leaf-50 text-leaf-700 border border-leaf-300',
    outline: 'bg-transparent border border-sand-300 text-sand-700',
    info: 'bg-blue-50 text-blue-700 border border-blue-200',
    neutral: 'bg-sand-100 text-sand-700 border border-sand-200'
  };
  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
      {...props}>
      
      {children}
    </span>);

}