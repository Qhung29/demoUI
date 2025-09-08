import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import ConfirmModal from '../../components/feedback/ConfirmModal';

export default function ModalDemo() {
  const [open, setOpen] = useState(false);
  return (
    <View style={{ flex:1, alignItems:'center', justifyContent:'center', gap:12 }}>
      <Pressable onPress={()=>setOpen(true)} style={{ padding:12, backgroundColor:'#2e7d32', borderRadius:12 }}>
        <Text style={{ color:'#fff' }}>Mở xác nhận</Text>
      </Pressable>
      <ConfirmModal visible={open} title="Xóa khỏi giỏ?" onOk={()=>setOpen(false)} onCancel={()=>setOpen(false)} />
    </View>
  );
}
