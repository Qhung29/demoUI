import React from 'react';
import { View, Image, Text, Button, ScrollView } from 'react-native';
import { PLANTS } from '../../data/plants';
import { useRoute, useNavigation } from '@react-navigation/native';
import { vnd } from '../../utils/format';

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const product = PLANTS.find(p => p.id === route.params?.productId) ?? PLANTS[0];

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image source ={product.image} style={{ width: '100%', height: 260, borderRadius: 14 }} />
      <Text style={{ fontSize: 22, fontWeight: '700', marginTop: 12 }}>{product.name}</Text>
      <Text style={{ color: '#2e7d32', fontSize: 18, fontWeight: '700' }}>{vnd(product.price)}</Text>
      <Text style={{ marginVertical: 10, lineHeight: 20 }}>
        Cây dễ chăm, phù hợp không gian làm việc và phòng khách. Tưới 2–3 lần/tuần.
      </Text>
      <Button title="Thêm vào giỏ" onPress={() => nav.navigate('Giỏ hàng')} />
    </ScrollView>
  );
}
