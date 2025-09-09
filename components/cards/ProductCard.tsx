import React from 'react';
import { View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { Plant } from '../../data/plants';
import { vnd } from '../../utils/format';
import colors from '../../constants/colors';

export default function ProductCard({ item, onPress }:{ item: Plant; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress} style={s.card}>
      <Image source={ item.image } style={s.img} />
      <Text style={s.name} numberOfLines={1}>{item.name}</Text>
      <Text style={s.price}>{vnd(item.price)}</Text>
    </Pressable>
  );
}
const s = StyleSheet.create({
  card: { backgroundColor: colors.card, borderRadius: 12, padding: 10, gap: 6, elevation: 2 },
  img: { width: '100%', height: 150, borderRadius: 10 },
  name: { fontWeight: '600' },
  price: { color: colors.primary, fontWeight: '700' },
});
