import React from 'react';
import { View, Text, ScrollView } from 'react-native';

export default function PromotionsScreen() {
  return (
    <ScrollView contentContainerStyle={{ padding:16, gap:12 }}>
      {[1,2,3].map(b=>(
        <View key={b} style={{ height:120, borderRadius:16, backgroundColor:'#c8e6c9', justifyContent:'center', alignItems:'center' }}>
          <Text style={{ fontWeight:'700' }}>Banner ưu đãi #{b}</Text>
        </View>
      ))}
      <Text style={{ marginTop:8 }}>Danh sách ưu đãi dành cho bạn…</Text>
    </ScrollView>
  );
}
