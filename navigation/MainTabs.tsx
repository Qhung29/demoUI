// navigation/MainTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import HomeGridLayout from "../screens/Layout/HomeGridLayout";
import CategoryScreen from "../screens/Hienthi/CategoryScreen";
import CartSummaryScreen from "../screens/Hienthi/CartSummaryScreen";
import ShopInfoScreen from "../screens/Hienthi/ShopInfoScreen";
import ProfileScreen from "../screens/Hienthi/ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#16a34a",  
        tabBarInactiveTintColor: "#6b7280", 
        tabBarStyle: { height: 60, paddingBottom: 6, paddingTop: 6 },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof MaterialIcons.glyphMap = "home";

          if (route.name === "Trang chủ") {
            iconName = "home";
          } else if (route.name === "Danh mục") {
            iconName = "category";
          } else if (route.name === "Hồ sơ") {
            iconName = "account-circle";
          } else if (route.name === "Giỏ hàng") {
            iconName = "shopping-cart";
          } else if (route.name === "Cửa hàng") {
            iconName = "store";
          }

          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Trang chủ" component={HomeGridLayout} />
      <Tab.Screen name="Danh mục" component={CategoryScreen} />
      <Tab.Screen name="Giỏ hàng" component={CartSummaryScreen} />
      <Tab.Screen name="Cửa hàng" component={ShopInfoScreen} />
      <Tab.Screen name="Hồ sơ" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
