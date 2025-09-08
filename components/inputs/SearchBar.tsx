import React from 'react';
import { View, TextInput } from 'react-native';

export default function SearchBar({ value, onChange }:{ value:string; onChange:(t:string)=>void }) {
  return (
    <View style={{ padding: 12 }}>
      <TextInput
        placeholder="Tìm cây, danh mục…"
        value={value}
        onChangeText={onChange}
        style={{ backgroundColor:'#fff', borderRadius:12, padding:12, borderWidth:1, borderColor:'#e5e7eb' }}
      />
    </View>
  );
}
