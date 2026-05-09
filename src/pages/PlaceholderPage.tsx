import React from 'react';
import { Card } from '../components/ui/Card';
import * as Icons from 'lucide-react';
export function PlaceholderPage({
  title,
  icon



}: {title: string;icon: string;}) {
  const Icon = (Icons as any)[icon] || Icons.FileText;
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <Card className="text-center py-16" animate>
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-sand-100 text-soil-500 mb-6">
          <Icon className="w-8 h-8" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-sand-900 mb-4">
          {title}
        </h1>
        <p className="text-sand-500 max-w-md mx-auto">
          This module is part of the broader Sunripe Farms system. It is
          currently a placeholder in this prototype.
        </p>
      </Card>
    </div>);

}