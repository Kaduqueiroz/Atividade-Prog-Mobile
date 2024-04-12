import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Formulario from './src/screens/Formulario/index';
import Resultado from './src/screens/Resutado/index';

const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Formulario" component={Formulario} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}