// ./src/pages/Details/Details.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { job } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.jobTitle}>{job.title}</Text>
      <Text>{job.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 19,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default DetailsScreen;
