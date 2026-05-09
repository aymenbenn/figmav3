import React from 'react';
import { motion } from 'framer-motion';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animate?: boolean;
  delay?: number;
  noPadding?: boolean;
}
export function Card({
  children,
  className = '',
  animate = false,
  delay = 0,
  noPadding = false,
  ...props
}: CardProps) {
  const baseClass = `bg-white rounded-xl border border-sand-100 shadow-sm overflow-hidden ${noPadding ? '' : 'p-5'} ${className}`;
  if (animate) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.4,
          delay
        }}
        className={baseClass}
        {...props as any}>
        
        {children}
      </motion.div>);

  }
  return (
    <div className={baseClass} {...props}>
      {children}
    </div>);

}