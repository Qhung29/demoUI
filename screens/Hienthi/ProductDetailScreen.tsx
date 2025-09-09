import React, { useMemo, useState } from 'react';
import { ScrollView, Image, Text, View, Pressable, TextInput } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';

import { PLANTS } from '../../data/plants';
import { vnd } from '../../utils/format';

import { useAppStore } from '../../hooks/useCart';

type Review = { id: string; user: string; rating: number; comment: string; date: string };

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const add = useAppStore((s) => s.addToCart);
  const p = PLANTS.find((x) => x.id === route.params?.productId) ?? PLANTS[0];

  
  const [qty, setQty] = useState(1);
  const inc = () => setQty((q) => q + 1);
  const dec = () => setQty((q) => Math.max(1, q - 1));


  const [reviews, setReviews] = useState<Review[]>([
    { id: 'r1', user: 'Minh Trí', rating: 5, comment: 'Cây đẹp, giao nhanh!', date: '2025-09-08' },
    { id: 'r2', user: 'Lan Anh', rating: 4, comment: 'Lá xanh, đóng gói cẩn thận.', date: '2025-09-07' },
  ]);
  const avgRating = useMemo(
    () => (reviews.length ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) : 0),
    [reviews]
  );

  // form viết đánh giá
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');

  const submitReview = () => {
    if (!newComment.trim()) {
      Toast.show({ type: 'error', text1: 'Vui lòng nhập nội dung đánh giá' });
      return;
    }
    const r: Review = {
      id: Math.random().toString(36).slice(2),
      user: 'Bạn',
      rating: newRating,
      comment: newComment.trim(),
      date: new Date().toISOString().slice(0, 10),
    };
    setReviews((prev) => [r, ...prev]);
    setNewComment('');
    setNewRating(5);
    Toast.show({ type: 'success', text1: 'Đã gửi đánh giá' });
  };

  const onAdd = () => {
    add(p.id, qty);
    Toast.show({ type: 'success', text1: `Đã thêm ${qty} sản phẩm vào giỏ` });
  };
  const onBuyNow = () => {
    add(p.id, qty);
    
    nav.navigate('Thanh toán');
  };

  const btnQty = {
    width: 36, height: 36, borderRadius: 10,
    backgroundColor: '#e7ecef', alignItems: 'center', justifyContent: 'center'
  } as const;

  return (
    <ScrollView contentContainerStyle={{ padding: 16, gap: 14, backgroundColor: '#f7f8fa' }}>
    
      <View style={{ position: 'relative' }}>
        <Image source={(p.image) as any}
               style={{ width: '100%', height: 400, borderRadius: 16, backgroundColor: '#e5e7eb' }} />
        <View style={{ position: 'absolute', left: 12, top: 12,
                       backgroundColor: '#111', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 100 }}>
          <Text style={{ color: '#fff', fontSize: 12 }}>{p.category}</Text>
        </View>
      </View>
      <View style={{ gap: 6 }}>
        <Text style={{ fontSize: 20, fontWeight: '800' }}>{p.name}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text style={{ color: '#2e7d32', fontSize: 18, fontWeight: '800' }}>{vnd(p.price)}</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
            <StarRating value={avgRating} size={16} />
            <Text style={{ color: '#6b7280' }}>
              {avgRating.toFixed(1)} ({reviews.length})
            </Text>
          </View>
        </View>
      </View>

      {/* Mô tả ngắn */}
      <Text style={{ lineHeight: 20, color: '#374151' }}>
        Cây dễ chăm, phù hợp không gian làm việc và phòng khách. Tưới 2–3 lần/tuần.
      </Text>

      {/* Chọn số lượng + CTA */}
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center', gap: 10,
          backgroundColor: '#fff', borderRadius: 12, padding: 8, borderWidth: 1, borderColor: '#e5e7eb'
        }}>
          <Pressable onPress={dec} style={btnQty}><Text style={{ fontSize: 18 }}>−</Text></Pressable>
          <Text style={{ minWidth: 28, textAlign: 'center', fontWeight: '800' }}>{qty}</Text>
          <Pressable onPress={inc} style={btnQty}><Text style={{ fontSize: 18 }}>＋</Text></Pressable>
        </View>

        <Pressable onPress={onAdd}
          style={{ flex: 1, backgroundColor: '#e7f0e9', padding: 14, borderRadius: 12, alignItems: 'center', borderWidth: 1, borderColor: '#cfe3d6' }}>
          <Text style={{ fontWeight: '800', color: '#2e7d32' }}>Thêm giỏ</Text>
        </Pressable>
        <Pressable onPress={onBuyNow}
          style={{ flex: 1, backgroundColor: '#2e7d32', padding: 14, borderRadius: 12, alignItems: 'center' }}>
          <Text style={{ color: '#fff', fontWeight: '800' }}>Mua ngay</Text>
        </Pressable>
      </View>

      {/* ------- BÌNH LUẬN ------- */}
      <View style={{ height: 1, backgroundColor: '#e5e7eb', marginVertical: 6 }} />
      <Text style={{ fontSize: 18, fontWeight: '800' }}>Bình luận</Text>

      {/* Form viết đánh giá */}
      <View style={{
        backgroundColor: '#fff', borderRadius: 14, padding: 12,
        borderWidth: 1, borderColor: '#e5e7eb', gap: 10
      }}>
        <Text style={{ fontWeight: '700' }}>Viết đánh giá của bạn</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <InteractiveStars value={newRating} onChange={setNewRating} />
          <Text style={{ color: '#6b7280' }}>{newRating}/5</Text>
        </View>

        <TextInput
          placeholder="Chia sẻ trải nghiệm…"
          value={newComment}
          onChangeText={setNewComment}
          multiline
          style={{
            minHeight: 80, textAlignVertical: 'top',
            borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 10, backgroundColor: '#fafafa'
          }}
        />
        <Pressable onPress={submitReview}
          style={{ alignSelf: 'flex-end', backgroundColor: '#111', paddingVertical: 10, paddingHorizontal: 14, borderRadius: 10 }}>
          <Text style={{ color: '#fff', fontWeight: '700' }}>Gửi đánh giá</Text>
        </Pressable>
      </View>

      {/* Danh sách đánh giá */}
      <View style={{ gap: 10 }}>
        {reviews.map((r) => (
          <View key={r.id}
            style={{ backgroundColor: '#fff', borderRadius: 14, padding: 12, borderWidth: 1, borderColor: '#e5e7eb', gap: 6 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontWeight: '700' }}>{r.user}</Text>
              <Text style={{ color: '#9ca3af' }}>{formatDate(r.date)}</Text>
            </View>
            <StarRating value={r.rating} size={14} />
            <Text style={{ color: '#374151' }}>{r.comment}</Text>
          </View>
        ))}
      </View>

      {/* khoảng đệm cuối để dễ kéo */}
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

/* ---------- các helper UI nhỏ ngay trong file ---------- */
function Star({ filled, size = 16 }: { filled: boolean; size?: number }) {
  return <Text style={{ fontSize: size, color: filled ? '#f59e0b' : '#d1d5db' }}>★</Text>;
}

function StarRating({ value, size = 16 }: { value: number; size?: number }) {
  const full = Math.round(value);
  return (
    <View style={{ flexDirection: 'row', gap: 2 }}>
      {[1, 2, 3, 4, 5].map((i) => <Star key={i} filled={i <= full} size={size} />)}
    </View>
  );
}

function InteractiveStars({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  return (
    <View style={{ flexDirection: 'row', gap: 8 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Pressable key={i} onPress={() => onChange(i)}>
          <Star filled={i <= value} size={20} />
        </Pressable>
      ))}
    </View>
  );
}

function formatDate(s: string) {
  // s: YYYY-MM-DD
  const [y, m, d] = s.split('-');
  return `${d}/${m}/${y}`;
}
