import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, ScrollView, Alert } from 'react-native';

export default function CheckoutForm() {
  const [name, setName] = useState(''); const [phone, setPhone] = useState('');
  const [addr, setAddr] = useState(''); const [payment, setPayment] = useState('COD');

  const submit = () => Alert.alert('Đặt hàng', 'Đã gửi thông tin thanh toán (demo).');

  return (
    <ScrollView contentContainerStyle={{ padding:16, gap:10 }}>
      <Text style={{ fontSize:18, fontWeight:'700' }}>Thông tin nhận hàng</Text>
      <TextInput placeholder="Họ tên" style={{ borderWidth:1, borderRadius:10, padding:12 }} value={name} onChangeText={setName}/>
      <TextInput placeholder="Số điện thoại" keyboardType="phone-pad" style={{ borderWidth:1, borderRadius:10, padding:12 }} value={phone} onChangeText={setPhone}/>
      <TextInput placeholder="Địa chỉ" style={{ borderWidth:1, borderRadius:10, padding:12 }} value={addr} onChangeText={setAddr}/>
      <TextInput placeholder="Phương thức thanh toán (COD/Chuyển khoản)" style={{ borderWidth:1, borderRadius:10, padding:12 }} value={payment} onChangeText={setPayment}/>
      <Pressable onPress={submit} style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center' }}>
        <Text style={{ color:'#fff', fontWeight:'700' }}>Xác nhận đặt hàng</Text>
      </Pressable>
    </ScrollView>
  );
}
