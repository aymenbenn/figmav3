import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Settings as SettingsIcon, Save } from 'lucide-react';
import { toast } from 'sonner';
export function Settings() {
  const handleSave = () => {
    toast.success('Settings saved successfully');
  };
  return (
    <div className="max-w-[800px] mx-auto pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-serif font-bold text-sand-900">
          System Settings
        </h1>
        <p className="text-sand-500 text-sm mt-1">
          Configure plant preferences and integrations.
        </p>
      </div>

      <Card className="mb-6">
        <h3 className="font-serif font-bold text-lg text-sand-900 mb-4 border-b border-sand-100 pb-2">
          Plant Information
        </h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-sand-700 mb-1">
              Plant Name
            </label>
            <input
              type="text"
              defaultValue="Nairobi Processing Plant"
              className="w-full px-3 py-2 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-soil-500" />
            
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">
                Volume Unit
              </label>
              <select className="w-full px-3 py-2 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-soil-500">
                <option>Liters (L)</option>
                <option>Gallons (gal)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-sand-700 mb-1">
                Mass Unit
              </label>
              <select className="w-full px-3 py-2 border border-sand-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-soil-500">
                <option>Kilograms (kg)</option>
                <option>Tonnes (t)</option>
              </select>
            </div>
          </div>
        </div>
      </Card>

      <Card className="mb-6">
        <h3 className="font-serif font-bold text-lg text-sand-900 mb-4 border-b border-sand-100 pb-2">
          Integrations
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-3 border border-sand-200 rounded-lg">
            <div>
              <p className="font-medium text-sand-900">ERP System (SAP)</p>
              <p className="text-xs text-sand-500">
                Sync financial and PO data
              </p>
            </div>
            <Button variant="outline" size="sm">
              Connect
            </Button>
          </div>
          <div className="flex items-center justify-between p-3 border border-sand-200 rounded-lg bg-leaf-50/50">
            <div>
              <p className="font-medium text-sand-900">IoT Sensors Gateway</p>
              <p className="text-xs text-sand-500">
                Connected (Last sync: 2 mins ago)
              </p>
            </div>
            <Button variant="ghost" size="sm" className="text-leaf-700">
              Configure
            </Button>
          </div>
        </div>
      </Card>

      <div className="flex justify-end">
        <Button leftIcon={<Save className="w-4 h-4" />} onClick={handleSave}>
          Save Changes
        </Button>
      </div>
    </div>);

}