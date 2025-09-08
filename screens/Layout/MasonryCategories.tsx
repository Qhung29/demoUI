import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';

export default function MasonryCategories() {
  // Demo layout (placeholder)
  return (
    <SafeAreaView style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize: 20, fontWeight: '700', marginBottom: 12 }}>Danh mục Masonry</Text>
      <View style={{ flexDirection:'row', gap:10 }}>
        <View style={{ flex:1, gap:10 }}>
          <View style={{ height:140, backgroundColor:'#c8e6c9', borderRadius:12 }} />
          <View style={{ height:220, backgroundColor:'#a5d6a7', borderRadius:12 }} />
        </View>
        <View style={{ flex:1, gap:10 }}>
          <View style={{ height:200, backgroundColor:'#b2dfdb', borderRadius:12 }} />
          <View style={{ height:160, backgroundColor:'#80cbc4', borderRadius:12 }} />
        </View>
      </View>
    </SafeAreaView>
  );
}
