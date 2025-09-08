import React from 'react';
import { ScrollView } from 'react-native';
import SkeletonCard from '../../components/feedback/Skeleton';

export default function SkeletonDemo() {
  return (
    <ScrollView contentContainerStyle={{ padding:12, flexDirection:'row', flexWrap:'wrap' }}>
      {Array.from({ length: 6 }).map((_, i)=><SkeletonCard key={i} />)}
    </ScrollView>
  );
}
