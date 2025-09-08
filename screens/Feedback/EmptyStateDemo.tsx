import React from 'react';
import { View, Pressable, Text } from 'react-native';
import EmptyState from '../../components/feedback/EmptyState';

export default function EmptyStateDemo() {
  return (
    <View style={{ flex:1 }}>
      <EmptyState title="Giỏ hàng đang trống" subtitle="Hãy thêm vài chậu cây nhé!" />
      <Pressable style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center', marginHorizontal:16 }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Mua sắm ngay</Text>
      </Pressable>
    </View>
  );
}
