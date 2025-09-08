import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function DeepLinkDemo() {
  const nav = useNavigation<any>();
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', gap:12 }}>
      <Text>Demo mở thẳng vào chi tiết sản phẩm (giống deeplink)</Text>
      <Pressable onPress={()=>nav.navigate('Product', { screen:'Chi tiết sản phẩm', params:{ productId:'p1' }})}
        style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12 }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Mở sản phẩm p1</Text>
      </Pressable>
    </View>
  );
}
