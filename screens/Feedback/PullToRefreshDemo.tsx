import React, { useState, useCallback } from 'react';
import { FlatList, RefreshControl, Text, View } from 'react-native';

export default function PullToRefreshDemo() {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState(['Monstera','Sen đá','Xương rồng']);

  const onRefresh = useCallback(()=>{
    setRefreshing(true);
    setTimeout(()=>{
      setData(prev=>['Cọ cảnh', ...prev]);
      setRefreshing(false);
    }, 800);
  },[]);

  return (
    <FlatList
      data={data}
      keyExtractor={(i, idx)=>i+idx}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      renderItem={({item})=>(
        <View style={{ padding:16, borderBottomWidth:1, borderColor:'#eee' }}>
          <Text>{item}</Text>
        </View>
      )}
    />
  );
}
