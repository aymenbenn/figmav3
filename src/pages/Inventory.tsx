import React from 'react';
import { Tabs } from '../components/ui/Tabs';
import { StockTable } from '../components/inventory/StockTable';
import { SupplyChainNetwork } from '../components/inventory/SupplyChainNetwork';
import {
  Package,
  Network,
  Map,
  ArrowLeftRight,
  AlertTriangle } from
'lucide-react';
export function Inventory() {
  const tabs = [
  {
    id: 'stock',
    label: 'Stock Levels',
    icon: <Package className="w-4 h-4" />,
    content: <StockTable />
  },
  {
    id: 'supply-chain',
    label: 'Supply Chain',
    icon: <Network className="w-4 h-4" />,
    content: <SupplyChainNetwork />
  },
  {
    id: 'map',
    label: 'Warehouse Map',
    icon: <Map className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Warehouse zone map placeholder
        </div>

  },
  {
    id: 'movements',
    label: 'Movements',
    icon: <ArrowLeftRight className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Stock movements log placeholder
        </div>

  },
  {
    id: 'expiry',
    label: 'Lots & Expiry',
    icon: <AlertTriangle className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          FEFO expiry tracking placeholder
        </div>

  }];

  return (
    <div className="max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900 flex items-center gap-3">
            <img
              src="/warehouse.png"
              alt="Warehouse"
              className="w-8 h-8 object-contain opacity-80" />
            
            Inventory & Warehouse
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Monitor stock levels, warehouse zones, and supply chain flow.
          </p>
        </div>
      </div>

      {/* Critical Alert Banner */}
      <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-danger shrink-0 mt-0.5" />
        <div>
          <h4 className="text-sm font-bold text-red-800">
            Critical Stock Alert
          </h4>
          <p className="text-sm text-red-700 mt-1">
            Raw Hass Avocados (kg) and EVOO-1L-PET are below minimum thresholds.
            Immediate reorder required to prevent production delays.
          </p>
        </div>
      </div>

      <Tabs tabs={tabs} />
    </div>);

}