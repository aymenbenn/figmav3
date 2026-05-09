import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Truck, ArrowRight, CheckCircle2 } from 'lucide-react';
const queue = [
{
  id: 'TRK-001',
  plate: 'KCD 123A',
  type: 'Delivery (Avocados)',
  supplier: 'Kakuzi Co-op',
  status: 'At Weighbridge',
  time: '10 mins'
},
{
  id: 'TRK-002',
  plate: 'KCE 456B',
  type: 'Dispatch (Oil)',
  customer: 'Carrefour',
  status: 'Loading Dock 2',
  time: '45 mins'
},
{
  id: 'TRK-003',
  plate: 'KCF 789C',
  type: 'Delivery (Packaging)',
  supplier: 'AgriPack',
  status: 'Waiting Outside',
  time: '5 mins'
}];

export function Logistics() {
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            Logistics & Gate Operations
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage incoming/outgoing vehicles and weighbridge.
          </p>
        </div>
        <Button leftIcon={<Truck className="w-4 h-4" />}>
          Log Vehicle Arrival
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-serif font-bold text-lg text-sand-900">
            Live Gate Queue
          </h3>
          {queue.map((q) =>
          <Card
            key={q.id}
            className="flex items-center justify-between hover:border-soil-300 transition-colors cursor-pointer">
            
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-sand-100 flex items-center justify-center text-sand-500">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sand-900">
                    {q.plate}{' '}
                    <span className="text-sand-400 font-normal text-sm ml-2">
                      {q.id}
                    </span>
                  </h4>
                  <p className="text-sm text-sand-600">
                    {q.type} • {q.supplier || q.customer}
                  </p>
                </div>
              </div>
              <div className="text-right flex flex-col items-end gap-2">
                <Badge
                variant={q.status.includes('Waiting') ? 'warning' : 'soil'}>
                
                  {q.status}
                </Badge>
                <span className="text-xs text-sand-500">
                  Wait time: {q.time}
                </span>
              </div>
            </Card>
          )}
        </div>

        <div>
          <h3 className="font-serif font-bold text-lg text-sand-900 mb-4">
            Quick Actions
          </h3>
          <Card className="space-y-3 bg-sand-50">
            <Button
              variant="outline"
              className="w-full justify-start bg-white"
              leftIcon={<ArrowRight className="w-4 h-4" />}>
              
              Process Weighbridge Ticket
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-white"
              leftIcon={<CheckCircle2 className="w-4 h-4" />}>
              
              Clear Vehicle for Exit
            </Button>
            <Button
              variant="outline"
              className="w-full justify-start bg-white"
              leftIcon={<Truck className="w-4 h-4" />}>
              
              Assign Loading Dock
            </Button>
          </Card>
        </div>
      </div>
    </div>);

}