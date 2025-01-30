import React from 'react';
import { NavLink } from 'react-router-dom';
import { Package, Cat as Categories, Users, Plus } from 'lucide-react';

const navItems = [
  { to: '/add', label: 'Add New', icon: Plus },
  { to: '/products', label: 'All Products', icon: Package },
  { to: '/categories', label: 'All Categories', icon: Categories },
  { to: '/users', label: 'Available Users', icon: Users },
];

export const Sidebar = () => {
  return (
    <div className="w-64 bg-white h-full border-r">
      <div className="p-4">
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-pink-50 text-pink-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};