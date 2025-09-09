import React, { useMemo, useState } from 'react';
import { View, Text, Image, Pressable, Dimensions, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { PLANTS } from '../../data/plants';
import ProductCard from '../../components/cards/ProductCard';
import SearchBar from '../../components/inputs/SearchBar';
import { Feather } from '@expo/vector-icons';
const LOGO = require('../../assets/logo.png');
const CATS = ['Tất cả', 'Cây để bàn', 'Cây nội thất', 'Xương rồng', 'Sen đá'] as const;

export default function HomeGridLayout() {
  const nav = useNavigation<any>();
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<typeof CATS[number]>('Tất cả');
  const AVATAR_BTN = 44

  const columns = useMemo(() => (Dimensions.get('window').width >= 720 ? 3 : 2), []);

  const data = PLANTS
    .filter(p => p.name.toLowerCase().includes(q.toLowerCase()))
    .filter(p => (cat === 'Tất cả' ? true : p.category === cat));

  const Header = () => (
    <>
      
      <View style={{ paddingHorizontal: 16, paddingTop: 20, paddingBottom: 8, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <Image source={LOGO} style={{ width: 50, height: 50, borderRadius: 8 }} />
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, fontWeight: '800' }}>GreenShop</Text>
          <Text style={{ color: '#6b7280', fontSize: 12 }}>Ưu đãi hôm nay cho bạn</Text>
        </View>
  <Pressable
  onPress={() => nav.navigate('Khuyến mãi')}
  hitSlop={8}
  style={{
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#eaf6ee',      
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#cfe3d6',
    
  }}
>
  <Feather name="user" size={28} color="#2e7d32" />
        </Pressable>
      </View>

      {/* Ô tìm kiếm – pill xanh nhạt */}
      <View style={{ paddingHorizontal: 16 }}>
        <SearchBar value={q} onChange={setQ} placeholder="Tìm cây, danh mục..." />
      </View>

      

      <View style={{ height: 6 }} />
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f7f9' }} edges={['top', 'left', 'right']}>
      <FlatList
        data={data}
        key={columns}
        numColumns={columns}
        keyExtractor={(it) => it.id}
        columnWrapperStyle={{ gap: 12, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
        ListHeaderComponent={<Header />}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ProductCard
              item={item}
              onPress={() =>
                nav.navigate('Product', {
                  screen: 'Chi tiết sản phẩm',
                  params: { productId: item.id },
                })
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
