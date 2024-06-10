import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

function BitcoinScreen() {
  const [real, setReal] = useState('');
  const [result, setResult] = useState('');

  const convert = () => {
    const conversionRate = 0.000005; // Example conversion rate
    setResult((parseFloat(real) * conversionRate).toFixed(6));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o valor em R$"
        keyboardType="numeric"
        value={real}
        onChangeText={setReal}
      />
      <Button title="Converter" onPress={convert} />
      <Text style={styles.result}>Resultado: {result} BTC</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  result: {
    fontSize: 20,
    marginTop: 16,
    textAlign: 'center',
  },
});

export default BitcoinScreen;
