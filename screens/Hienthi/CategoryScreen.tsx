import React, { useCallback, useMemo, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import { PLANTS } from '../../data/plants';
import ProductCard from '../../components/cards/ProductCard';
import FilterPanel from '../../components/filters/FilterPanel';

const CATS = ['Tất cả', 'Cây để bàn', 'Cây nội thất', 'Xương rồng', 'Sen đá'] as const;
type Sort = 'Phổ biến' | 'Giá ↑' | 'Giá ↓';

export default function CategoryScreen() {
  const nav = useNavigation<any>();

  const [open, setOpen] = useState(false);
  const [q, setQ] = useState('');
  const [cat, setCat] = useState<typeof CATS[number]>('Tất cả');
  const [sortBy, setSortBy] = useState<Sort>('Phổ biến');

  // tính min/max giá theo data
  const bounds = React.useMemo(() => {
    const prices = PLANTS.map(p => p.price);
    if (prices.length === 0) return { min: 0, max: 0 };
    return { min: Math.min(...prices), max: Math.max(...prices) };
  }, []);

  const [priceMin, setPriceMin] = useState(bounds.min);
  const [priceMax, setPriceMax] = useState(bounds.max);

  // lọc + sắp xếp
  const filtered = useMemo(() => (
    PLANTS
      .filter(p => (cat === 'Tất cả' ? true : p.category === cat))
      .filter(p => p.name.toLowerCase().includes(q.toLowerCase()))
      .filter(p => p.price >= priceMin && p.price <= priceMax)
  ), [cat, q, priceMin, priceMax]);

  const data = useMemo(() => {
    const arr = [...filtered];
    if (sortBy === 'Giá ↑') arr.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Giá ↓') arr.sort((a, b) => b.price - a.price);
    else arr.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
    return arr;
  }, [filtered, sortBy]);

  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => { setRefreshing(true); setTimeout(() => setRefreshing(false), 500); }, []);

  const Header = () => (
    <>
      <FilterPanel
        open={open}
        onToggle={() => setOpen(v => !v)}
        q={q} onChangeQ={setQ}
        categories={[...CATS]}
        category={cat} onChangeCategory={setCat}
        sortBy={sortBy} onChangeSort={setSortBy}
        bounds={bounds}
        priceMin={priceMin} priceMax={priceMax}
        onChangePriceMin={setPriceMin} onChangePriceMax={setPriceMax}
        onClear={() => { setQ(''); setCat('Tất cả'); setSortBy('Phổ biến'); setPriceMin(bounds.min); setPriceMax(bounds.max); }}
        onApply={() => {}}
        onUserPress={() => nav.navigate('Khuyến mãi')}  // avatar bên phải
      />
      <View style={{ paddingHorizontal: 16, paddingBottom: 6 }}>
        <Text style={{ color: '#6b7280' }}>Kết quả: {data.length}</Text>
      </View>
    </>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f7f9' }} edges={['top','left','right']}>
      <FlatList
        data={data}
        keyExtractor={(it) => it.id}
        numColumns={2}
        columnWrapperStyle={{ gap: 12, paddingHorizontal: 12 }}
        contentContainerStyle={{ gap: 12, paddingBottom: 16 }}
        ListHeaderComponent={<Header />}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        renderItem={({ item }) => (
          <View style={{ flex: 1 }}>
            <ProductCard
              item={item}
              onPress={() =>
                nav.navigate('Product', { screen: 'Chi tiết sản phẩm', params: { productId: item.id } })
              }
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
