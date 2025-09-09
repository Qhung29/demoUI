
export type Plant = {
  id: string;
  name: string;
  price: number;
  image: number; 
  category: 'Cây để bàn' | 'Cây nội thất' | 'Xương rồng' | 'Sen đá';
  rating?: number;
};


export const PLANTS: Plant[] = [
  { id: 'p1', name: 'Monstera Deliciosa', price: 190000, image: require('../assets/plant1.png'), category: 'Cây nội thất', rating: 4.7 },
  { id: 'p2', name: 'Xương rồng Tai Thỏ', price: 80000, image: require('../assets/plant2.png'), category: 'Xương rồng', rating: 4.5 },
  { id: 'p3', name: 'Sen đá Ngọc', price: 65000, image: require('../assets/plant3.png'), category: 'Sen đá', rating: 4.6 },
  { id: 'p4', name: 'Cọ cảnh Mini', price: 120000, image: require('../assets/plant4.png'), category: 'Cây để bàn', rating: 4.3 },
  { id: 'p5', name: 'Monstera Deliciosa', price: 190000, image: require('../assets/plant1.png'), category: 'Cây nội thất', rating: 4.7 },
  { id: 'p6', name: 'Xương rồng Tai Thỏ', price: 80000, image: require('../assets/plant2.png'), category: 'Xương rồng', rating: 4.5 },
  { id: 'p7', name: 'Sen đá Ngọc', price: 65000, image: require('../assets/plant3.png'), category: 'Sen đá', rating: 4.6 },
  { id: 'p8', name: 'Cọ cảnh Mini', price: 120000, image: require('../assets/plant4.png'), category: 'Cây để bàn', rating: 4.3 },
];