import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'md' | 'lg' | 'xl' | 'full';
}
export function Drawer({
  isOpen,
  onClose,
  title,
  children,
  size = 'md'
}: DrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  const sizes = {
    md: 'max-w-md',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full'
  };
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-sand-900/40 backdrop-blur-sm z-40" />
        
          <motion.div
          initial={{
            x: '100%'
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: '100%'
          }}
          transition={{
            type: 'spring',
            damping: 25,
            stiffness: 200
          }}
          className={`fixed inset-y-0 right-0 z-50 w-full ${sizes[size]} bg-sand-50 shadow-2xl flex flex-col border-l border-sand-200`}>
          
            <div className="flex items-center justify-between px-6 py-4 border-b border-sand-200 bg-white">
              <h2 className="text-xl font-serif font-semibold text-sand-900">
                {title}
              </h2>
              <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-sand-100 text-sand-500 transition-colors">
              
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">{children}</div>
          </motion.div>
        </>
      }
    </AnimatePresence>);

}