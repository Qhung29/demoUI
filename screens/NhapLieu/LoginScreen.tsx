import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, SafeAreaView,
  Alert, KeyboardAvoidingView, Platform, StyleSheet, Image, ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [showPass, setShowPass] = useState(false);
  const nav = useNavigation<any>();

  const onLogin = () => {
    if (!email || !pass) return Alert.alert('Thiếu thông tin', 'Vui lòng nhập đủ email và mật khẩu.');
    nav.reset({ index: 0, routes: [{ name: 'Main' }] });
  };

  return (
    <SafeAreaView style={s.container}>
      {/* KeyboardAvoidingView chỉ bao quanh phần có thể cuộn và bị che bởi bàn phím */}
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        // keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 20} // Có thể điều chỉnh nếu cần thêm khoảng cách
      >
        <ScrollView
          contentContainerStyle={s.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* ====== LOGO TRÊN ĐẦU + TIÊU ĐỀ ====== */}
          <View style={s.top}>
            <Image
              source={require('../../assets/logotree2-Photoroom.png')}
              style={s.brandLogo}
              resizeMode="contain"
            />
            <Text style={s.title}>GreenShop</Text>
            <Text style={s.subtitle}>Chào mừng bạn trở lại 🌱</Text>
          </View>

          {/* ====== FORM ====== */}
          <View style={s.card}>
          <Text style={s.label}>Email</Text>
          <View style={s.inputRow}>
          <MaterialIcons name="person" size={20} color="#6b7280" />
          <TextInput
              placeholder="you@example.com"
              autoCapitalize="none"
              style={s.input}
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
           />
         </View>

         <Text style={s.label}>Mật khẩu</Text>
         <View style={s.inputRow}>
         <MaterialIcons name="lock-outline" size={20} color="#6b7280" />
         <TextInput
              placeholder="••••••••"
              secureTextEntry={!showPass}
              style={s.input}
              value={pass}
              onChangeText={setPass}
          />
         <Pressable onPress={() => setShowPass(v => !v)}>
         <MaterialIcons name={showPass ? 'visibility' : 'visibility-off'} size={20} color="#6b7280" />
        </Pressable>
     </View>

        <Pressable onPress={onLogin} style={s.loginBtn}>
        <Text style={s.loginText}>Đăng nhập</Text>
        </Pressable>

  
        <Pressable onPress={() => nav.navigate('AuthGateway')} style={s.altGateway}>
        <Text style={s.altGatewayText}>Thử qua AuthGateway</Text>
        </Pressable>

        <View style={s.linkRow}>
        <Pressable><Text style={s.link}>Quên mật khẩu?</Text></Pressable>
        <Pressable><Text style={s.link}>Tạo tài khoản</Text></Pressable>
      </View>
   </View>

          {/* Logo minh họa */}
          <View style={s.scrollableLogo}>
            <Image
              source={require('../../assets/image-Photoroom.png')}
              style={s.footerImage}
              resizeMode="contain"
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* FOOTER  */}
      <View style={s.fixedFooter}>
        <Text style={{ color: '#090909ff' }}>© 2025 GreenShop</Text>
      </View>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f6f7fb' },
  content: {
    paddingHorizontal: 24,
    paddingTop: 100,
    paddingBottom: 200, 
  },
  // --- TOP ---
  top: { alignItems: 'center', marginTop: 8, marginBottom: 12 },
  brandLogo: { width: 150, height: 100, marginBottom: 4 },
  title: { fontSize: 32, fontWeight: '800', color: '#1b4332', textAlign: 'center' },
  subtitle: { marginTop: 4, color: '#40916c', textAlign: 'center' },
  // --- CARD / FORM ---
  card: {
    backgroundColor: '#fff', borderRadius: 16, padding: 20,
    shadowColor: '#000', shadowOpacity: 0.08, shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 }, elevation: 3,
  },
  label: { fontWeight: '600', color: '#111827', marginBottom: 6, marginTop: 12 },
  inputRow: {
    flexDirection: 'row', alignItems: 'center',
    borderWidth: 1, borderColor: '#d1d5db', borderRadius: 12,
    paddingHorizontal: 12, height: 48,
  },
  input: { flex: 1, marginLeft: 8 },
  loginBtn: {
    marginTop: 20, backgroundColor: '#52b788',
    paddingVertical: 14, borderRadius: 12, alignItems: 'center',
  },
  loginText: { color: '#fff', fontWeight: '700', fontSize: 16 },
  linkRow: { marginTop: 14, flexDirection: 'row', justifyContent: 'space-between' },
  link: { color: '#40916c', fontWeight: '500' },
  // --- SCROLLABLE LOGO (đặt bên trong ScrollView) ---
  scrollableLogo: {
    alignItems: 'center',
    marginTop: 20, // Khoảng cách với phần card
  },
  footerImage: { width: 180, height: 180 },
  // --- FIXED FOOTER (Cố định ở dưới cùng) ---
  fixedFooter: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingVertical: 10, // Thêm padding để nó không dính sát mép
    backgroundColor: '#f6f7fb', // Đảm bảo background trùng với container
    zIndex: 1, // Đảm bảo footer nằm trên các thành phần khác nếu có
  },

  altGateway: {
  alignSelf: 'center',
  marginTop: 10,
},

  altGatewayText: {
  color: '#40916c',
  fontWeight: '500',
},

});