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
  Image,
  Dimensions,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SHOP_NAME = "GreenShop";
const ADDRESS = "123 Hoa Lan, Q.Phú Nhuận, TP.HCM";
const HOTLINE = "0900000000";
const OPEN_HOUR = 8;
const CLOSE_HOUR = 21;

export default function ShopInfoScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation<any>();
  const screenW = Dimensions.get("window").width;
  // Responsive: 24px padding 2 bên, tối đa 440 cho tablet nhỏ, không bó cứng 420
  const cardMaxW = Math.min(440, screenW - 24 * 2);

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
  const onShare = () => {
  navigation.navigate("Danh mục");   // 👈 trỏ đến tab Danh mục
  };

  return (
    <SafeAreaView
      style={[s.container, { paddingTop: insets.top }]}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={[
          s.content,
          { paddingBottom: 32 + insets.bottom },
        ]}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={[s.header, { maxWidth: cardMaxW }]}>
          <Image
            source={require("../../assets/logotree2-Photoroom.png")}
            style={s.brandLogo}
            resizeMode="contain"
          />
          <Text style={s.title}>{SHOP_NAME}</Text>
          <Text style={s.caption}>Chuyên cây nội thất, xương rồng, sen đá…</Text>

          {/* Chips */}
          <View style={[s.chipRow, { maxWidth: cardMaxW }]}>
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
        <View style={[s.card, { maxWidth: cardMaxW, alignSelf: "center" }]}>
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
            <Pressable onPress={onCall} style={[s.rowBtn, s.rowBtnPrimary]}>
              <MaterialIcons name="phone" size={18} color="#fff" />
              <Text style={s.rowBtnTxt}>Gọi</Text>
            </Pressable>
          </View>
        </View>

        {/* Card: Giới thiệu */}
        <View style={[s.card, { maxWidth: cardMaxW, alignSelf: "center" }]}>
          <Text style={s.sectionTitle}>Giới thiệu</Text>
          <Text style={s.intro}>
            Chúng tôi cung cấp đa dạng cây nội thất, sen đá, xương rồng, phụ
            kiện chăm sóc. Chính sách tư vấn chọn cây theo ánh sáng - diện tích
            phòng, bảo hành đổi cây trong 7 ngày.
          </Text>

          <View style={s.actionRow}>
            <Pressable onPress={onShare} style={s.actionBtn}>
              <MaterialIcons name="info" size={18} color="#2e7d32" />
              <Text style={s.actionTxt}>Xem thêm</Text>
            </Pressable>
          </View>
        </View>

        {/* Map placeholder */}
        <View style={[s.mapCard, { maxWidth: cardMaxW, alignSelf: "center" }]}>
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

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb" },
  content: {
    paddingHorizontal: 24,     // 24 cho cân lề
    paddingTop: 8,
    alignItems: "center",
    rowGap: 12 as any,         // RN mới hỗ trợ, nếu cũ bỏ dòng này
  },

  // Header
  header: {
    width: "100%",
    alignItems: "center",
    marginBottom: 6,
  },
  brandLogo: { width: 84, height: 84, marginBottom: 8 },
  title: { fontSize: 22, fontWeight: "800", color: "#1b4332" },
  caption: { color: "#4b8264", marginTop: 4, textAlign: "center" },

  // Chips
  chipRow: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 10,
    marginHorizontal: -4, // tạo gutter đều
  },

  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e9f5ee",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    marginHorizontal: 4,
    marginBottom: 8,
  },
  chipTxt: { marginLeft: 6, color: "#256d3a", fontWeight: "600" },

  // Card
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    // viền rất nhẹ giúp tách nền xám
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#E9EEF3",
    // đổ bóng 
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },

  // Rows in card
  row: { flexDirection: "row", alignItems: "center" },
  rowBody: { flex: 1, marginLeft: 10 },
  rowTitle: { fontWeight: "700", color: "#111827" },
  rowDesc: { color: "#6b7280", marginTop: 2 },

  rowBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e7d32",
    paddingHorizontal: 12,
    height: 40,                 
    borderRadius: 12,
  },
  rowBtnPrimary: { backgroundColor: "#2e7d32" },
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

  divider: { height: 1, backgroundColor: "#EEF2F6", marginVertical: 12 },

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
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#E9EEF3",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 1,
  },

  copy: { marginTop: 16, color: "#9aa3af", alignSelf: "center" },
});
