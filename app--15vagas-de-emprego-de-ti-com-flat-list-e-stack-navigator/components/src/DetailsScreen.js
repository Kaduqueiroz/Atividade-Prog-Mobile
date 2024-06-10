// screens/DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function DetailsScreen({ route }) {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.label}>Salário: {item.salary}</Text>
      <Text style={styles.label}>Descrição: {item.description}</Text>
      <Text style={styles.label}>Contato: {item.contact}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default DetailsScreen;
