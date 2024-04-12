import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
 
function App() {
  const [contador, setContador] = useState(0);
 
  const incrementar = () => {
    setContador(prevContador => prevContador + 1);
  };
 
  const decrementar = () => {
    if (contador > 0) {
      setContador(prevContador => prevContador - 1);
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contador de Pessoas</Text>
      <View style={styles.containerContador}>
        <Text style={styles.contador}>{contador}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Adicionar pessoa" onPress={incrementar} color="green" />
        <Button title="Remover pessoa" onPress={decrementar} color="red" />
      </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(106, 180, 185)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  containerContador: {
    width: '100%',
    height: '20%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 20,
  },
  contador: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',  
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});
 
export default App;