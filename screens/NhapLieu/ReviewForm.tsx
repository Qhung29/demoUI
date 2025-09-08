import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';

export default function ReviewForm() {
  const [rating, setRating] = useState('5');
  const [content, setContent] = useState('');
  return (
    <SafeAreaView style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'700', marginBottom:8 }}>Đánh giá sản phẩm</Text>
      <TextInput placeholder="Số sao (1-5)" keyboardType="numeric" value={rating}
        onChangeText={setRating} style={{ borderWidth:1, borderRadius:10, padding:12, marginBottom:10 }} />
      <TextInput placeholder="Nội dung đánh giá" value={content} onChangeText={setContent}
        multiline style={{ borderWidth:1, borderRadius:10, padding:12, height:120, textAlignVertical:'top' }} />
      <Pressable style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center', marginTop:12 }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Gửi đánh giá</Text>
      </Pressable>
    </SafeAreaView>
  );
}
