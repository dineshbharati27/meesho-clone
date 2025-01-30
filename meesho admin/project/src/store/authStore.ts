import { create } from 'zustand';
import { AuthState } from '../types';

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // In a real app, you would make an API call here
    if (email === 'admin@meesho.com' && password === 'admin123') {
      set({ isAuthenticated: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => set({ isAuthenticated: false }),
}));