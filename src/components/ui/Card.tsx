import React, { Children, Component, isValidElement } from 'react';
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
  // If noPadding OR if the card contains CardHeader/CardContent sub-components, skip default padding.
  // Detect sub-components by checking children for CardHeader/CardContent
  const hasSubComponents = Children.toArray(children).some((child: any) => {
    if (!isValidElement(child)) return false;
    const type: any = child.type;
    return (
      type === CardHeader ||
      type === CardContent ||
      type === CardTitle ||
      type === CardFooter);

  });
  const padding = noPadding || hasSubComponents ? '' : 'p-5';
  const baseClass = `bg-white rounded-xl border border-sand-100 shadow-sm overflow-hidden ${padding} ${className}`;
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
export function CardHeader({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-5 py-4 ${className}`} {...props}>
      {children}
    </div>);

}
export function CardTitle({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={`font-serif font-bold text-base text-sand-900 leading-tight ${className}`}
      {...props}>
      
      {children}
    </h3>);

}
export function CardContent({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`px-5 pb-5 ${className}`} {...props}>
      {children}
    </div>);

}
export function CardFooter({
  children,
  className = '',
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`px-5 py-3 border-t border-sand-100 ${className}`}
      {...props}>
      
      {children}
    </div>);

}