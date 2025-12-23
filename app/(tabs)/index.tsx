import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Product } from '../data/products';

type Props = {
  product: Product;
};

export default function ProductItem({ product }: Props) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
  },
  price: {
    marginTop: 4,
    color: '#555',
  },
});