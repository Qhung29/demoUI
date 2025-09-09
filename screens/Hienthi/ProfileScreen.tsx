import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Pressable,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation  } from "@react-navigation/native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

export default function ProfileScreen() {
  const nav = useNavigation<any>();
  const insets = useSafeAreaInsets();

  const user = {
    name: "GodThunderZeus",
    email: "zeus10@example.com",
    avatar: require("../../assets/hinhanh.jpg"), 
  };

  const onEditProfile = () => {
    Alert.alert("Chỉnh sửa", "Đi tới trang chỉnh sửa hồ sơ…");
    // nav.navigate("EditProfile");
  };

  const onShare = () => {
  nav.navigate("Giỏ hàng");   
  };

  const onLogout = () => {
    Alert.alert("Đăng xuất", "Bạn có chắc chắn muốn đăng xuất?", [
      { text: "Huỷ", style: "cancel" },
      {
        text: "Đăng xuất",
        style: "destructive",
        onPress: () => {
          nav.reset({
            index: 0,
            routes: [{ name: "AuthStack" }], // 👈 về Login/Auth
          });
        },
      },
    ]);
  };

  return (
    <SafeAreaView
      style={[s.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}
      edges={["top", "left", "right"]}
    >
      <ScrollView
        contentContainerStyle={{ padding: 16, alignItems: "center" }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <View style={s.header}>
          <Image source={user.avatar} style={s.avatar} />
          <Text style={s.name}>{user.name}</Text>
          <Text style={s.email}>{user.email}</Text>

          {/* Nút chỉnh sửa */}
          <Pressable onPress={onEditProfile} style={s.editBtn}>
            <MaterialIcons name="edit" size={20} color="#fff" />
            <Text style={s.editTxt}>Chỉnh sửa</Text>
          </Pressable>
        </View>

        {/* Menu */}
<View style={s.menu}>
  <Pressable style={s.menuItem}>
    <MaterialIcons name="shopping-bag" size={22} color="#2e7d32" />
    <Text style={s.menuText}>Đơn hàng của tôi</Text>
  </Pressable>

  {/* Giỏ hàng -> navigate */}
  <Pressable onPress={onShare} style={s.menuItem}>
    <MaterialIcons name="shopping-cart" size={22} color="#2e7d32" />
    <Text style={s.menuText}>Giỏ hàng</Text>
  </Pressable>

  <Pressable style={s.menuItem}>
    <MaterialIcons name="settings" size={22} color="#2e7d32" />
    <Text style={s.menuText}>Cài đặt</Text>
  </Pressable>

  <Pressable
    style={[s.menuItem, { borderBottomWidth: 0 }]}
    onPress={onLogout}
  >
    <MaterialIcons name="logout" size={22} color="#e11d48" />
    <Text style={[s.menuText, { color: "#e11d48" }]}>Đăng xuất</Text>
  </Pressable>
</View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f6f7fb" },
  header: {
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 12,
  },
  name: { fontSize: 20, fontWeight: "700", color: "#111827" },
  email: { fontSize: 14, color: "#6b7280", marginTop: 4 },
  editBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2e7d32",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginTop: 12,
  },
  editTxt: { color: "#fff", marginLeft: 6, fontWeight: "600" },
  menu: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#e5e7eb",
  },
  menuText: {
    marginLeft: 12,
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },
});
