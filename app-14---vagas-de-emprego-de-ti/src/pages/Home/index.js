// ./src/pages/Home/Index.js
import React from 'react';
import { ScrollView, View, Text, Button, StyleSheet } from 'react-native';

const jobList = [
  { id: 1, title: 'Desenvolvedor Front-end', description: 'Descrição do cargo de Desenvolvedor Front-end... \nSalário: R$5000' },
  { id: 2, title: 'Desenvolvedor Back-end', description: 'Descrição do cargo de Desenvolvedor Back-end... \nSalário: R$3000' },
  { id: 3, title: 'Engenheiro de Dados', description: 'Descrição do cargo de Engenheiro de Dados... \nSalário: R$2000' },
];

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {jobList.map(job => (
        <View key={job.id} style={styles.jobContainer}>
          <Text style={styles.jobTitle}>{job.title}</Text>
          <Button
            title="Saiba mais"
            onPress={() => navigation.navigate('Details', { job })}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  jobContainer: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default HomeScreen;
