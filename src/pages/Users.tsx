import React from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Plus, Search, MoreVertical, Shield } from 'lucide-react';
const users = [
{
  id: 1,
  name: 'John Doe',
  email: 'j.doe@sunripe.co.ke',
  role: 'Plant Manager',
  status: 'Active',
  lastActive: '2 mins ago'
},
{
  id: 2,
  name: 'Sarah Kimani',
  email: 's.kimani@sunripe.co.ke',
  role: 'QC Lead',
  status: 'Active',
  lastActive: '1 hr ago'
},
{
  id: 3,
  name: 'Michael T.',
  email: 'm.t@sunripe.co.ke',
  role: 'Maintenance',
  status: 'Active',
  lastActive: '3 hrs ago'
},
{
  id: 4,
  name: 'David Ochieng',
  email: 'd.ochieng@sunripe.co.ke',
  role: 'Operator',
  status: 'Offline',
  lastActive: '1 day ago'
},
{
  id: 5,
  name: 'Grace W.',
  email: 'g.w@sunripe.co.ke',
  role: 'Procurement',
  status: 'Active',
  lastActive: '5 mins ago'
}];

export function Users() {
  return (
    <div className="max-w-[1200px] mx-auto pb-12">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-sand-900">
            User Management
          </h1>
          <p className="text-sand-500 text-sm mt-1">
            Manage system access, roles, and permissions.
          </p>
        </div>
        <Button leftIcon={<Plus className="w-4 h-4" />}>Invite User</Button>
      </div>

      <Card noPadding>
        <div className="p-4 border-b border-sand-200 flex justify-between items-center bg-sand-50">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-sand-400" />
            <input
              type="text"
              placeholder="Search users..."
              className="pl-9 pr-4 py-2 bg-white border border-sand-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-soil-500 w-64" />
            
          </div>
          <Button variant="outline" leftIcon={<Shield className="w-4 h-4" />}>
            Role Matrix
          </Button>
        </div>

        <table className="w-full text-sm text-left">
          <thead className="bg-white text-sand-500 border-b border-sand-200">
            <tr>
              <th className="px-6 py-4 font-medium">User</th>
              <th className="px-6 py-4 font-medium">Role</th>
              <th className="px-6 py-4 font-medium">Status</th>
              <th className="px-6 py-4 font-medium">Last Active</th>
              <th className="px-6 py-4 font-medium text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-sand-100 bg-white">
            {users.map((user) =>
            <tr key={user.id} className="hover:bg-sand-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-soil-100 text-soil-700 flex items-center justify-center font-bold text-xs">
                      {user.name.
                    split(' ').
                    map((n) => n[0]).
                    join('')}
                    </div>
                    <div>
                      <p className="font-medium text-sand-900">{user.name}</p>
                      <p className="text-xs text-sand-500">{user.email}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-sand-600">{user.role}</td>
                <td className="px-6 py-4">
                  <Badge
                  variant={user.status === 'Active' ? 'success' : 'default'}>
                  
                    {user.status}
                  </Badge>
                </td>
                <td className="px-6 py-4 text-sand-500">{user.lastActive}</td>
                <td className="px-6 py-4 text-right">
                  <button className="text-sand-400 hover:text-sand-600">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Card>
    </div>);

}