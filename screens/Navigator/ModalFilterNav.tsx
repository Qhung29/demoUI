import React, { useState } from 'react';
import { View, Text, Pressable, SafeAreaView, Switch } from 'react-native';

export default function ModalFilterNav() {
  const [onlySale, setOnlySale] = useState(false);
  return (
    <SafeAreaView style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'700', marginBottom:12 }}>Bộ lọc</Text>
      <View style={{ flexDirection:'row', alignItems:'center', justifyContent:'space-between', paddingVertical:12 }}>
        <Text> giảm giá</Text>
        <Switch value={onlySale} onValueChange={setOnlySale} />
      </View>
      <Pressable style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center', marginTop:12 }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Áp dụng</Text>
      </Pressable>
    </SafeAreaView>
  );
}
