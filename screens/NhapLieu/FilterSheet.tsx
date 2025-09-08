import React, { useState } from 'react';
import { View, Text, SafeAreaView,  } from 'react-native';

export default function FilterSheet() {
  const [min] = useState(0); const [max] = useState(500000);
  return (
    <SafeAreaView style={{ flex:1, padding:16 }}>
      <Text style={{ fontSize:18, fontWeight:'700' }}>Bộ lọc nhanh</Text>
      <View style={{ height:80, justifyContent:'center' }}>
        <Text>Khoảng giá: {min} - {max} VND (demo)</Text>
        {/* Bạn thay Slider phù hợp hoặc dùng @react-native-community/slider */}
      </View>
    </SafeAreaView>
  );
}
