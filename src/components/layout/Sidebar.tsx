import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Factory,
  ShoppingCart,
  Package,
  Truck,
  Users,
  ClipboardCheck,
  Wrench,
  BarChart3,
  Settings,
  Leaf } from
'lucide-react';
const navItems = [
{
  path: '/',
  label: 'Dashboard',
  icon: LayoutDashboard
},
{
  path: '/production',
  label: 'Production',
  icon: Factory
},
{
  path: '/procurement',
  label: 'Procurement',
  icon: ShoppingCart
},
{
  path: '/inventory',
  label: 'Inventory',
  icon: Package
},
{
  path: '/orders',
  label: 'Sales & Orders',
  icon: Truck
},
{
  path: '/logistics',
  label: 'Logistics',
  icon: Truck
},
{
  path: '/qc',
  label: 'Quality Control',
  icon: ClipboardCheck
},
{
  path: '/maintenance',
  label: 'Maintenance',
  icon: Wrench
},
{
  path: '/reports',
  label: 'Reports',
  icon: BarChart3
},
{
  path: '/users',
  label: 'Users',
  icon: Users
},
{
  path: '/settings',
  label: 'Settings',
  icon: Settings
}];

export function Sidebar() {
  return (
    <aside className="w-64 bg-soil-900 text-sand-50 flex flex-col h-screen sticky top-0 border-r border-soil-700 shrink-0 hidden md:flex">
      <div className="p-6 flex items-center gap-3 border-b border-soil-700/50">
        <div className="bg-leaf-500 p-2 rounded-lg">
          <Leaf className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="font-serif font-bold text-xl text-white leading-tight">
            Sunripe Farms
          </h1>
          <p className="text-xs text-soil-300 uppercase tracking-wider">
            Admin Panel
          </p>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1 custom-scrollbar">
        {navItems.map((item) =>
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${isActive ? 'bg-soil-700 text-white shadow-inner' : 'text-soil-100 hover:bg-soil-800 hover:text-white'}`
          }>
          
            <item.icon className="w-5 h-5 opacity-80" />
            {item.label}
          </NavLink>
        )}
      </nav>

      <div className="p-4 border-t border-soil-700/50">
        <div className="bg-soil-800 rounded-lg p-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-leaf-700 flex items-center justify-center text-white font-bold text-sm">
            JD
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">John Doe</p>
            <p className="text-xs text-soil-300 truncate">Plant Manager</p>
          </div>
        </div>
      </div>
    </aside>);

}