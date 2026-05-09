import React from 'react';
import { Badge } from '../ui/Badge';
const stockData = [
{
  sku: 'EVOO-500ML-GLS',
  name: 'Extra Virgin 500ml Glass',
  qty: 4500,
  min: 2000,
  max: 10000,
  class: 'A',
  daysCover: 14
},
{
  sku: 'EVOO-1L-PET',
  name: 'Extra Virgin 1L PET',
  qty: 1200,
  min: 1500,
  max: 8000,
  class: 'A',
  daysCover: 4
},
{
  sku: 'VIR-5L-JERRY',
  name: 'Virgin 5L Jerrycan',
  qty: 850,
  min: 500,
  max: 3000,
  class: 'B',
  daysCover: 21
},
{
  sku: 'POM-20L-DRUM',
  name: 'Pomace 20L Drum',
  qty: 120,
  min: 50,
  max: 500,
  class: 'C',
  daysCover: 45
},
{
  sku: 'RAW-HASS-KG',
  name: 'Raw Hass Avocados (kg)',
  qty: 12500,
  min: 15000,
  max: 50000,
  class: 'A',
  daysCover: 2
},
{
  sku: 'PKG-GLS-500',
  name: 'Empty Glass Bottles 500ml',
  qty: 25000,
  min: 10000,
  max: 100000,
  class: 'B',
  daysCover: 30
}];

export function StockTable() {
  return (
    <div className="bg-white rounded-xl border border-sand-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-sand-50 text-sand-500 border-b border-sand-200">
            <tr>
              <th className="px-6 py-4 font-medium">SKU / Item</th>
              <th className="px-6 py-4 font-medium">Class</th>
              <th className="px-6 py-4 font-medium">Current Qty</th>
              <th className="px-6 py-4 font-medium w-64">
                Stock Level Indicator
              </th>
              <th className="px-6 py-4 font-medium">Days Cover</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-100">
            {stockData.map((item) => {
              const fillPercent = Math.min(100, item.qty / item.max * 100);
              const minPercent = item.min / item.max * 100;
              let status = 'Healthy';
              let statusColor: any = 'success';
              let barColor = 'bg-leaf-500';
              if (item.qty < item.min) {
                status = 'Critical';
                statusColor = 'danger';
                barColor = 'bg-danger';
              } else if (item.qty < item.min * 1.5) {
                status = 'Reorder Soon';
                statusColor = 'warning';
                barColor = 'bg-amber-500';
              } else if (item.qty > item.max * 0.9) {
                status = 'Overstock';
                statusColor = 'default';
                barColor = 'bg-blue-500';
              }
              return (
                <tr
                  key={item.sku}
                  className="hover:bg-sand-50/50 transition-colors cursor-pointer group">
                  
                  <td className="px-6 py-4">
                    <p className="font-medium text-sand-900">{item.sku}</p>
                    <p className="text-xs text-sand-500">{item.name}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="w-6 h-6 rounded bg-sand-100 flex items-center justify-center text-xs font-bold text-sand-700">
                      {item.class}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-medium text-sand-900">
                    {item.qty.toLocaleString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="relative w-full h-2 bg-sand-100 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full rounded-full ${barColor}`}
                        style={{
                          width: `${fillPercent}%`
                        }}>
                      </div>
                      {/* Min Threshold Marker */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-sand-900 z-10"
                        style={{
                          left: `${minPercent}%`
                        }}
                        title={`Min: ${item.min}`}>
                      </div>
                    </div>
                    <div className="flex justify-between text-[10px] text-sand-400 mt-1">
                      <span>0</span>
                      <span>{item.max.toLocaleString()}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={
                      item.daysCover < 7 ?
                      'text-danger font-bold' :
                      'text-sand-600'
                      }>
                      
                      {item.daysCover} days
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <Badge variant={statusColor}>{status}</Badge>
                  </td>
                </tr>);

            })}
          </tbody>
        </table>
      </div>
    </div>);

}