import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Toast from 'react-native-toast-message';

export default function ToastDemo() {
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', gap:10 }}>
      <Pressable onPress={()=>Toast.show({ type:'success', text1:'Thành công', text2:'Đã thêm vào giỏ' })}>
        <Text> Thành công</Text>
      </Pressable>
      <Pressable onPress={()=>Toast.show({ type:'error', text1:'Lỗi', text2:'Vui lòng thử lại' })}>
        <Text> Thất bại</Text>
      </Pressable>
    </View>
  );
}
