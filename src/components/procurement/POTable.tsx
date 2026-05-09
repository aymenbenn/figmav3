import React from 'react';
import { Badge } from '../ui/Badge';
const pos = [
{
  id: 'PO-2026-089',
  supplier: 'Kakuzi Co-op',
  items: 'Hass Avocados (12t)',
  total: 'KES 1,440,000',
  date: 'May 8, 2026',
  status: 'Received'
},
{
  id: 'PO-2026-090',
  supplier: "Murang'a Growers",
  items: 'Fuerte Avocados (8t)',
  total: 'KES 880,000',
  date: 'May 9, 2026',
  status: 'Confirmed'
},
{
  id: 'PO-2026-091',
  supplier: 'Nyeri Avocado Union',
  items: 'Mixed Avocados (15t)',
  total: 'KES 1,650,000',
  date: 'May 10, 2026',
  status: 'Sent'
},
{
  id: 'PO-2026-092',
  supplier: 'AgriPack Ltd',
  items: 'Glass Bottles 500ml (10k)',
  total: 'KES 450,000',
  date: 'May 12, 2026',
  status: 'Draft'
},
{
  id: 'PO-2026-088',
  supplier: 'Rift Valley Farms',
  items: 'Hass Avocados (5t)',
  total: 'KES 600,000',
  date: 'May 5, 2026',
  status: 'Partial'
}];

export function POTable() {
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Received':
        return <Badge variant="success">Received</Badge>;
      case 'Confirmed':
        return <Badge variant="leaf">Confirmed</Badge>;
      case 'Sent':
        return <Badge variant="warning">Sent</Badge>;
      case 'Partial':
        return <Badge variant="soil">Partial</Badge>;
      default:
        return <Badge variant="default">Draft</Badge>;
    }
  };
  return (
    <div className="bg-white rounded-xl border border-sand-200 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-sand-50 text-sand-500 border-b border-sand-200">
            <tr>
              <th className="px-6 py-4 font-medium">PO Number</th>
              <th className="px-6 py-4 font-medium">Supplier</th>
              <th className="px-6 py-4 font-medium">Items</th>
              <th className="px-6 py-4 font-medium">Total Value</th>
              <th className="px-6 py-4 font-medium">Expected Date</th>
              <th className="px-6 py-4 font-medium">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-100">
            {pos.map((po) =>
            <tr
              key={po.id}
              className="hover:bg-sand-50/50 transition-colors cursor-pointer group">
              
                <td className="px-6 py-4 font-medium text-soil-700 group-hover:text-soil-900">
                  {po.id}
                </td>
                <td className="px-6 py-4 font-medium text-sand-900">
                  {po.supplier}
                </td>
                <td className="px-6 py-4 text-sand-600">{po.items}</td>
                <td className="px-6 py-4 text-sand-900">{po.total}</td>
                <td className="px-6 py-4 text-sand-600">{po.date}</td>
                <td className="px-6 py-4">{getStatusBadge(po.status)}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>);

}