import React, { useState } from 'react';
import { View, Text, FlatList, Pressable, SafeAreaView } from 'react-native';
import { PLANTS } from '../../data/plants';
import { vnd } from '../../utils/format';

export default function CartSummaryScreen() {
  
  const [items, setItems] = useState([{ id:'p1', qty:1 }, { id:'p2', qty:2 }]);
  const products = items.map(i => ({ ...i, product: PLANTS.find(p=>p.id===i.id)! }));
  const total = products.reduce((s, it)=> s + it.product.price*it.qty, 0);

  return (
    <SafeAreaView style={{ flex:1 }}>
      <FlatList
        data={products}
        keyExtractor={i=>i.id}
        renderItem={({item})=>(
          <View style={{ flexDirection:'row', justifyContent:'space-between', padding:12, borderBottomWidth:1, borderColor:'#eee' }}>
            <Text>{item.product.name} × {item.qty}</Text>
            <Text style={{ fontWeight:'700' }}>{vnd(item.product.price*item.qty)}</Text>
          </View>
        )}
        ListFooterComponent={
          <View style={{ padding:12, gap:10 }}>
            <Text style={{ fontSize:16, fontWeight:'700' }}>Tổng: {vnd(total)}</Text>
            <Pressable style={{ backgroundColor:'#2e7d32', padding:12, borderRadius:12, alignItems:'center' }}>
              <Text style={{ color:'#fff', fontWeight:'700' }}>Đặt hàng</Text>
            </Pressable>
          </View>
        }
      />
    </SafeAreaView>
  );
}
