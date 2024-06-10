import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="TaskList">
        <Stack.Screen name="TaskList" component={TaskList} options={{ title: 'Tarefas' }} />
        <Stack.Screen name="TaskForm" component={TaskForm} options={{ title: 'Incluir/Editar Tarefa' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
