import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { BarChart3, Download, FileSpreadsheet, FileText } from 'lucide-react';
import { toast } from 'sonner';
const reports = [
{
  title: 'Production Yield Summary',
  desc: 'Daily/weekly yield percentages across all lines.',
  icon: BarChart3
},
{
  title: 'Inventory Valuation',
  desc: 'Current value of raw materials and finished goods.',
  icon: FileSpreadsheet
},
{
  title: 'Supplier Performance',
  desc: 'Quality and on-time delivery metrics per supplier.',
  icon: BarChart3
},
{
  title: 'QC Non-Conformance',
  desc: 'Log of all failed samples and corrective actions.',
  icon: FileText
}];

export function Reports() {
  const handleExport = (title: string) => {
    toast.success(`Exporting ${title}...`, {
      description: 'Your download will begin shortly.'
    });
  };
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <div className="mb-6">
        <h1 className="text-2xl font-serif font-bold text-sand-900">
          Reports & Analytics
        </h1>
        <p className="text-sand-500 text-sm mt-1">
          Generate and export system data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reports.map((report, i) =>
        <Card key={i} className="flex flex-col h-full">
            <div className="flex items-start gap-4 mb-4 flex-1">
              <div className="w-10 h-10 rounded-lg bg-soil-100 text-soil-600 flex items-center justify-center shrink-0">
                <report.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-sand-900">{report.title}</h3>
                <p className="text-sm text-sand-500 mt-1">{report.desc}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-sand-100 mt-auto">
              <select className="text-sm bg-sand-50 border border-sand-200 rounded-md px-2 py-1.5 outline-none focus:ring-1 focus:ring-soil-500 flex-1">
                <option>Last 7 Days</option>
                <option>This Month</option>
                <option>Last Month</option>
                <option>Year to Date</option>
              </select>
              <Button
              variant="outline"
              size="sm"
              leftIcon={<Download className="w-4 h-4" />}
              onClick={() => handleExport(report.title)}>
              
                Export PDF
              </Button>
            </div>
          </Card>
        )}
      </div>
    </div>);

}