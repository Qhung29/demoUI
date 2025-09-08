import React from 'react';
import { FlatList, View } from 'react-native';
import ProductCard from '../cards/ProductCard';
import { Plant } from '../../data/plants';

export default function ProductList({ data, onPressItem }:{ data: Plant[]; onPressItem:(id:string)=>void; }) {
  return (
    <FlatList
      data={data}
      keyExtractor={(it) => it.id}
      numColumns={2}
      columnWrapperStyle={{ gap: 12 }}
      contentContainerStyle={{ padding: 12, gap: 12 }}
      renderItem={({ item }) => (
        <View style={{ flex: 1 }}>
          <ProductCard item={item} onPress={() => onPressItem(item.id)} />
        </View>
      )}
    />
  );
}
