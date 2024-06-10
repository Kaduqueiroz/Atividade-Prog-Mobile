import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import PersonalScreen from './components/src/PersonalScreen';
import EducationScreen from './components/src/EducationScreen';
import ExperienceScreen from './components/src/ExperienceScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Pessoal" component={PersonalScreen} />
      <Tab.Screen name="Formação" component={EducationScreen} />
      <Tab.Screen name="Experiência" component={ExperienceScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
