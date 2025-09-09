import React, { useState } from 'react';
import { View, Text, SafeAreaView, Pressable,ScrollView } from 'react-native';
import { PLANTS } from '../../data/plants';
import ProductList from '../../components/lists/ProductList';
import { useNavigation } from '@react-navigation/native';


const CATS = ['Tất cả','Cây để bàn','Cây nội thất','Xương rồng','Sen đá'] as const;

export default function CategoryScreen() {
  const [cat, setCat] = useState<typeof CATS[number]>('Tất cả');
  const nav = useNavigation<any>();
  const data = PLANTS.filter(p => cat==='Tất cả' ? true : p.category===cat);

  return (
    <SafeAreaView style={{ flex:1 }}>
      <ScrollView contentContainerStyle={{ padding: 16,margin:10 }} >
      <View style={{ flexDirection:'row', flexWrap:'wrap', gap:8, padding:12 }}>
        {CATS.map(c => (
          <Pressable key={c} onPress={()=>setCat(c)}
            style={{ paddingVertical:6, paddingHorizontal:12, borderRadius:20, backgroundColor: c===cat?'#2e7d32':'#e5e7eb' }}>
            <Text style={{ color: c===cat?'#fff':'#111' }}>{c}</Text>
          </Pressable>
        ))}
      </View>
      <ProductList data={data} onPressItem={(id)=>nav.navigate('Product', { screen:'ProductDetailScreen', params:{ productId:id }})} />
    </ScrollView>
    </SafeAreaView>
  );
}
