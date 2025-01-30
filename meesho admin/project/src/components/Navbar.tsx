import React from 'react';
import { LogOut, ShoppingBag } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

export const Navbar = () => {
  const logout = useAuthStore((state) => state.logout);

  return (
    <nav className="bg-pink-600 text-white px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <ShoppingBag size={24} />
        <span className="text-xl font-bold">Meesho Admin</span>
      </div>
      <button
        onClick={logout}
        className="flex items-center space-x-2 hover:bg-pink-700 px-4 py-2 rounded-lg transition-colors"
      >
        <LogOut size={20} />
        <span>Logout</span>
      </button>
    </nav>
  );
};