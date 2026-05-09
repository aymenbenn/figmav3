import React from 'react';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { ClipboardCheck, FileText, Plus } from 'lucide-react';
const samples = [
{
  id: 'SMP-892',
  source: 'Tank T-01',
  type: 'Finished Product',
  time: '09:30 AM',
  status: 'Passed'
},
{
  id: 'SMP-893',
  source: 'Batch B-2026-0452',
  type: 'In-Process',
  time: '10:15 AM',
  status: 'Pending Test'
},
{
  id: 'SMP-894',
  source: 'PO-2026-089 (Kakuzi)',
  type: 'Raw Material',
  time: '11:00 AM',
  status: 'Testing'
}];

export function QC() {
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            Quality Control
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage samples, tests, and Certificates of Analysis.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Log New Sample</Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-serif font-bold text-lg text-sand-900">
              Sample Queue
            </h3>
            <Badge variant="outline">3 Active</Badge>
          </div>
          <div className="space-y-3">
            {samples.map((s) =>
            <div
              key={s.id}
              className="p-3 border border-sand-200 rounded-lg flex justify-between items-center hover:bg-sand-50 cursor-pointer">
              
                <div>
                  <p className="font-medium text-sand-900">
                    {s.id}{' '}
                    <span className="text-sand-400 font-normal text-xs ml-2">
                      {s.time}
                    </span>
                  </p>
                  <p className="text-sm text-sand-600">
                    {s.source} • {s.type}
                  </p>
                </div>
                <Badge
                variant={
                s.status === 'Passed' ?
                'success' :
                s.status === 'Testing' ?
                'warning' :
                'default'
                }>
                
                  {s.status}
                </Badge>
              </div>
            )}
          </div>
        </Card>

        <Card className="bg-leaf-50 border-leaf-100 flex flex-col items-center justify-center text-center p-8">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-leaf-600 mb-4 shadow-sm">
            <FileText className="w-8 h-8" />
          </div>
          <h3 className="font-serif font-bold text-xl text-sand-900 mb-2">
            Generate CoA
          </h3>
          <p className="text-sand-600 text-sm mb-6 max-w-sm">
            Create a Certificate of Analysis for dispatched orders based on
            recent passed samples.
          </p>
          <Button
            variant="secondary"
            leftIcon={<ClipboardCheck className="w-4 h-4" />}>
            
            Start Generator
          </Button>
        </Card>
      </div>
    </div>);

}