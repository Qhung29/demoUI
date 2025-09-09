import React from 'react';
import { View, Text, Pressable, LayoutAnimation, Platform, UIManager } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import SearchBar from '../inputs/SearchBar';

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

type Sort = 'Phổ biến' | 'Giá ↑' | 'Giá ↓';

const PRIMARY = '#2e7d32';
const PANEL_BG = '#f0f7f2';

export default function FilterPanel({
  open, onToggle,
  q, onChangeQ,
  categories, category, onChangeCategory,
  sortBy, onChangeSort,
  priceMin, priceMax,
  bounds = { min: 0, max: 0 },
  onChangePriceMin, onChangePriceMax,
  onClear, onApply,
  onUserPress, // ⬅️ avatar bên phải
}: {
  open: boolean; onToggle: () => void;

  q: string; onChangeQ: (s: string) => void;

  categories: string[];
  category: string;
  onChangeCategory: (c: string) => void;

  sortBy: Sort;
  onChangeSort: (s: Sort) => void;

  priceMin: number; priceMax: number;
  bounds?: { min: number; max: number };
  onChangePriceMin: (n: number) => void;
  onChangePriceMax: (n: number) => void;

  onClear?: () => void;
  onApply?: () => void;

  onUserPress?: () => void;
}) {
  const toggle = () => { LayoutAnimation.easeInEaseOut(); onToggle(); };

  return (
    <View style={{ paddingHorizontal: 16, paddingBottom: 8 }}>
      {/* HEADER: 🔍 (toggle bộ lọc) + avatar bên phải */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Pressable
          onPress={toggle}
          hitSlop={8}
          style={{
            width: 36, height: 36, borderRadius: 18,
            backgroundColor: '#e7efe9',
            alignItems: 'center', justifyContent: 'center',
            borderWidth: 1, borderColor: '#dfe7e2',
          }}
        >
          <Feather name="search" size={18} color="#111" />
        </Pressable>

        <View style={{ flex: 1 }} />

        <Pressable
          onPress={onUserPress}
          hitSlop={8}
          style={{
            width: 44, height: 44, borderRadius: 22,
            backgroundColor: '#eaf6ee',
            alignItems: 'center', justifyContent: 'center',
            borderWidth: 1, borderColor: '#cfe3d6',
          }}
        >
          <Feather name="user" size={24} color={PRIMARY} />
        </Pressable>
      </View>

      {/* PANEL: chỉ hiển thị khi open = true */}
      {open && (
        <View style={{
          backgroundColor: PANEL_BG, borderRadius: 14, padding: 12,
          borderWidth: 1, borderColor: '#dfe7e2', gap: 12
        }}>
          {/* Search */}
          <SearchBar value={q} onChange={onChangeQ} placeholder="Tìm cây, danh mục..." />

          {/* Chips danh mục */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
            {categories.map(c => {
              const active = c === category;
              return (
                <Pressable
                  key={c}
                  onPress={() => onChangeCategory(c)}
                  style={{
                    paddingVertical: 8, paddingHorizontal: 14, borderRadius: 20,
                    backgroundColor: active ? PRIMARY : '#eef2f4',
                    borderWidth: 1, borderColor: active ? PRIMARY : '#e5e7eb',
                  }}
                >
                  <Text style={{ color: active ? '#fff' : '#111', fontWeight: active ? '700' : '500' }}>{c}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* Segmented sort */}
          <View style={{ backgroundColor: '#eef2f4', borderRadius: 12, padding: 4, flexDirection: 'row', gap: 6 }}>
            {(['Phổ biến', 'Giá ↑', 'Giá ↓'] as Sort[]).map(s => {
              const active = sortBy === s;
              return (
                <Pressable
                  key={s}
                  onPress={() => onChangeSort(s)}
                  style={{
                    flex: 1, paddingVertical: 8, borderRadius: 10, alignItems: 'center',
                    backgroundColor: active ? '#fff' : 'transparent',
                    borderWidth: active ? 1 : 0, borderColor: active ? '#dfe5ea' : 'transparent',
                  }}
                >
                  <Text style={{ fontWeight: active ? '800' : '600', color: '#111' }}>{s}</Text>
                </Pressable>
              );
            })}
          </View>

          {/* Khoảng giá */}
          <View style={{ gap: 6 }}>
            <Text style={{ fontWeight: '700' }}>Khoảng giá</Text>

            {/* Min */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ width: 56, color: '#6b7280' }}>Tối thiểu</Text>
              <Slider
                minimumValue={bounds.min}
                maximumValue={priceMax}
                value={priceMin}
                onValueChange={(v: number) => onChangePriceMin(Math.min(Math.round(v), priceMax))}
                step={1000}
                minimumTrackTintColor={PRIMARY}
                maximumTrackTintColor="#cfd9d3"
                thumbTintColor={PRIMARY}
                style={{ flex: 1 }}
              />
              <Text style={{ width: 90, textAlign: 'right', fontWeight: '700' }}>{formatVND(priceMin)}</Text>
            </View>

            {/* Max */}
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
              <Text style={{ width: 56, color: '#6b7280' }}>Tối đa</Text>
              <Slider
                minimumValue={priceMin}
                maximumValue={bounds.max}
                value={priceMax}
                onValueChange={(v: number) => onChangePriceMax(Math.max(Math.round(v), priceMin))}
                step={1000}
                minimumTrackTintColor={PRIMARY}
                maximumTrackTintColor="#cfd9d3"
                thumbTintColor={PRIMARY}
                style={{ flex: 1 }}
              />
              <Text style={{ width: 90, textAlign: 'right', fontWeight: '700' }}>{formatVND(priceMax)}</Text>
            </View>
          </View>

          {/* Actions */}
          <View style={{ flexDirection: 'row', gap: 10 }}>
            <Pressable
              onPress={onClear}
              style={{
                flex: 1, paddingVertical: 10, borderRadius: 12,
                borderWidth: 1, borderColor: '#e5e7eb', alignItems: 'center'
              }}
            >
              <Text style={{ fontWeight: '700' }}>Đặt lại</Text>
            </Pressable>
            <Pressable
              onPress={() => { onApply?.(); LayoutAnimation.easeInEaseOut(); onToggle(); }}
              style={{
                flex: 1, paddingVertical: 10, borderRadius: 12,
                backgroundColor: PRIMARY, alignItems: 'center'
              }}
            >
              <Text style={{ color: '#fff', fontWeight: '800' }}>Áp dụng</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );
}

function formatVND(n: number) {
  return n.toLocaleString('vi-VN') + 'đ';
}
