import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainTabs from './MainTabs';
import ProductStack from './ProductStack';

export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Product: { productId: string } | undefined;
};

const Root = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Root.Navigator screenOptions={{ headerShown: false }}>
      <Root.Screen name="Auth" component={AuthStack} />
      <Root.Screen name="Main" component={MainTabs} />
      <Root.Screen name="Product" component={ProductStack} />
    </Root.Navigator>
  );
}
