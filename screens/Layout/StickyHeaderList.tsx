import React from 'react';
import { View, Text, SectionList, SafeAreaView, TextInput } from 'react-native';

export default function StickyHeaderList() {
  const sections = [
    { title:'Cây để bàn', data:['Cọ Mini','Trầu bà','Kim tiền'] },
    { title:'Xương rồng', data:['Tai Thỏ','Trứng chim','Cầu vồng'] },
  ];
  return (
    <SafeAreaView style={{ flex:1 }}>
      <View style={{ padding:12, backgroundColor:'#fff' }}>
        <TextInput placeholder="Tìm nhanh..." style={{ borderWidth:1, borderRadius:10, padding:10 }} />
      </View>
      <SectionList
        sections={sections}
        keyExtractor={(i, idx)=>i+idx}
        stickySectionHeadersEnabled
        renderSectionHeader={({section})=>(
          <View style={{ backgroundColor:'#f0f0f0', padding:8 }}>
            <Text style={{ fontWeight:'700' }}>{section.title}</Text>
          </View>
        )}
        renderItem={({item})=>(
          <View style={{ padding:12, borderBottomWidth:1, borderColor:'#eee' }}>
            <Text>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
