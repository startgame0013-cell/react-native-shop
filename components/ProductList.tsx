import React from 'react';
import { View } from 'react-native';
import { PRODUCTS } from '../data/products';
import ProductItem from './ProductItem';

export default function ProductList() {
  return (
    <View>
      {PRODUCTS.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </View>
  );
}