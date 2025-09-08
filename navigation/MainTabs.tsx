import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeGridLayout from '../screens/Layout/HomeGridLayout';
import CategoryScreen from '../screens/Hienthi/CategoryScreen';
import CartSummaryScreen from '../screens/Hienthi/CartSummaryScreen';
import ShopInfoScreen from '../screens/Hienthi/ShopInfoScreen';
import PromotionsScreen from '../screens/Hienthi/PromotionsScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Trang chủ" component={HomeGridLayout} />
      <Tab.Screen name="Danh mục" component={CategoryScreen} />
      <Tab.Screen name="Khuyến mãi" component={PromotionsScreen} />
      <Tab.Screen name="Giỏ hàng" component={CartSummaryScreen} />
      <Tab.Screen name="Cửa hàng" component={ShopInfoScreen} />
    </Tab.Navigator>
  );
}
