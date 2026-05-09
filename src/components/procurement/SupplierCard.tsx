import React from 'react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { Star, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
interface SupplierProps {
  name: string;
  type: string;
  score: number;
  onTime: number;
  quality: number;
  lastDelivery: string;
  status: 'Active' | 'Under Review' | 'Suspended';
  delay?: number;
}
export function SupplierCard({
  name,
  type,
  score,
  onTime,
  quality,
  lastDelivery,
  status,
  delay = 0
}: SupplierProps) {
  return (
    <Card
      animate
      delay={delay}
      className="hover:shadow-md transition-shadow cursor-pointer group">
      
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-soil-100 flex items-center justify-center text-soil-700 font-serif font-bold text-xl border border-soil-200">
            {name.charAt(0)}
          </div>
          <div>
            <h3 className="font-bold text-sand-900 group-hover:text-soil-700 transition-colors">
              {name}
            </h3>
            <p className="text-xs text-sand-500">{type}</p>
          </div>
        </div>
        <Badge
          variant={
          status === 'Active' ?
          'success' :
          status === 'Under Review' ?
          'warning' :
          'danger'
          }>
          
          {status}
        </Badge>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-sand-50 rounded-lg p-2 text-center">
          <p className="text-[10px] text-sand-500 uppercase flex items-center justify-center gap-1 mb-1">
            <Star className="w-3 h-3 text-amber-500" /> Score
          </p>
          <p className="font-bold text-sand-900">{score}/100</p>
        </div>
        <div className="bg-sand-50 rounded-lg p-2 text-center">
          <p className="text-[10px] text-sand-500 uppercase flex items-center justify-center gap-1 mb-1">
            <Clock className="w-3 h-3 text-blue-500" /> On-Time
          </p>
          <p className="font-bold text-sand-900">{onTime}%</p>
        </div>
        <div className="bg-sand-50 rounded-lg p-2 text-center">
          <p className="text-[10px] text-sand-500 uppercase flex items-center justify-center gap-1 mb-1">
            <ShieldCheck className="w-3 h-3 text-leaf-500" /> Quality
          </p>
          <p className="font-bold text-sand-900">{quality}%</p>
        </div>
      </div>

      <div className="flex items-center justify-between text-xs text-sand-500 border-t border-sand-100 pt-3">
        <span>Last Delivery: {lastDelivery}</span>
        <span className="flex items-center gap-1 text-soil-600 font-medium">
          View Profile &rarr;
        </span>
      </div>
    </Card>);

}