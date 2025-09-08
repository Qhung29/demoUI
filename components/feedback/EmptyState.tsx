import React from 'react';
import { View, Text } from 'react-native';

export default function EmptyState({ title, subtitle }:{ title:string; subtitle?:string }) {
  return (
    <View style={{ alignItems: 'center', padding: 24 }}>
      <Text style={{ fontSize: 18, fontWeight: '700' }}>{title}</Text>
      {subtitle ? <Text style={{ color:'#666', marginTop: 6 }}>{subtitle}</Text> : null}
    </View>
  );
}
