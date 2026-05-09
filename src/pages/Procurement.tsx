import React from 'react';
import { Tabs } from '../components/ui/Tabs';
import { Button } from '../components/ui/Button';
import { POTable } from '../components/procurement/POTable';
import { SupplierCard } from '../components/procurement/SupplierCard';
import {
  Plus,
  ShoppingCart,
  Users,
  ClipboardList,
  PackageCheck,
  FileSignature } from
'lucide-react';
const suppliers = [
{
  id: 1,
  name: 'Kakuzi Co-op',
  type: 'Large Scale Farm',
  score: 94,
  onTime: 98,
  quality: 95,
  lastDelivery: 'Today',
  status: 'Active' as const
},
{
  id: 2,
  name: "Murang'a Growers",
  type: 'Cooperative',
  score: 88,
  onTime: 85,
  quality: 92,
  lastDelivery: 'Yesterday',
  status: 'Active' as const
},
{
  id: 3,
  name: 'Nyeri Avocado Union',
  type: 'Cooperative',
  score: 91,
  onTime: 90,
  quality: 94,
  lastDelivery: '3 days ago',
  status: 'Active' as const
},
{
  id: 4,
  name: 'Rift Valley Farms',
  type: 'Medium Farm',
  score: 76,
  onTime: 70,
  quality: 82,
  lastDelivery: '1 week ago',
  status: 'Under Review' as const
},
{
  id: 5,
  name: 'AgriPack Ltd',
  type: 'Packaging Supplier',
  score: 98,
  onTime: 100,
  quality: 99,
  lastDelivery: '2 weeks ago',
  status: 'Active' as const
}];

export function Procurement() {
  const suppliersContent =
  <div>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-serif font-bold text-lg text-sand-900">
          Approved Suppliers
        </h3>
        <Button variant="outline" leftIcon={<Plus className="w-4 h-4" />}>
          Add Supplier
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {suppliers.map((s, i) =>
      <SupplierCard key={s.id} {...s} delay={i * 0.1} />
      )}
      </div>
    </div>;

  const tabs = [
  {
    id: 'pos',
    label: 'Purchase Orders',
    icon: <ShoppingCart className="w-4 h-4" />,
    content: <POTable />
  },
  {
    id: 'suppliers',
    label: 'Suppliers',
    icon: <Users className="w-4 h-4" />,
    content: suppliersContent
  },
  {
    id: 'requisitions',
    label: 'Requisitions',
    icon: <ClipboardList className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Requisitions workflow placeholder
        </div>

  },
  {
    id: 'grn',
    label: 'Goods Receipt',
    icon: <PackageCheck className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          GRN scanning and acceptance placeholder
        </div>

  },
  {
    id: 'contracts',
    label: 'Contracts',
    icon: <FileSignature className="w-4 h-4" />,
    content:
    <div className="p-8 text-center text-sand-500 bg-white rounded-xl border border-sand-200">
          Supplier contracts placeholder
        </div>

  }];

  return (
    <div className="max-w-[1600px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            Procurement Processing
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage suppliers, purchase orders, and goods receipt.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>
          New Purchase Order
        </Button>
      </div>

      <Tabs tabs={tabs} />
    </div>);

}