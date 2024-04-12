import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
 
function App() {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [resultado, setResultado] = useState('');
 
  function calcular() {
    if (numero1 === '' || numero2 === '') {
      alert('Digite ambos os números!');
      return;
    }
 
    const resultadoDivisao = parseFloat(numero1) / parseFloat(numero2);
    setResultado(`Resultado: ${resultadoDivisao}`);
  
    if (resultadoDivisao <= 0.7) {
      alert('Álcool é mais vantajoso!');
    } else {
      alert('Gasolina é mais vantajosa!');
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comparador de Combustível</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o valor do álcool"
        onChangeText={(text) => setNumero1(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o valor da gasolina"
        onChangeText={(text) => setNumero2(text)}
        keyboardType="numeric"
      />
 
      <Button title="Calcular" onPress={calcular} />
 
      <Text style={styles.texto}>{resultado}</Text>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
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
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
});
 
export default App;
