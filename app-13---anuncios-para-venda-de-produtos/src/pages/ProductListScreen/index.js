// ProductListScreen.js
import React from 'react';
import { View, Text, Button, ScrollView, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const products = [
  { id: 1, title: 'Camisa', iconName: 'ios-shirt', description: 'Uma camisa bem legal\nR$ 50' },
  { id: 2, title: 'Produto 2', iconName: 'ios-shoes', description: 'Descrição do Produto 2' },
  // Adicione mais produtos conforme necessário
];

const ProductListScreen = ({ navigation }) => {
  return (
    <ScrollView>
      {products.map(product => (
        <View key={product.id} style={styles.productContainer}>
          <Ionicons name={product.iconName} size={100} color="black" />
          <Text style={styles.productTitle}>{product.title}</Text>
          <Button
            title="Ver detalhes"
            onPress={() => navigation.navigate('ProductDetails', { product })}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  productContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});

export default ProductListScreen;
