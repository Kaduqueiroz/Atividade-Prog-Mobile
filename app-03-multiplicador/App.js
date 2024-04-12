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
 
    const resultadoMultiplicacao = parseFloat(numero1) * parseFloat(numero2);
    setResultado(`Resultado: ${resultadoMultiplicacao}`);
  }
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Multiplicador de Números</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o primeiro número"
        onChangeText={(text) => setNumero1(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite o segundo número"
        onChangeText={(text) => setNumero2(text)}
      />
 
      <Button title="Calcular" onPress={calcular} />
 
      <Text style={styles.texto}> {resultado} </Text>
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
  },
  texto: {
    textAlign: 'center',
    fontSize: 25,
    marginTop: 20,
  },
});
 
export default App;
 