import { useMemo, useState } from 'react';
import { Plant } from '../data/plants';

export type CartItem = { product: Plant; qty: number; };

export default function useCart() {
  const [items, setItems] = useState<CartItem[]>([]);

  const add = (p: Plant, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(x => x.product.id === p.id);
      if (i >= 0) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { product: p, qty }];
    });
  };
  const remove = (id: string) => setItems(prev => prev.filter(x => x.product.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(() => items.reduce((s, i) => s + i.product.price * i.qty, 0), [items]);

  return { items, add, remove, clear, total };
}
