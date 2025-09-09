// screens/Hienthi/ShopInfoScreen.tsx
import React, { useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Linking,
  Alert,
} from "react-native";

// ✅ Dùng SafeAreaView & hook từ react-native-safe-area-context
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";

const SHOP_NAME = "GreenShop";
const ADDRESS = "123 Hoa Lan, Q.Phú Nhuận, TP.HCM";
const HOTLINE = "0900000000";
const OPEN_HOUR = 8;
const CLOSE_HOUR = 21;

export default function ShopInfoScreen() {
  const insets = useSafeAreaInsets();

  const openNow = useMemo(() => {
    const h = new Date().getHours();
    return h >= OPEN_HOUR && h < CLOSE_HOUR;
  }, []);

  const onCall = () => Linking.openURL(`tel:${HOTLINE}`);
  const onDirections = () =>
    Linking.openURL(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        ADDRESS
      )}`
    );
  const onShare = () =>
    Alert.alert("Giới thiệu", "Chuyên cây nội thất, xương rồng, sen đá…");

  return (
    // ✅ edges chỉ có tác dụng với SafeAreaView của safe-area-context
    <SafeAreaView
      style={[s.container, { paddingTop: insets.top }]}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={[
          s.content,
          { paddingBottom: 32 + insets.bottom }, // chừa đáy theo máy/tab bar
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={s.header}>
          <View style={s.logoCircle}>
            <Ionicons name="leaf" size={28} color="#2e7d32" />
          </View>
          <Text style={s.title}>{SHOP_NAME}</Text>
          <Text style={s.caption}>Chuyên cây nội thất, xương rồng, sen đá…</Text>

          {/* Chips */}
          <View style={s.chipRow}>
            <View style={s.chip}>
              <MaterialIcons name="support-agent" size={16} color="#2e7d32" />
              <Text style={s.chipTxt}>Tư vấn miễn phí</Text>
            </View>
            <View style={s.chip}>
              <MaterialIcons name="local-shipping" size={16} color="#2e7d32" />
              <Text style={s.chipTxt}>Giao nhanh</Text>
            </View>
            <View style={s.chip}>
              <MaterialIcons name="verified-user" size={16} color="#2e7d32" />
              <Text style={s.chipTxt}>Bảo hành 7 ngày</Text>
            </View>
          </View>
        </View>

        {/* Card: Thông tin chính */}
        <View style={s.card}>
          {/* Địa chỉ */}
          <View style={s.row}>
            <MaterialIcons name="location-on" size={22} color="#256d3a" />
            <View style={s.rowBody}>
              <Text style={s.rowTitle}>Địa chỉ</Text>
              <Text style={s.rowDesc}>{ADDRESS}</Text>
            </View>
            <Pressable onPress={onDirections} style={s.rowBtn}>
              <MaterialIcons name="directions" size={18} color="#fff" />
              <Text style={s.rowBtnTxt}>Chỉ đường</Text>
            </Pressable>
          </View>

          {/* Giờ mở cửa */}
          <View style={s.divider} />
          <View style={s.row}>
            <MaterialIcons name="schedule" size={22} color="#256d3a" />
            <View style={s.rowBody}>
              <Text style={s.rowTitle}>Giờ mở cửa</Text>
              <Text style={s.rowDesc}>08:00 – 21:00 mỗi ngày</Text>
              <View
                style={[
                  s.badge,
                  { backgroundColor: openNow ? "#e6f5ec" : "#feeceb" },
                ]}
              >
                <View
                  style={[
                    s.dot,
                    { backgroundColor: openNow ? "#2e7d32" : "#e11d48" },
                  ]}
                />
                <Text
                  style={{
                    color: openNow ? "#256d3a" : "#b91c1c",
                    fontWeight: "700",
                  }}
                >
                  {openNow ? "Đang mở cửa" : "Đã đóng cửa"}
                </Text>
              </View>
            </View>
          </View>

          {/* Hotline */}
          <View style={s.divider} />
          <View style={s.row}>
            <MaterialIcons name="call" size={22} color="#256d3a" />
            <View style={s.rowBody}>
              <Text style={s.rowTitle}>Hotline</Text>
              <Text style={s.rowDesc}>{HOTLINE}</Text>
            </View>
            <Pressable onPress={onCall} style={[s.rowBtn, { backgroundColor: "#2e7d32" }]}>
              <MaterialIcons name="phone" size={18} color="#fff" />
              <Text style={s.rowBtnTxt}>Gọi</Text>
            </Pressable>
          </View>
        </View>

        {/* Card: Giới thiệu */}
        <View style={s.card}>
          <Text style={s.sectionTitle}>Giới thiệu</Text>
          <Text style={s.intro}>
            Chúng tôi cung cấp đa dạng cây nội thất, sen đá, xương rồng, phụ kiện
            chăm sóc. Chính sách tư vấn chọn cây theo ánh sáng - diện tích phòng,
            bảo hành đổi cây trong 7 ngày.
          </Text>

          <View style={s.actionRow}>
            <Pressable onPress={onShare} style={s.actionBtn}>
              <MaterialIcons name="info" size={18} color="#2e7d32" />
              <Text style={s.actionTxt}>Xem thêm</Text>
            </Pressable>
          </View>
        </View>

        {/* Map placeholder */}
        <View style={s.mapCard}>
          <MaterialIcons name="map" size={22} color="#256d3a" />
          <Text style={{ marginLeft: 8, color: "#256d3a", fontWeight: "700" }}>
            Xem vị trí trên bản đồ
          </Text>
          <Pressable onPress={onDirections} style={[s.rowBtn, { marginLeft: "auto" }]}>
            <MaterialIcons name="directions" size={18} color="#fff" />
            <Text style={s.rowBtnTxt}>Mở Maps</Text>
          </Pressable>
        </View>

        <Text style={s.copy}>© 2025 GreenShop</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_MAX_W = 420;

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb" },
  content: { padding: 16, alignItems: "center" },

  header: {
    width: "100%",
    maxWidth: CARD_MAX_W,
    alignItems: "center",
    marginBottom: 8,
  },
  logoCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "#e9f5ee",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  title: { fontSize: 22, fontWeight: "800", color: "#1b4332" },
  caption: { color: "#4b8264", marginTop: 4, textAlign: "center" },

  chipRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9f5ee",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
  },
  chipTxt: { marginLeft: 6, color: "#256d3a", fontWeight: "600" },

  card: {
    width: "100%",
    maxWidth: CARD_MAX_W,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  row: { flexDirection: "row", alignItems: "center" },
  rowBody: { flex: 1, marginLeft: 10 },
  rowTitle: { fontWeight: "700", color: "#111827" },
  rowDesc: { color: "#6b7280", marginTop: 2 },

  rowBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e7d32",
    paddingHorizontal: 10,
    height: 36,
    borderRadius: 10,
    marginLeft: 8,
  },
  rowBtnTxt: { color: "#fff", fontWeight: "700", marginLeft: 6 },

  badge: {
    marginTop: 8,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 999,
  },
  dot: { width: 8, height: 8, borderRadius: 4, marginRight: 6 },

  divider: { height: 1, backgroundColor: "#f1f5f9", marginVertical: 12 },

  sectionTitle: { fontWeight: "800", color: "#1b4332", fontSize: 16 },
  intro: { color: "#374151", marginTop: 8, lineHeight: 20 },

  actionRow: { flexDirection: "row", marginTop: 12 },
  actionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9f5ee",
    paddingHorizontal: 12,
    height: 36,
    borderRadius: 10,
  },
  actionTxt: { color: "#256d3a", fontWeight: "700", marginLeft: 6 },

  mapCard: {
    width: "100%",
    maxWidth: CARD_MAX_W,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 2,
  },

  copy: { marginTop: 16, color: "#9aa3af" },
});
