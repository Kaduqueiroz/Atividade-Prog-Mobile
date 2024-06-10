// screens/HomeScreen.js
import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const vacancies = [
  { id: '1', title: 'Desenvolvedor Backend', salary: 'R$ 3000,00', description: '...', contact: '...' },
  { id: '2', title: 'Engenheiro de Dados', salary: 'R$ 3000,00', description: '...', contact: '...' },
  // Add more vacancies as needed
];

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={vacancies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.title}>{item.title}</Text>
            <Button
              title="Saiba mais"
              onPress={() => navigation.navigate('Details', { item })}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
    marginBottom: 8,
  },
});

export default HomeScreen;
