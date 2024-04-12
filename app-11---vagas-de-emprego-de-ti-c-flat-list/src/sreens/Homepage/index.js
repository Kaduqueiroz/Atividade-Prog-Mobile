import React from 'react';
import { View, Text, FlatList } from 'react-native';
import styles from './style';
import jobs from '../../context/data';

const HomePage = () => {
  const renderJobItem = ({ item }) => (
    <View style={styles.jobItem}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <Text style={styles.salary}>Salário: {item.salary}</Text>
      <Text style={styles.description}>Descrição: {item.description}</Text>
      <Text style={styles.contact}>Contato: {item.contact}</Text>
    </View>
  );

  return (
    <FlatList
        data={jobs}
        renderItem={renderJobItem}
        keyExtractor={(item, index) => index.toString()}
      />
  );
};

export default HomePage;
