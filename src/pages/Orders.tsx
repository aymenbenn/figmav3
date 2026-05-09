import React from 'react';
import { Tabs } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { OrderKanban } from '../components/orders/OrderKanban';
import { List, Kanban, Users, Tag, Plus } from 'lucide-react';
export function Orders() {
  const tabs = [
  {
    id: 'pipeline',
    label: 'Pipeline (Kanban)',
    icon: <Kanban className="w-4 h-4" />,
    content: <OrderKanban />
  },
  {
    id: 'all',
    label: 'All Orders',
    icon: <List className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          List view placeholder
        </div>

  },
  {
    id: 'customers',
    label: 'Customers',
    icon: <Users className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Customer directory placeholder
        </div>

  },
  {
    id: 'pricing',
    label: 'Pricing & Discounts',
    icon: <Tag className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Pricing rules placeholder
        </div>

  }];

  return (
    <div className="max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900 flex items-center gap-3">
            <img
              src="/transit.png"
              alt="Transit"
              className="w-8 h-8 object-contain opacity-80" />
            
            Sales & Order Processing
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage customer orders, fulfillment pipeline, and sales data.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>New Order</Button>
      </div>

      <Tabs tabs={tabs} />
    </div>);

}