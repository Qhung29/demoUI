import React, { useState } from 'react';
import { View, Text, SafeAreaView,ScrollView } from 'react-native';
import { PLANTS } from '../../data/plants';
import ProductList from '../../components/lists/ProductList';
import { useNavigation } from '@react-navigation/native';
import SearchBar from '../../components/inputs/SearchBar';
import colors from '../../constants/colors';
import FilterSheet from 'screens/NhapLieu/FilterSheet';

import "./../../global.css";
export default function HomeGridLayout() {
  const nav = useNavigation<any>();
  const [q, setQ] = useState('');
  const data = PLANTS.filter(p => p.name.toLowerCase().includes(q.toLowerCase()));

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.bg   }}>
      <ScrollView  contentContainerStyle={{ flexGrow: 1 ,padding:16}}
        keyboardShouldPersistTaps="handled"
        >
          
        <View style={{ padding: 16 }}>
        <Text style={{ fontSize: 20, fontWeight: '700' }}>Cửa hàng Cây Xanh</Text>
        <Text style={{ color: '#666' }}>Ưu đãi hôm nay cho bạn</Text>
      </View>
      <SearchBar value={q} onChange={setQ} />
      <ProductList data={data} onPressItem={(id)=>nav.navigate('Product', { screen:'Chi tiết sản phẩm', params:{ productId:id }})} />
    
    </ScrollView>
    </SafeAreaView>
  );
}
