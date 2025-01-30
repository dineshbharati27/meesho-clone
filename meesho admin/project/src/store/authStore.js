import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  isAuthenticated: false,
  login: async (email, password) => {
    // In a real app, you would make an API call here
    if (email === 'admin@meesho.com' && password === 'admin123') {
      set({ isAuthenticated: true });
    } else {
      throw new Error('Invalid credentials');
    }
  },
  logout: () => set({ isAuthenticated: false }),
}));