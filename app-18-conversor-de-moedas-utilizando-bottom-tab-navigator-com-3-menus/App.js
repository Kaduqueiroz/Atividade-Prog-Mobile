import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import DollarScreen from './components/src/DollarScreen';
import EuroScreen from './components/src/EuroScreen';
import BitcoinScreen from './components/src/BitcoinScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Dollar"
        component={DollarScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="dollar" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Euro"
        component={EuroScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="euro" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Bitcoin"
        component={BitcoinScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="bitcoin" color={color} size={size} />
          ),
        }}
      />
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
