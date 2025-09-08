import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function ShopInfoScreen() {
  return (
    <SafeAreaView style={{ flex:1, padding:16, gap:10 }}>
      <Text style={{ fontSize:20, fontWeight:'700' }}>Cửa hàng Cây Xanh</Text>
      <Text>Địa chỉ: 123 Hoa Lan, Q.Phú Nhuận, TP.HCM</Text>
      <Text>Giờ mở cửa: 8:00 – 21:00 mỗi ngày</Text>
      <Text>Hotline: 0900 000 000</Text>
      <Text style={{ marginTop:12 }}>Giới thiệu: Chuyên cây nội thất, xương rồng, sen đá…</Text>
    </SafeAreaView>
  );
}
