import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Settings, Play, Square, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
interface EquipmentProps {
  name: string;
  status: 'running' | 'idle' | 'fault';
  metric?: string;
}
function EquipmentNode({ name, status, metric }: EquipmentProps) {
  const statusColors = {
    running: 'bg-leaf-500 border-leaf-600 text-white',
    idle: 'bg-sand-200 border-sand-300 text-sand-700',
    fault: 'bg-danger border-red-700 text-white'
  };
  return (
    <div className="flex flex-col items-center">
      <div
        className={`w-16 h-16 rounded-lg border-2 flex items-center justify-center shadow-sm relative ${statusColors[status]}`}>
        
        <Settings
          className={`w-6 h-6 ${status === 'running' ? 'animate-[spin_3s_linear_infinite]' : ''}`} />
        
        {status === 'fault' &&
        <div className="absolute -top-2 -right-2 bg-white rounded-full">
            <AlertCircle className="w-5 h-5 text-danger" />
          </div>
        }
      </div>
      <p className="text-xs font-medium text-sand-900 mt-2 text-center">
        {name}
      </p>
      {metric && <p className="text-[10px] text-sand-500">{metric}</p>}
    </div>);

}
export function LineStatus({
  lineName,
  status,
  oee,
  currentBatch,
  delay = 0
}: any) {
  return (
    <Card animate delay={delay} className="border-l-4 border-l-soil-500">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="font-serif font-bold text-lg text-sand-900">
            {lineName}
          </h3>
          <p className="text-sm text-sand-500">
            Current Batch:{' '}
            <span className="font-medium text-soil-700">
              {currentBatch || 'None'}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs text-sand-500 uppercase">OEE</p>
            <p className="font-bold text-lg text-sand-900">{oee}%</p>
          </div>
          <Badge
            variant={
            status === 'Running' ?
            'success' :
            status === 'Down' ?
            'danger' :
            'warning'
            }>
            
            {status}
          </Badge>
        </div>
      </div>

      {/* Flow Diagram */}
      <div className="relative flex items-center justify-between px-4 py-6 bg-sand-50 rounded-xl border border-sand-100 overflow-hidden">
        {/* Animated Flow Lines */}
        {status === 'Running' &&
        <div className="absolute inset-0 pointer-events-none">
            <motion.div
            className="h-0.5 bg-leaf-500/30 absolute top-1/2 -translate-y-1/2 left-10 right-10"
            initial={{
              scaleX: 0,
              transformOrigin: 'left'
            }}
            animate={{
              scaleX: 1
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity
            }} />
          
          </div>
        }

        <div className="absolute top-1/2 -translate-y-1/2 left-10 right-10 h-0.5 bg-sand-200 z-0"></div>

        <div className="relative z-10">
          <EquipmentNode
            name="Washing"
            status={status === 'Running' ? 'running' : 'idle'}
            metric="2.5 t/h" />
          
        </div>
        <div className="relative z-10">
          <EquipmentNode
            name="Milling"
            status={status === 'Running' ? 'running' : 'idle'}
            metric="2.4 t/h" />
          
        </div>
        <div className="relative z-10">
          <EquipmentNode
            name="Malaxing"
            status={status === 'Running' ? 'running' : 'idle'}
            metric="28°C" />
          
        </div>
        <div className="relative z-10">
          <EquipmentNode
            name="Decanter"
            status={
            status === 'Down' ?
            'fault' :
            status === 'Running' ?
            'running' :
            'idle'
            }
            metric="3200 rpm" />
          
        </div>
        <div className="relative z-10">
          <EquipmentNode
            name="Separator"
            status={status === 'Running' ? 'running' : 'idle'} />
          
        </div>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button
          className="p-2 rounded hover:bg-sand-100 text-sand-600 transition-colors"
          title="Stop Line">
          
          <Square className="w-4 h-4" />
        </button>
        <button
          className="p-2 rounded hover:bg-leaf-50 text-leaf-600 transition-colors"
          title="Start Line">
          
          <Play className="w-4 h-4" />
        </button>
      </div>
    </Card>);

}