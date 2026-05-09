import React from 'react';
import { Badge } from '../ui/Badge';
import { motion } from 'framer-motion';
const batches = [
{
  id: 'B-2026-0452',
  recipe: 'EVOO Premium',
  line: 'Cold Press A',
  start: '06:00 AM',
  eta: '14:00 PM',
  yield: 15.2,
  status: 'In Progress',
  progress: 65
},
{
  id: 'B-2026-0453',
  recipe: 'Virgin Standard',
  line: 'Cold Press B',
  start: '08:30 AM',
  eta: '16:30 PM',
  yield: null,
  status: 'In Progress',
  progress: 30
},
{
  id: 'B-2026-0451',
  recipe: 'EVOO Premium',
  line: 'Cold Press A',
  start: 'Yesterday',
  eta: 'Completed',
  yield: 16.1,
  status: 'Completed',
  progress: 100
},
{
  id: 'B-2026-0454',
  recipe: 'Refined Base',
  line: 'Refining Line',
  start: '10:00 AM',
  eta: '18:00 PM',
  yield: null,
  status: 'Scheduled',
  progress: 0
}];

export function BatchTable() {
  return (
    <div className="bg-white rounded-xl border border-sand-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-sand-50 text-sand-500 border-b border-sand-200">
            <tr>
              <th className="px-6 py-4 font-medium">Batch ID</th>
              <th className="px-6 py-4 font-medium">Recipe</th>
              <th className="px-6 py-4 font-medium">Line</th>
              <th className="px-6 py-4 font-medium">Progress</th>
              <th className="px-6 py-4 font-medium">Yield %</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-100">
            {batches.map((batch, i) =>
            <motion.tr
              key={batch.id}
              initial={{
                opacity: 0,
                y: 10
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: i * 0.1
              }}
              className="hover:bg-sand-50/50 transition-colors cursor-pointer group">
              
                <td className="px-6 py-4 font-medium text-soil-700 group-hover:text-soil-900">
                  {batch.id}
                </td>
                <td className="px-6 py-4 text-sand-900">{batch.recipe}</td>
                <td className="px-6 py-4 text-sand-600">{batch.line}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-24 h-2 bg-sand-100 rounded-full overflow-hidden">
                      <div
                      className={`h-full rounded-full ${batch.progress === 100 ? 'bg-leaf-500' : 'bg-soil-500'}`}
                      style={{
                        width: `${batch.progress}%`
                      }}>
                    </div>
                    </div>
                    <span className="text-xs text-sand-500">
                      {batch.progress}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-sand-900">
                  {batch.yield ? `${batch.yield}%` : '-'}
                </td>
                <td className="px-6 py-4">
                  <Badge
                  variant={
                  batch.status === 'Completed' ?
                  'success' :
                  batch.status === 'In Progress' ?
                  'soil' :
                  'default'
                  }>
                  
                    {batch.status}
                  </Badge>
                </td>
              </motion.tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}