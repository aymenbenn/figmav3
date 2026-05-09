import React, { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Tabs } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { LineStatus } from '../components/production/LineStatus';
import { BatchTable } from '../components/production/BatchTable';
import {
  Plus,
  Factory,
  Activity,
  PieChart,
  Calendar,
  FileText } from
'lucide-react';
import {
  PieChart as RechartsPie,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend } from
'recharts';
const downtimeData = [
{
  name: 'Cleaning',
  value: 45
},
{
  name: 'Maintenance',
  value: 25
},
{
  name: 'No Material',
  value: 20
},
{
  name: 'Faults',
  value: 10
}];

const COLORS = ['#D9A87A', '#B5651D', '#8FB339', '#B23A26'];
export function Production() {
  const [isNewBatchModalOpen, setIsNewBatchModalOpen] = useState(false);
  const overviewContent =
  <div className="space-y-6">
      {/* KPIs */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card
        animate
        delay={0.1}
        className="bg-soil-900 text-white border-none">
        
          <p className="text-soil-300 text-sm mb-1">Plant OEE</p>
          <p className="text-3xl font-bold">78.4%</p>
          <p className="text-xs mt-2 text-leaf-400">+2.1% from last week</p>
        </Card>
        <Card animate delay={0.2}>
          <p className="text-sand-500 text-sm mb-1">Active Batches</p>
          <p className="text-3xl font-bold text-sand-900">2</p>
          <p className="text-xs mt-2 text-sand-500">1 scheduled next</p>
        </Card>
        <Card animate delay={0.3}>
          <p className="text-sand-500 text-sm mb-1">Avg Yield (7d)</p>
          <p className="text-3xl font-bold text-sand-900">15.8%</p>
          <p className="text-xs mt-2 text-sand-500">Target: 16.0%</p>
        </Card>
        <Card animate delay={0.4}>
          <p className="text-sand-500 text-sm mb-1">Downtime (Today)</p>
          <p className="text-3xl font-bold text-danger">1h 45m</p>
          <p className="text-xs mt-2 text-sand-500">Mainly Decanter fault</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Statuses */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-serif font-bold text-lg text-sand-900 mb-2">
            Production Lines
          </h3>
          <LineStatus
          lineName="Cold Press Line A"
          status="Running"
          oee={82}
          currentBatch="B-2026-0452"
          delay={0.5} />
        
          <LineStatus
          lineName="Cold Press Line B"
          status="Down"
          oee={65}
          currentBatch="B-2026-0453"
          delay={0.6} />
        
          <LineStatus
          lineName="Refining Line"
          status="Idle"
          oee={91}
          currentBatch={null}
          delay={0.7} />
        
        </div>

        {/* Downtime Reasons */}
        <div>
          <h3 className="font-serif font-bold text-lg text-sand-900 mb-2">
            Downtime Breakdown
          </h3>
          <Card
          animate
          delay={0.8}
          className="h-[calc(100%-2.5rem)] flex flex-col items-center justify-center">
          
            <div className="w-full h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RechartsPie>
                  <Pie
                  data={downtimeData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value">
                  
                    {downtimeData.map((entry, index) =>
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]} />

                  )}
                  </Pie>
                  <Tooltip
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                  }} />
                
                  <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="circle" />
                
                </RechartsPie>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>
      </div>
    </div>;

  const tabs = [
  {
    id: 'overview',
    label: 'Overview',
    icon: <Activity className="w-4 h-4" />,
    content: overviewContent
  },
  {
    id: 'batches',
    label: 'Batches',
    icon: <Factory className="w-4 h-4" />,
    content: <BatchTable />
  },
  {
    id: 'recipes',
    label: 'Recipes',
    icon: <FileText className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Recipe management interface placeholder
        </div>

  },
  {
    id: 'schedule',
    label: 'Schedule',
    icon: <Calendar className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Gantt chart schedule placeholder
        </div>

  },
  {
    id: 'yield',
    label: 'Yield Analytics',
    icon: <PieChart className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Yield analytics charts placeholder
        </div>

  }];

  return (
    <div className="max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900 flex items-center gap-3">
            <img
              src="/processing.png"
              alt="Processing"
              className="w-8 h-8 object-contain opacity-80" />
            
            Production Processing
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage lines, batches, and factory throughput.
          </p>
        </div>
        <Button
          leftIcon={<Plus className="w-4 h-4" />}
          onClick={() => setIsNewBatchModalOpen(true)}>
          
          New Batch
        </Button>
      </div>

      <Tabs tabs={tabs} />
    </div>);

}