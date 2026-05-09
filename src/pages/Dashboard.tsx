import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { TankCard } from '../components/tanks/TankCard';
import {
  Droplets,
  TrendingUp,
  AlertTriangle,
  Clock,
  ArrowRight,
  Activity } from
'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
// Mock Data
const tanksData = [
{
  id: 'T-01',
  grade: 'Extra Virgin Premium',
  currentVolume: 47500,
  capacity: 50000,
  status: 'Holding' as const,
  temperature: 18.2,
  pressure: 1.1,
  lastSample: '2h ago'
},
{
  id: 'T-02',
  grade: 'Virgin Standard',
  currentVolume: 21000,
  capacity: 50000,
  status: 'Filling' as const,
  temperature: 19.5,
  pressure: 1.2,
  lastSample: '10m ago'
},
{
  id: 'T-03',
  grade: 'Refined Oil',
  currentVolume: 39000,
  capacity: 50000,
  status: 'Draining' as const,
  temperature: 22.1,
  pressure: 1.0,
  lastSample: '4h ago'
},
{
  id: 'T-04',
  grade: 'Pomace',
  currentVolume: 6000,
  capacity: 50000,
  status: 'Holding' as const,
  temperature: 24.0,
  pressure: 1.0,
  lastSample: '1d ago'
},
{
  id: 'T-05',
  grade: 'Empty',
  currentVolume: 0,
  capacity: 25000,
  status: 'Cleaning' as const,
  temperature: 65.0,
  pressure: 2.5,
  lastSample: '-'
},
{
  id: 'T-06',
  grade: 'Out of Service',
  currentVolume: 0,
  capacity: 25000,
  status: 'Maintenance' as const,
  temperature: 0,
  pressure: 0,
  lastSample: '-'
},
{
  id: 'T-07',
  grade: 'Extra Virgin Organic',
  currentVolume: 24000,
  capacity: 25000,
  status: 'Holding' as const,
  temperature: 17.8,
  pressure: 1.1,
  lastSample: '5h ago'
},
{
  id: 'T-08',
  grade: 'Virgin Standard',
  currentVolume: 18500,
  capacity: 25000,
  status: 'Holding' as const,
  temperature: 19.0,
  pressure: 1.1,
  lastSample: '8h ago'
},
{
  id: 'T-09',
  grade: 'Refined Oil',
  currentVolume: 22000,
  capacity: 25000,
  status: 'Holding' as const,
  temperature: 21.5,
  pressure: 1.0,
  lastSample: '12h ago'
},
{
  id: 'T-10',
  grade: 'Extra Virgin Premium',
  currentVolume: 8000,
  capacity: 25000,
  status: 'Filling' as const,
  temperature: 18.5,
  pressure: 1.2,
  lastSample: '1h ago'
},
{
  id: 'T-11',
  grade: 'Pomace',
  currentVolume: 24500,
  capacity: 25000,
  status: 'Holding' as const,
  temperature: 23.5,
  pressure: 1.0,
  lastSample: '2d ago'
}];

const throughputData = [
{
  name: 'Mon',
  value: 4000
},
{
  name: 'Tue',
  value: 3000
},
{
  name: 'Wed',
  value: 5000
},
{
  name: 'Thu',
  value: 2780
},
{
  name: 'Fri',
  value: 6890
},
{
  name: 'Sat',
  value: 2390
},
{
  name: 'Sun',
  value: 3490
}];

const alerts = [
{
  id: 1,
  type: 'warning',
  message: 'T-04 Pomace level critically low (12%)',
  time: '10m ago'
},
{
  id: 2,
  type: 'danger',
  message: 'Cold Press Line B unexpected downtime',
  time: '25m ago'
},
{
  id: 3,
  type: 'info',
  message: 'Gate 2: 3 trucks waiting for offloading',
  time: '1h ago'
}];

const activities = [
{
  id: 1,
  action: 'Batch B-2026-0451 completed',
  user: 'System',
  time: '10:45 AM'
},
{
  id: 2,
  action: 'QC Passed for T-01 EVOO',
  user: 'Sarah K.',
  time: '09:30 AM'
},
{
  id: 3,
  action: 'Maintenance started on T-06',
  user: 'Mike T.',
  time: '08:00 AM'
},
{
  id: 4,
  action: 'Shift change: Day Shift started',
  user: 'Admin',
  time: '06:00 AM'
}];

export function Dashboard() {
  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-12">
      {/* Welcome Strip */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            Factory Overview
          </h1>
          <p className="text-sand-500 text-sm">
            Saturday, May 9th, 2026 •{' '}
            <span className="text-soil-500 font-medium">Day Shift Active</span>
          </p>
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
          <div className="bg-white px-4 py-2 rounded-lg border border-sand-200 shadow-sm min-w-[140px]">
            <p className="text-xs text-sand-500 uppercase tracking-wider mb-1">
              Today's Output
            </p>
            <p className="text-lg font-bold text-leaf-700 flex items-center gap-2">
              12,450 L <TrendingUp className="w-4 h-4 text-leaf-500" />
            </p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-sand-200 shadow-sm min-w-[140px]">
            <p className="text-xs text-sand-500 uppercase tracking-wider mb-1">
              Avocados Proc.
            </p>
            <p className="text-lg font-bold text-soil-700">84,200 kg</p>
          </div>
          <div className="bg-white px-4 py-2 rounded-lg border border-sand-200 shadow-sm min-w-[140px]">
            <p className="text-xs text-sand-500 uppercase tracking-wider mb-1">
              Tanks Active
            </p>
            <p className="text-lg font-bold text-sand-900">9 / 11</p>
          </div>
        </div>
      </div>

      {/* Tank Farm Visualization - The Centerpiece */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-serif font-bold text-sand-900 flex items-center gap-2">
            <Droplets className="w-5 h-5 text-soil-500" />
            Tank Farm Status
          </h2>
          <Badge variant="outline">Live Updates</Badge>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {tanksData.map((tank, index) =>
          <div
            key={tank.id}
            className={index === 0 || index === 1 ? 'xl:col-span-2' : ''}>
            
              <TankCard {...tank} delay={index * 0.05} />
            </div>
          )}
        </div>
      </section>

      {/* Secondary Dashboard Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Throughput Chart */}
        <Card animate delay={0.4} className="lg:col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-serif font-bold text-sand-900">
              Production Throughput (7 Days)
            </h3>
            <select className="text-sm bg-sand-50 border border-sand-200 rounded-md px-2 py-1 outline-none focus:ring-1 focus:ring-soil-500">
              <option>Volume (L)</option>
              <option>Mass (kg)</option>
            </select>
          </div>
          <div className="flex-1 min-h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={throughputData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 0
                }}>
                
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B7F2A" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#5B7F2A" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#EDE6D6" />
                
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: '#6B6354'
                  }}
                  dy={10} />
                
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fontSize: 12,
                    fill: '#6B6354'
                  }} />
                
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#fff',
                    borderRadius: '8px',
                    border: '1px solid #EDE6D6',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                  itemStyle={{
                    color: '#5B7F2A',
                    fontWeight: 'bold'
                  }} />
                
                <Area
                  type="monotone"
                  dataKey="value"
                  stroke="#5B7F2A"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#colorValue)" />
                
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Alerts & Activity */}
        <div className="space-y-6">
          {/* Alerts Panel */}
          <Card animate delay={0.5} noPadding>
            <div className="p-4 border-b border-sand-100 flex items-center justify-between bg-red-50/30">
              <h3 className="font-serif font-bold text-sand-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                Active Alerts
              </h3>
              <Badge variant="danger">{alerts.length}</Badge>
            </div>
            <div className="divide-y divide-sand-100">
              {alerts.map((alert) =>
              <div
                key={alert.id}
                className="p-4 hover:bg-sand-50 transition-colors cursor-pointer group">
                
                  <div className="flex items-start gap-3">
                    <div
                    className={`mt-0.5 w-2 h-2 rounded-full shrink-0 ${alert.type === 'danger' ? 'bg-danger' : alert.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'}`} />
                  
                    <div className="flex-1">
                      <p className="text-sm text-sand-900 font-medium group-hover:text-soil-700 transition-colors">
                        {alert.message}
                      </p>
                      <p className="text-xs text-sand-500 mt-1">{alert.time}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-sand-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              )}
            </div>
          </Card>

          {/* Live Activity Feed */}
          <Card animate delay={0.6}>
            <h3 className="font-serif font-bold text-sand-900 mb-4 flex items-center gap-2">
              <Activity className="w-4 h-4 text-sand-400" />
              Live Activity
            </h3>
            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-sand-200 before:to-transparent">
              {activities.map((activity, i) =>
              <div
                key={activity.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white bg-sand-300 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10"></div>
                  <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] p-3 rounded-lg border border-sand-100 bg-sand-50/50 shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-semibold text-soil-700">
                        {activity.user}
                      </span>
                      <span className="text-[10px] text-sand-500 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {activity.time}
                      </span>
                    </div>
                    <p className="text-sm text-sand-800">{activity.action}</p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>);

}