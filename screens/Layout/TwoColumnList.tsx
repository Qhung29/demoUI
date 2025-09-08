import React from 'react';
import { SafeAreaView } from 'react-native';
import { PLANTS } from '../../data/plants';
import ProductList from '../../components/lists/ProductList';
import { useNavigation } from '@react-navigation/native';

export default function TwoColumnList() {
  const nav = useNavigation<any>();
  return (
    <SafeAreaView style={{ flex:1 }}>
      <ProductList data={PLANTS} onPressItem={(id)=>nav.navigate('Product', { screen:'Chi tiết sản phẩm', params:{ productId:id }})} />
    </SafeAreaView>
  );
}
