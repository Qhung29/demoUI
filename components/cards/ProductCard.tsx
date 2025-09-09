import React, { useState } from 'react';
import { View, Image, Text, Pressable, StyleSheet, GestureResponderEvent } from 'react-native';
import { Ionicons, Feather } from '@expo/vector-icons';
import { Plant } from '../../data/plants';
import { vnd } from '../../utils/format';
import colors from '../../constants/colors';
import { useAppStore } from '../../hooks/useCart';

export default function ProductCard({
  item,
  onPress,
  onAdd,
}: {
  item: Plant;
  onPress?: () => void;
  onAdd?: () => void;
}) {
  const [liked, setLiked] = useState(false);
  const addToCart = useAppStore((s) => s.addToCart);

  const toggleLike = (e: GestureResponderEvent) => {
    e.stopPropagation?.();
    setLiked((v) => !v);
  };

  const handleAdd = (e: GestureResponderEvent) => {
    e.stopPropagation?.();
    if (onAdd) onAdd();
    else addToCart(item.id, 1);
  };

  return (
    <Pressable onPress={onPress} style={s.card}>
      <View style={{ position: 'relative' }}>
        <Image source={item.image} style={s.img} />
        <Pressable onPress={toggleLike} hitSlop={8} style={s.heartBtn}>
          <Ionicons name={liked ? 'heart' : 'heart-outline'} size={18} color={liked ? colors.primary : '#111'} />
        </Pressable>
        <Pressable onPress={handleAdd} hitSlop={8} style={s.addBtn}>
          <Feather name="plus" size={16} color="#fff" />
        </Pressable>
      </View>

      <Text style={s.name} numberOfLines={1}>{item.name}</Text>
      <Text style={s.price}>{vnd(item.price)}</Text>
    </Pressable>
  );
}

const s = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 10, gap: 6, elevation: 2 },
  img: { width: '100%', height: 150, borderRadius: 10 },
  heartBtn: {
    position: 'absolute', right: 8, top: 8, width: 28, height: 28, borderRadius: 14,
    backgroundColor: '#ffffffd9', alignItems: 'center', justifyContent: 'center',
    borderWidth: 1, borderColor: '#e5e7eb',
  },
  addBtn: {
    position: 'absolute', right: 8, bottom: 8, width: 28, height: 28, borderRadius: 14,
    backgroundColor: colors.primary, alignItems: 'center', justifyContent: 'center',
  },
  name: { fontWeight: '600' },
  price: { color: colors.primary, fontWeight: '700' },
});
