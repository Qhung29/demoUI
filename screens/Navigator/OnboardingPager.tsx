import React, { useRef } from 'react';
import { View, Text, FlatList, Dimensions, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const slides = [
  { key:'s1', title:'Chăm cây dễ dàng' },
  { key:'s2', title:'Nhiều ưu đãi mỗi ngày' },
  { key:'s3', title:'Giao nhanh trong 2h' },
];

export default function OnboardingPager() {
  const nav = useNavigation<any>();
  const ref = useRef<FlatList>(null);

  return (
    <View style={{ flex:1 }}>
      <FlatList
        pagingEnabled horizontal showsHorizontalScrollIndicator={false}
        ref={ref} data={slides} keyExtractor={i=>i.key}
        renderItem={({item})=>(
          <View style={{ width, alignItems:'center', justifyContent:'center' }}>
            <Text style={{ fontSize:24, fontWeight:'700' }}>{item.title}</Text>
          </View>
        )}
      />
      <View style={{ position:'absolute', bottom:40, width:'100%', paddingHorizontal:24 }}>
        <Pressable onPress={()=>nav.navigate('Auth',{ screen:'Login'})}
          style={{ backgroundColor:'#2e7d32', padding:14, borderRadius:12, alignItems:'center' }}>
          <Text style={{ color:'#fff', fontWeight:'700' }}>Bắt đầu</Text>
        </Pressable>
      </View>
    </View>
  );
}
