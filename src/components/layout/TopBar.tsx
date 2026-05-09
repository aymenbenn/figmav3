import React from 'react';
import { Search, Bell, MapPin, Menu } from 'lucide-react';
export function TopBar() {
  return (
    <header className="h-16 bg-white border-b border-sand-200 flex items-center justify-between px-4 lg:px-8 sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-4">
        <button className="md:hidden p-2 text-sand-500 hover:bg-sand-100 rounded-lg">
          <Menu className="w-5 h-5" />
        </button>

        <div className="hidden md:flex items-center gap-2 text-sm font-medium text-sand-600 bg-sand-50 px-3 py-1.5 rounded-lg border border-sand-200">
          <MapPin className="w-4 h-4 text-soil-500" />
          <span>Nairobi Processing Plant</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sand-400" />
          <input
            type="text"
            placeholder="Search orders, batches, tanks..."
            className="pl-9 pr-4 py-2 bg-sand-50 border border-sand-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-soil-500 focus:bg-white w-64 transition-all" />
          
        </div>

        <button className="relative p-2 text-sand-500 hover:bg-sand-100 rounded-full transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full border-2 border-white"></span>
        </button>
      </div>
    </header>);

}