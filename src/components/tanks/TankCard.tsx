import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Drawer } from '../ui/Drawer';
import { Button } from '../ui/Button';
import {
  Activity,
  Thermometer,
  Gauge,
  Droplets,
  Settings2,
  History } from
'lucide-react';
interface TankProps {
  id: string;
  grade: string;
  currentVolume: number;
  capacity: number;
  status: 'Filling' | 'Holding' | 'Draining' | 'Cleaning' | 'Maintenance';
  temperature: number;
  pressure: number;
  lastSample: string;
  delay?: number;
}
export function TankCard({
  id,
  grade,
  currentVolume,
  capacity,
  status,
  temperature,
  pressure,
  lastSample,
  delay = 0
}: TankProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const fillPercentage = Math.round(currentVolume / capacity * 100);
  // Determine colors based on status and fill
  let statusColor:
  'default' |
  'success' |
  'warning' |
  'danger' |
  'soil' |
  'leaf' = 'default';
  let liquidColor = 'bg-amber-400/70'; // Default oil color
  let borderColor = 'border-sand-100';
  if (status === 'Maintenance') {
    statusColor = 'danger';
    liquidColor = 'bg-transparent';
    borderColor = 'border-red-300 ring-1 ring-red-100';
  } else if (status === 'Cleaning') {
    statusColor = 'warning';
    liquidColor = 'bg-blue-300/50'; // Water/cleaning fluid
  } else if (status === 'Filling') {
    statusColor = 'leaf';
  } else if (status === 'Draining') {
    statusColor = 'soil';
  } else if (fillPercentage < 15) {
    statusColor = 'warning';
  } else {
    statusColor = 'success';
  }
  // Map grade to specific oil colors
  if (status !== 'Cleaning' && status !== 'Maintenance') {
    if (grade.includes('Extra Virgin')) liquidColor = 'bg-leaf-500/80';else
    if (grade.includes('Virgin')) liquidColor = 'bg-leaf-400/80';else
    if (grade.includes('Refined')) liquidColor = 'bg-amber-300/80';else
    if (grade.includes('Pomace')) liquidColor = 'bg-soil-500/80';
  }
  return (
    <>
      <Card
        animate
        delay={delay}
        className={`cursor-pointer hover:shadow-md transition-all group ${borderColor}`}
        onClick={() => setIsDrawerOpen(true)}>
        
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-serif font-bold text-lg text-sand-900">{id}</h3>
            <p className="text-xs text-sand-500 font-medium">{grade}</p>
          </div>
          <Badge variant={statusColor}>{status}</Badge>
        </div>

        {/* Tank Visualization */}
        <div className="relative w-full h-48 flex justify-center items-center mb-4 bg-sand-50/50 rounded-lg overflow-hidden">
          {/* Tank Image */}
          <img
            src="/tank.png"
            alt="Storage Tank"
            className="h-full object-contain relative z-10 drop-shadow-sm" />
          

          {/* Simulated Liquid Fill - Positioned behind the glass but in front of the background */}
          {/* These values are approximate to fit the specific tank PNG provided */}
          <div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 w-[45%] h-[60%] z-0 rounded-b-[20%] overflow-hidden">
            <motion.div
              className={`absolute bottom-0 left-0 right-0 w-full ${liquidColor} mix-blend-multiply transition-all duration-1000 ease-in-out`}
              initial={{
                height: '0%'
              }}
              animate={{
                height: `${fillPercentage}%`
              }}
              transition={{
                duration: 1.5,
                delay: delay + 0.2,
                type: 'spring'
              }}>
              
              {/* Subtle wave effect */}
              {(status === 'Filling' || status === 'Draining') &&
              <div className="absolute top-0 left-0 right-0 h-2 bg-white/20 animate-pulse"></div>
              }
            </motion.div>
          </div>

          {/* Overlay Fill % Text */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <span className="bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-sand-900 shadow-sm border border-sand-200/50">
              {fillPercentage}%
            </span>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-2 mb-3">
          <div className="bg-sand-50 p-2 rounded-md">
            <p className="text-[10px] text-sand-500 uppercase tracking-wider mb-0.5">
              Volume
            </p>
            <p className="text-sm font-semibold text-sand-900">
              {currentVolume.toLocaleString()}{' '}
              <span className="text-xs font-normal text-sand-500">
                / {capacity.toLocaleString()} L
              </span>
            </p>
          </div>
          <div className="bg-sand-50 p-2 rounded-md">
            <p className="text-[10px] text-sand-500 uppercase tracking-wider mb-0.5">
              Temp / Press
            </p>
            <p className="text-sm font-semibold text-sand-900">
              {temperature}°C{' '}
              <span className="text-xs font-normal text-sand-500">
                | {pressure} bar
              </span>
            </p>
          </div>
        </div>

        <div className="flex items-center text-xs text-sand-500 gap-1.5">
          <Activity className="w-3.5 h-3.5 text-soil-400" />
          <span>Last sample: {lastSample}</span>
        </div>
      </Card>

      {/* Detail Drawer */}
      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        title={`Tank ${id} Details`}
        size="lg">
        
        <div className="space-y-6">
          {/* Header Stats */}
          <div className="flex items-center justify-between bg-sand-50 p-4 rounded-xl border border-sand-200">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-lg border border-sand-200 flex items-center justify-center relative overflow-hidden">
                <div
                  className={`absolute bottom-0 w-full ${liquidColor}`}
                  style={{
                    height: `${fillPercentage}%`
                  }}>
                </div>
                <span className="relative z-10 font-bold text-sand-900 text-sm">
                  {fillPercentage}%
                </span>
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl text-sand-900">
                  {grade}
                </h3>
                <p className="text-sm text-sand-500">
                  {currentVolume.toLocaleString()} L of{' '}
                  {capacity.toLocaleString()} L Capacity
                </p>
              </div>
            </div>
            <Badge variant={statusColor} className="text-sm px-3 py-1">
              {status}
            </Badge>
          </div>

          {/* Quick Actions */}
          <div className="flex gap-3">
            <Button
              variant="primary"
              leftIcon={<Droplets className="w-4 h-4" />}>
              
              Transfer Oil
            </Button>
            <Button
              variant="outline"
              leftIcon={<Activity className="w-4 h-4" />}>
              
              Log QC Sample
            </Button>
            <Button
              variant="outline"
              leftIcon={<Settings2 className="w-4 h-4" />}>
              
              Valve Controls
            </Button>
            <Button
              variant="ghost"
              className="ml-auto text-danger hover:text-red-800 hover:bg-red-50">
              
              Schedule Maintenance
            </Button>
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <Card noPadding className="p-4">
              <h4 className="text-sm font-semibold text-sand-900 mb-4 flex items-center gap-2">
                <History className="w-4 h-4 text-sand-400" />
                24h Fill History
              </h4>
              <div className="h-48 bg-sand-50 rounded border border-sand-100 flex items-center justify-center text-sand-400 text-sm">
                [Line Chart: Volume over time]
              </div>
            </Card>
            <Card noPadding className="p-4">
              <h4 className="text-sm font-semibold text-sand-900 mb-4 flex items-center gap-2">
                <Thermometer className="w-4 h-4 text-sand-400" />
                Temp & Pressure
              </h4>
              <div className="h-48 bg-sand-50 rounded border border-sand-100 flex items-center justify-center text-sand-400 text-sm">
                [Dual Axis Chart]
              </div>
            </Card>
          </div>

          {/* Recent Samples Table */}
          <div>
            <h4 className="text-sm font-semibold text-sand-900 mb-3">
              Recent QC Samples
            </h4>
            <div className="border border-sand-200 rounded-lg overflow-hidden">
              <table className="w-full text-sm text-left">
                <thead className="bg-sand-50 text-sand-500 border-b border-sand-200">
                  <tr>
                    <th className="px-4 py-3 font-medium">Time</th>
                    <th className="px-4 py-3 font-medium">Acidity (%)</th>
                    <th className="px-4 py-3 font-medium">Peroxide</th>
                    <th className="px-4 py-3 font-medium">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand-100 bg-white">
                  <tr>
                    <td className="px-4 py-3 text-sand-900">Today, 08:00</td>
                    <td className="px-4 py-3">0.24</td>
                    <td className="px-4 py-3">6.2</td>
                    <td className="px-4 py-3">
                      <Badge variant="success">Pass</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sand-900">
                      Yesterday, 20:00
                    </td>
                    <td className="px-4 py-3">0.25</td>
                    <td className="px-4 py-3">6.4</td>
                    <td className="px-4 py-3">
                      <Badge variant="success">Pass</Badge>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sand-900">
                      Yesterday, 08:00
                    </td>
                    <td className="px-4 py-3">0.28</td>
                    <td className="px-4 py-3">7.1</td>
                    <td className="px-4 py-3">
                      <Badge variant="warning">Monitor</Badge>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Drawer>
    </>);

}