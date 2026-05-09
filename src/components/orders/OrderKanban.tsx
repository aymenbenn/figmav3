import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MoreHorizontal, Clock, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';
const columns = [
{
  id: 'new',
  title: 'New Orders',
  color: 'bg-sand-100'
},
{
  id: 'confirmed',
  title: 'Confirmed',
  color: 'bg-blue-50'
},
{
  id: 'picking',
  title: 'Picking',
  color: 'bg-amber-50'
},
{
  id: 'dispatched',
  title: 'Dispatched',
  color: 'bg-soil-50'
}];

const orders = [
{
  id: 'ORD-1042',
  customer: 'Carrefour East Africa',
  value: 'KES 450,000',
  items: 3,
  status: 'new',
  priority: 'high'
},
{
  id: 'ORD-1043',
  customer: 'Naivas Supermarkets',
  value: 'KES 120,000',
  items: 1,
  status: 'new',
  priority: 'normal'
},
{
  id: 'ORD-1039',
  customer: 'Healthy U',
  value: 'KES 85,000',
  items: 4,
  status: 'confirmed',
  priority: 'normal'
},
{
  id: 'ORD-1040',
  customer: 'Chandarana Foodplus',
  value: 'KES 210,000',
  items: 2,
  status: 'picking',
  priority: 'high'
},
{
  id: 'ORD-1035',
  customer: 'Export: EU Distributor',
  value: '€ 12,500',
  items: 1,
  status: 'dispatched',
  priority: 'normal'
},
{
  id: 'ORD-1036',
  customer: 'Quickmart',
  value: 'KES 340,000',
  items: 5,
  status: 'dispatched',
  priority: 'normal'
}];

export function OrderKanban() {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar min-h-[600px]">
      {columns.map((col) =>
      <div
        key={col.id}
        className={`flex-shrink-0 w-80 rounded-xl ${col.color} border border-sand-200 flex flex-col`}>
        
          <div className="p-4 border-b border-sand-200/50 flex justify-between items-center">
            <h3 className="font-semibold text-sand-900">{col.title}</h3>
            <Badge variant="outline" className="bg-white">
              {orders.filter((o) => o.status === col.id).length}
            </Badge>
          </div>

          <div className="p-3 flex-1 overflow-y-auto space-y-3">
            {orders.
          filter((o) => o.status === col.id).
          map((order, i) =>
          <motion.div
            key={order.id}
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
            className="bg-white p-4 rounded-lg shadow-sm border border-sand-200 cursor-grab active:cursor-grabbing hover:border-soil-300 transition-colors">
            
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-sand-500">
                      {order.id}
                    </span>
                    <button className="text-sand-400 hover:text-sand-600">
                      <MoreHorizontal className="w-4 h-4" />
                    </button>
                  </div>

                  <h4 className="font-medium text-sand-900 mb-3">
                    {order.customer}
                  </h4>

                  <div className="flex items-center justify-between text-xs mb-3">
                    <span className="flex items-center gap-1 text-sand-600">
                      <DollarSign className="w-3 h-3" /> {order.value}
                    </span>
                    <span className="text-sand-500">{order.items} items</span>
                  </div>

                  <div className="flex items-center justify-between mt-3 pt-3 border-t border-sand-100">
                    {order.priority === 'high' ?
              <Badge variant="danger">Urgent</Badge> :

              <Badge variant="default">Standard</Badge>
              }
                    <span className="text-[10px] text-sand-400 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> 2h ago
                    </span>
                  </div>
                </motion.div>
          )}
          </div>
        </div>
      )}
    </div>);

}