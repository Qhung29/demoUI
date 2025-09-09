import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function CardGrid() {
  const items = ['Bán chạy','Giảm giá','Mới về','Combo'];
  return (
    <SafeAreaView style={{ flex:1, padding:4 }}>
      <View style={{ flexDirection:'row', flexWrap:'wrap', gap:12 }}>
        {items.map((it)=>(
          <View key={it} style={{ width:'50%', height:100, borderRadius:16, backgroundColor:'#fff', elevation:2, alignItems:'center', justifyContent:'center' }}>
            <Text style={{ fontWeight:'700' }}>{it}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}
