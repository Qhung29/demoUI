// hooks/useCart.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLANTS, Plant } from '../data/plants';

export type CartItem = { product: Plant; qty: number };

type AppState = {
  loggedIn: boolean;
  cart: CartItem[];
  login: () => void;
  logout: () => void;
  addToCart: (id: string, qty?: number) => void;
  updateQty: (id: string, delta: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  total: () => number;
  count: () => number;
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      loggedIn: false,
      cart: [],
      login: () => set({ loggedIn: true }),
      logout: () => set({ loggedIn: false, cart: [] }),
      addToCart: (id, qty = 1) =>
        set((s) => {
          const p = PLANTS.find((x) => x.id === id);
          if (!p) return s;
          const idx = s.cart.findIndex((c) => c.product.id === id);
          const cart = [...s.cart];
          if (idx >= 0) cart[idx] = { ...cart[idx], qty: cart[idx].qty + qty };
          else cart.push({ product: p, qty });
          return { ...s, cart };
        }),
      updateQty: (id, delta) =>
        set((s) => {
          const cart = s.cart
            .map((c) => (c.product.id === id ? { ...c, qty: c.qty + delta } : c))
            .filter((c) => c.qty > 0);
          return { ...s, cart };
        }),
      removeFromCart: (id) =>
        set((s) => ({ ...s, cart: s.cart.filter((c) => c.product.id !== id) })),
      clearCart: () => set({ cart: [] }),
      total: () => get().cart.reduce((sum, i) => sum + i.product.price * i.qty, 0),
      count: () => get().cart.reduce((sum, i) => sum + i.qty, 0),
    }),
    {
      name: 'plant-app-store',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (s) => ({ loggedIn: s.loggedIn, cart: s.cart }),
    }
  )
);

export default useAppStore;
