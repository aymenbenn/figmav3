import React, { useState } from 'react';
import { motion } from 'framer-motion';
interface Tab {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}
interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}
export function Tabs({ tabs, defaultTab, className = '' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0].id);
  return (
    <div className={`flex flex-col w-full ${className}`}>
      <div className="flex space-x-1 border-b border-sand-200 overflow-x-auto hide-scrollbar">
        {tabs.map((tab) =>
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap ${activeTab === tab.id ? 'text-soil-700' : 'text-sand-500 hover:text-sand-900'}`}>
          
            {tab.icon}
            {tab.label}
            {activeTab === tab.id &&
          <motion.div
            layoutId="activeTabIndicator"
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-soil-500"
            initial={false}
            transition={{
              type: 'spring',
              stiffness: 500,
              damping: 30
            }} />

          }
          </button>
        )}
      </div>
      <div className="py-6">
        <motion.div
          key={activeTab}
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.3
          }}>
          
          {tabs.find((t) => t.id === activeTab)?.content}
        </motion.div>
      </div>
    </div>);

}