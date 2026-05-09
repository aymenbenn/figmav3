import React from 'react';
import { Card } from '../ui/Card';
import { motion } from 'framer-motion';
export function SupplyChainNetwork() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-white">
          <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">
            On-Time Delivery
          </p>
          <p className="text-2xl font-bold text-leaf-700">94.2%</p>
        </Card>
        <Card className="bg-white">
          <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">
            Avg Lead Time
          </p>
          <p className="text-2xl font-bold text-sand-900">3.5 Days</p>
        </Card>
        <Card className="bg-white">
          <p className="text-sand-500 text-xs uppercase tracking-wider mb-1">
            Active Shipments
          </p>
          <p className="text-2xl font-bold text-soil-700">12</p>
        </Card>
        <Card className="bg-red-50 border-red-100">
          <p className="text-red-700 text-xs uppercase tracking-wider mb-1">
            At-Risk Shipments
          </p>
          <p className="text-2xl font-bold text-danger">2</p>
        </Card>
      </div>

      <Card
        noPadding
        className="overflow-hidden relative h-[600px] bg-sand-50 flex items-center justify-center border-sand-200">
        
        {/* Background Network Image */}
        <div
          className="absolute inset-0 opacity-20 bg-cover bg-center mix-blend-multiply"
          style={{
            backgroundImage:
            "url('https://cdn.magicpatterns.com/uploads/okXjMcoqrZqdYLq8Cd2RMJ/Gemini_Generated_Image_3nzz6m3nzz6m3nzz_1.png')"
          }} />
        

        {/* Overlay Interactive Elements (Stylized representation) */}
        <div className="relative z-10 w-full max-w-4xl h-full p-8 flex flex-col justify-between">
          {/* Top Row: Farms */}
          <div className="flex justify-between w-full px-12">
            <Node label="Kakuzi Co-op" type="farm" status="normal" />
            <Node label="Murang'a Growers" type="farm" status="warning" />
            <Node label="Nyeri Union" type="farm" status="normal" />
          </div>

          {/* Middle: Factory */}
          <div className="flex justify-center w-full">
            <Node
              label="Nairobi Processing Plant"
              type="factory"
              status="normal"
              large />
            
          </div>

          {/* Bottom Row: Distribution */}
          <div className="flex justify-around w-full px-24">
            <Node label="Mombasa Port" type="dist" status="normal" />
            <Node label="Local Retail DC" type="dist" status="normal" />
          </div>

          {/* Animated Flow Lines (SVG) */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-[-1]"
            style={{
              filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
            }}>
            
            {/* Farm to Factory */}
            <FlowLine x1="20%" y1="15%" x2="50%" y2="50%" />
            <FlowLine x1="50%" y1="15%" x2="50%" y2="50%" warning />
            <FlowLine x1="80%" y1="15%" x2="50%" y2="50%" />

            {/* Factory to Dist */}
            <FlowLine x1="50%" y1="50%" x2="35%" y2="85%" />
            <FlowLine x1="50%" y1="50%" x2="65%" y2="85%" />
          </svg>
        </div>
      </Card>
    </div>);

}
function Node({
  label,
  type,
  status,
  large = false





}: {label: string;type: string;status: string;large?: boolean;}) {
  const sizeClass = large ? 'w-24 h-24' : 'w-16 h-16';
  const bgClass =
  type === 'farm' ?
  'bg-leaf-100 border-leaf-300' :
  type === 'factory' ?
  'bg-soil-100 border-soil-400' :
  'bg-sand-200 border-sand-400';
  const icon = type === 'farm' ? '🌱' : type === 'factory' ? '🏭' : '🏢';
  return (
    <motion.div
      whileHover={{
        scale: 1.05
      }}
      className="flex flex-col items-center cursor-pointer group">
      
      <div
        className={`relative ${sizeClass} rounded-full border-4 ${bgClass} flex items-center justify-center text-2xl shadow-md bg-white transition-colors group-hover:border-soil-500`}>
        
        {icon}
        {status === 'warning' &&
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-500 rounded-full border-2 border-white animate-pulse"></span>
        }
      </div>
      <span className="mt-2 text-sm font-medium text-sand-900 bg-white/80 px-2 py-0.5 rounded backdrop-blur-sm border border-sand-100 shadow-sm">
        {label}
      </span>
    </motion.div>);

}
function FlowLine({
  x1,
  y1,
  x2,
  y2,
  warning = false






}: {x1: string;y1: string;x2: string;y2: string;warning?: boolean;}) {
  return (
    <>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke={warning ? '#D97706' : '#C9BFA9'}
        strokeWidth="2"
        strokeDasharray="6 6" />
      
      <circle r="4" fill={warning ? '#D97706' : '#5B7F2A'}>
        <animateMotion
          dur={warning ? '4s' : '3s'}
          repeatCount="indefinite"
          path={`M ${x1.replace('%', '')} ${y1.replace('%', '')} L ${x2.replace('%', '')} ${y2.replace('%', '')}`} />
        
      </circle>
    </>);

}