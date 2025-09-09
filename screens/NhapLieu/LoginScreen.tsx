import React, { useState } from 'react';
import {
  View, Text, TextInput, Pressable, SafeAreaView,
  Alert, KeyboardAvoidingView, Platform, Image, ScrollView
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, NavigationProp, ParamListBase } from '@react-navigation/native';

type AppNavigationProp = NavigationProp<ParamListBase>;


export default function LoginScreen() {
  const [email, setEmail] = useState<string>('');
  const [pass, setPass] = useState<string>('');
  const [showPass, setShowPass] = useState<boolean>(false);
  const nav = useNavigation<AppNavigationProp>();

  const onLogin = () => {
    if (!email || !pass) return Alert.alert('Thiếu thông tin', 'Vui lòng nhập đủ email và mật khẩu.');
    nav.reset({ index: 0, routes: [{ name: 'Main' }] });
  };

  return (
    // Sử dụng SafeAreaView trực tiếp
    <SafeAreaView className="flex-1 bg-[#f6f7fb]">
      <KeyboardAvoidingView className="flex-1" behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        {/* Sử dụng ScrollView trực tiếp */}
        <ScrollView contentContainerClassName="px-6 pt-[100px] pb-3 mt-2" keyboardShouldPersistTaps="handled">
          
          {/* ====== LOGO TRÊN ĐẦU + TIÊU ĐỀ ====== */}
          {/* Sử dụng View trực tiếp */}
          <View className="items-center mt-2 mb-3">
            {/* Sử dụng Image trực tiếp */}
            <Image
              source={require('../../assets/logotree2-Photoroom.png')}
              className="w-[15px] h-[10px] mb-1"
              resizeMode="contain"
            />
            {/* Sử dụng Text trực tiếp */}
            <Text className="text-3xl font-extrabold text-[#1b4332] text-center">Đăng nhập hệ thống</Text>
            <Text className="mt-1 text-[#40916c] text-center">Chào mừng bạn trở lại 🌱</Text>
          </View>

          {/* ====== FORM (giữ nguyên bố cục cũ) ====== */}
          <View className="bg-white rounded-2xl p-5 shadow-lg shadow-black/5 elevation-3">
            <Text className="font-semibold text-[#111827] mb-1.5 mt-3">Email</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12">
              <MaterialIcons name="person" size={20} color="#6b7280" />
              {/* Sử dụng TextInput trực tiếp */}
              <TextInput
                placeholder="you@example.com"
                autoCapitalize="none"
                className="flex-1 ml-2"
                value={email}
                onChangeText={setEmail}
              />
            </View>

            <Text className="font-semibold text-[#111827] mb-1.5 mt-3">Mật khẩu</Text>
            <View className="flex-row items-center border border-gray-300 rounded-xl px-3 h-12">
              <MaterialIcons name="lock-outline" size={20} color="#6b7280" />
              <TextInput
                placeholder="••••••••"
                secureTextEntry={!showPass}
                className="flex-1 ml-2"
                value={pass}
                onChangeText={setPass}
              />
              {/* Sử dụng Pressable trực tiếp */}
              <Pressable onPress={() => setShowPass(v => !v)}>
                <MaterialIcons name={showPass ? 'visibility' : 'visibility-off'} size={20} color="#6b7280" />
              </Pressable>
            </View>

            <Pressable onPress={onLogin} className="mt-5 bg-[#52b788] py-3.5 rounded-xl items-center">
              <Text className="text-white font-bold text-base">Đăng nhập</Text>
            </Pressable>

            <View className="mt-3.5 flex-row justify-between">
              <Pressable><Text className="text-[#40916c] font-medium">Quên mật khẩu?</Text></Pressable>
              <Pressable><Text className="text-[#40916c] font-medium">Tạo tài khoản</Text></Pressable>
            </View>
          </View>
        </ScrollView>

        {/* ====== FOOTER (logo minh họa) ====== */}
        <View className="absolute left-0 right-0 bottom-4 items-center">
          <Image
            source={require('../../assets/image-Photoroom.png')}
            className="w-[100px] h-[100px]"
            resizeMode="contain"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}