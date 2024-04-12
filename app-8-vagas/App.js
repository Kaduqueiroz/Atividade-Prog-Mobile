import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const JOB_CARD_BACKGROUND_COLOR = '#FFFFFF';
const JOB_CARD_BORDER_RADIUS = 10;
const JOB_CARD_PADDING = 15;
const JOB_CARD_MARGIN_BOTTOM = 20;
const JOB_CARD_ELEVATION = 3;

const JobVacancyCard = ({ jobTitle, salary, description, contact }) => (
  <View style={styles.card}>
    <Text style={styles.title}>{jobTitle}</Text>
    <Text style={styles.salary}>Salary: {salary}</Text>
    <Text style={styles.description}>{description}</Text>
    <Text style={styles.contact}>Contact: {contact}</Text>
  </View>
);

const JobVacancyList = () => (
  <ScrollView style={styles.container}>
    <JobVacancyCard
      jobTitle="Software Engineer"
      salary="80,000 - 100,000"
      description="Procuramos um Software Engineer talentoso para desenvolver e implementar estratégias de engenharia de software. Fortes habilidades de comunicação e criatividade são essenciais."
      contact="jobs@example.com"
    />
    <JobVacancyCard
      jobTitle="Software Engineer"
      salary="80,000 - 100,000"
      description="Procuramos um Software Engineer talentoso para desenvolver e implementar estratégias de engenharia de software. Fortes habilidades de comunicação e criatividade são essenciais."
      contact="jobs@example.com"
    />
    <JobVacancyCard
      jobTitle="Marketing Manager"
      salary="70,000 - 90,000"
      description="Procuramos um gerente de marketing talentoso para desenvolver e implementar estratégias de marketing. Fortes habilidades de comunicação e criatividade são essenciais."
      contact="hr@example.com"
    />
    
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    backgroundColor: JOB_CARD_BACKGROUND_COLOR,
    borderRadius: JOB_CARD_BORDER_RADIUS,
    padding: JOB_CARD_PADDING,
    marginBottom: JOB_CARD_MARGIN_BOTTOM,
    elevation: JOB_CARD_ELEVATION,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  salary: {
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  contact: {
    fontSize: 16,
    color: 'blue',
  },
});

export default JobVacancyList;
