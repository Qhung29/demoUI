import React from 'react';
import { Modal, View, Text, Pressable } from 'react-native';

export default function ConfirmModal({ visible, title, onOk, onCancel }:{
  visible:boolean; title:string; onOk:()=>void; onCancel:()=>void;
}) {
  return (
    <Modal visible={visible} transparent animationType="fade">
      <View style={{ flex:1, backgroundColor:'rgba(0,0,0,0.35)', justifyContent:'center', padding:24 }}>
        <View style={{ backgroundColor:'#fff', borderRadius:16, padding:16, gap:12 }}>
          <Text style={{ fontWeight:'700', fontSize:16 }}>{title}</Text>
          <View style={{ flexDirection:'row', justifyContent:'flex-end', gap:12 }}>
            <Pressable onPress={onCancel}><Text>Hủy</Text></Pressable>
            <Pressable onPress={onOk}><Text style={{ color:'#d32f2f', fontWeight:'700' }}>Đồng ý</Text></Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
}
