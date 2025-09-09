import React from "react";
import { View, Image, Text, ScrollView, Pressable } from "react-native";
import { PLANTS } from "../../data/plants";
import { useRoute, useNavigation } from "@react-navigation/native";
import { vnd } from "../../utils/format";

import { useAppStore } from '../../hooks/useCart';

type Review = { id: string; user: string; rating: number; comment: string; date: string };

export default function ProductDetailScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const product =
    PLANTS.find((p) => p.id === route.params?.productId) ?? PLANTS[0];

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Image
        source={product.image}
        style={{ width: "100%", height: 260, borderRadius: 14 }}
      />
      <Text style={{ fontSize: 22, fontWeight: "700", marginTop: 12 }}>
        {product.name}
      </Text>
      <Text style={{ color: "#2e7d32", fontSize: 18, fontWeight: "700" }}>
        {vnd(product.price)}
      </Text>
      <Text style={{ marginVertical: 10, lineHeight: 20 }}>
        Cây dễ chăm, phù hợp không gian làm việc và phòng khách. Tưới 2–3 lần/tuần.
      </Text>

      {/* Custom button */}
      <Pressable
        onPress={() => nav.navigate("Giỏ hàng")}
        style={{
          backgroundColor: "#2e7d32",
          paddingVertical: 14,
          borderRadius: 8,
          alignItems: "center",
          marginTop: 12,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: 16 }}>
          Thêm vào giỏ
        </Text>
      </Pressable>
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
