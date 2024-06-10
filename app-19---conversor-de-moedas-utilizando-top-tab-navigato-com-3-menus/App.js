import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DollarScreen from './components/src/DollarScreen';
import EuroScreen from './components/src/EuroScreen';
import BitcoinScreen from './components/src/BitcoinScreen';

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dólar" component={DollarScreen} />
      <Tab.Screen name="Euro" component={EuroScreen} />
      <Tab.Screen name="Bitcoin" component={BitcoinScreen} />
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
