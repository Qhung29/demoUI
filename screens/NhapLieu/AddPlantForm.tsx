import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView } from 'react-native';

export default function AddPlantForm() {
  const [name, setName] = useState(''); const [price, setPrice] = useState('');
  const [cat, setCat] = useState('Cây để bàn');

  return (
    <SafeAreaView style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'700', marginBottom:10 }}>Thêm sản phẩm</Text>
      <TextInput placeholder="Tên cây" style={{ borderWidth:1, borderRadius:10, padding:12, marginBottom:10 }} value={name} onChangeText={setName}/>
      <TextInput placeholder="Giá" keyboardType="numeric" style={{ borderWidth:1, borderRadius:10, padding:12, marginBottom:10 }} value={price} onChangeText={setPrice}/>
      <TextInput placeholder="Danh mục (Cây để bàn / Cây nội thất / …)" style={{ borderWidth:1, borderRadius:10, padding:12, marginBottom:10 }} value={cat} onChangeText={setCat}/>
      <Pressable style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center' }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Lưu</Text>
      </Pressable>
    </SafeAreaView>
  );
}
