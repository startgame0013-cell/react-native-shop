import { StyleSheet, Text, View } from 'react-native';
import { PRODUCTS } from '../../data/products';

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      {PRODUCTS.map(product => (
        <View key={product.id} style={styles.item}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
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