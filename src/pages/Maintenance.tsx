import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Wrench, Calendar, AlertTriangle } from 'lucide-react';
const workOrders = [
{
  id: 'WO-102',
  asset: 'Decanter A',
  issue: 'Vibration alert',
  priority: 'High',
  status: 'In Progress'
},
{
  id: 'WO-103',
  asset: 'Tank T-06',
  issue: 'Scheduled Cleaning',
  priority: 'Normal',
  status: 'Open'
},
{
  id: 'WO-101',
  asset: 'Boiler 1',
  issue: 'Pressure drop',
  priority: 'Critical',
  status: 'Done'
}];

export function Maintenance() {
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            Maintenance & Facility
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Track work orders, assets, and preventive maintenance.
          </p>
        </div>
        <Button leftIcon={<Wrench className="w-4 h-4" />}>
          Create Work Order
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <Card className="bg-red-50 border-red-100">
          <p className="text-red-700 text-sm font-medium mb-1 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4" /> Critical Issues
          </p>
          <p className="text-3xl font-bold text-danger">1</p>
        </Card>
        <Card>
          <p className="text-sand-500 text-sm font-medium mb-1">
            Open Work Orders
          </p>
          <p className="text-3xl font-bold text-sand-900">8</p>
        </Card>
        <Card>
          <p className="text-sand-500 text-sm font-medium mb-1 flex items-center gap-2">
            <Calendar className="w-4 h-4" /> Next PM Due
          </p>
          <p className="text-xl font-bold text-sand-900 mt-2">Tomorrow</p>
          <p className="text-xs text-sand-500">Polisher B Filter Change</p>
        </Card>
      </div>

      <Card>
        <h3 className="font-serif font-bold text-lg text-sand-900 mb-4">
          Recent Work Orders
        </h3>
        <div className="space-y-3">
          {workOrders.map((wo) =>
          <div
            key={wo.id}
            className="p-4 border border-sand-200 rounded-lg flex justify-between items-center hover:border-soil-300 transition-colors">
            
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <span className="font-bold text-sand-900">{wo.asset}</span>
                  <Badge
                  variant={
                  wo.priority === 'Critical' ?
                  'danger' :
                  wo.priority === 'High' ?
                  'warning' :
                  'default'
                  }>
                  
                    {wo.priority}
                  </Badge>
                </div>
                <p className="text-sm text-sand-600">
                  {wo.id} • {wo.issue}
                </p>
              </div>
              <Badge
              variant={
              wo.status === 'Done' ?
              'success' :
              wo.status === 'In Progress' ?
              'soil' :
              'outline'
              }>
              
                {wo.status}
              </Badge>
            </div>
          )}
        </div>
      </Card>
    </div>);

}