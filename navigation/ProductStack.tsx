import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetailScreen from '../screens/Hienthi/ProductDetailScreen';
import CheckoutForm from '../screens/NhapLieu/CheckoutForm';
import ModalFilterNav from '../screens/Navigator/ModalFilterNav';

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Chi tiết sản phẩm" component={ProductDetailScreen} />
      <Stack.Screen name="Thanh toán" component={CheckoutForm} />
      <Stack.Screen
        name="Bộ lọc"
        component={ModalFilterNav}
        options={{ presentation: 'modal', title: 'Bộ lọc' }}
      />
    </Stack.Navigator>
  );
}
