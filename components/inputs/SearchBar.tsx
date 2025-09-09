import React, { useState } from 'react';
import { View, TextInput, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SearchBar({
  value, onChange, placeholder = 'Tìm cây, danh mục...', onSubmit,
}: { value: string; onChange: (s: string) => void; placeholder?: string; onSubmit?: (s: string) => void; }) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={{
      flexDirection: 'row', alignItems: 'center', backgroundColor: '#eaf6ee',
      borderRadius: 16, paddingHorizontal: 12, paddingVertical: 10,
      borderWidth: 1, borderColor: focused ? '#94d3a2' : '#d9e9df',
      shadowColor: '#000', shadowOpacity: focused ? 0.08 : 0.04, shadowRadius: 8,
      shadowOffset: { width: 0, height: 3 }, elevation: focused ? 3 : 1,
    }}>
      <Feather name="search" size={18} color="#6b7280" />
      <TextInput
        value={value} onChangeText={onChange} placeholder={placeholder} placeholderTextColor="#94a3b8"
        style={{ flex: 1, marginLeft: 8, fontSize: 16, paddingVertical: 0 }}
        returnKeyType="search" onSubmitEditing={(e) => onSubmit?.(e.nativeEvent.text)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
      />
      {value.length > 0 && (
        <Pressable onPress={() => onChange('')} hitSlop={8} style={{ paddingLeft: 6 }}>
          <Feather name="x" size={18} color="#6b7280" />
        </Pressable>
      )}
    </View>
  );
}
