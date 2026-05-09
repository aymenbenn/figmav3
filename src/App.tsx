import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppShell } from './components/layout/AppShell';
// Lazy load pages (simulated with standard imports for now)
import { Dashboard } from './pages/Dashboard';
import { Production } from './pages/Production';
import { Procurement } from './pages/Procurement';
import { Inventory } from './pages/Inventory';
import { Orders } from './pages/Orders';
import { Logistics } from './pages/Logistics';
import { QC } from './pages/QC';
import { Maintenance } from './pages/Maintenance';
import { Reports } from './pages/Reports';
import { Users } from './pages/Users';
import { Settings } from './pages/Settings';
export function App() {
  return (
    <BrowserRouter>
      <AppShell>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/production" element={<Production />} />
          <Route path="/procurement" element={<Procurement />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />

          <Route path="/logistics" element={<Logistics />} />
          <Route path="/qc" element={<QC />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppShell>
    </BrowserRouter>);

}