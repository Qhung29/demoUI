import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const nav = useNavigation<any>();

  const onLogin = () => {
    if (!email || !pass) return Alert.alert('Thiếu thông tin', 'Vui lòng nhập đủ email và mật khẩu.');
    nav.reset({ index: 0, routes: [{ name: 'Main' }] });
  };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 16 }}>Đăng nhập hệ thống</Text>
      <TextInput placeholder="Email" autoCapitalize="none"
        style={{ borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 12 }} value={email} onChangeText={setEmail} />
      <TextInput placeholder="Mật khẩu" secureTextEntry
        style={{ borderWidth: 1, borderRadius: 10, padding: 12, marginBottom: 16 }} value={pass} onChangeText={setPass} />
      <Pressable onPress={onLogin}
        style={{ backgroundColor: '#2e7d32', padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '700' }}>Đăng nhập</Text>
      </Pressable>
      <Pressable onPress={()=>nav.navigate('AuthGateway')} style={{ marginTop:12, alignItems:'center' }}>
        <Text>Thử qua AuthGateway</Text>
      </Pressable>
    </SafeAreaView>
  );
}
