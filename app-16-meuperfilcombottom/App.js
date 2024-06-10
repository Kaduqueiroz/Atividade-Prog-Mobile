import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const MyProfileScreen = () => (
  <View style={styles.container}>
    <Text>Meu Perfil</Text>
  </View>
);

const PersonalScreen = () => (
  <View style={styles.container}>
    <Text>Pessoal</Text>
  </View>
);

const EducationScreen = () => (
  <View style={styles.container}>
    <Text>Formação</Text>
  </View>
);

const ExperienceScreen = () => (
  <View style={styles.container}>
    <Text>Experiência</Text>
  </View>
);

const App = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Meu Perfil" component={MyProfileScreen} />
      <Tab.Screen name="Pessoal" component={PersonalScreen} />
      <Tab.Screen name="Formação" component={EducationScreen} />
      <Tab.Screen name="Experiência" component={ExperienceScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
