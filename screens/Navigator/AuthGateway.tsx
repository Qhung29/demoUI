import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AuthGateway() {
  const nav = useNavigation<any>();
  useEffect(()=>{
    const t = setTimeout(()=> nav.reset({ index:0, routes:[{ name:'Main' }] }), 800);
    return ()=>clearTimeout(t);
  },[]);
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', gap:10 }}>
      <ActivityIndicator />
      <Text>Đang xác thực…</Text>
    </View>
  );
}
