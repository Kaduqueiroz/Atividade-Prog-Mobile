import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
 
function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState('');
 
  function calcularIMC() {
    if (peso === '' || altura === '') {
      alert('Digite o peso e a altura!');
      return;
    }

    const pesoFloat = parseFloat(peso);
    const alturaFloat = parseFloat(altura);
 
    if (isNaN(pesoFloat) || isNaN(alturaFloat)) {
      alert('Digite valores numéricos válidos para peso e altura!');
      return;
    }
 
    const imc = pesoFloat / (alturaFloat * alturaFloat);
    setResultado(`Seu IMC é ${imc.toFixed(2)}`);

    if (imc < 18.5) {
      alert('Você está abaixo do peso.');
    } else if (imc < 25) {
      alert('Seu peso está normal.');
    } else if (imc < 30) {
      alert('Você está com sobrepeso.');
    } else {
      alert('Você está obeso.');
    }
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
 
      <TextInput
        style={styles.input}
        placeholder="Digite o peso (kg)"
        onChangeText={(text) => setPeso(text)}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura (m)"
        onChangeText={(text) => setAltura(text)}
        keyboardType="numeric"
      />
 
      <Button title="Calcular IMC" onPress={calcularIMC} />
 
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
