import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Text, View } from 'react-native';
import axios from 'axios';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('BRL');
  const [convertedValue, setConvertedValue] = useState(null);

  const convertCurrency = async () => {
    const apiUrl = `https://economia.awesomeapi.com.br/json/last/${fromCurrency}-${toCurrency}`;
    try {
      const response = await axios.get(apiUrl);
      const rate = response.data[`${fromCurrency}${toCurrency}`].ask;
      const result = (parseFloat(amount) * parseFloat(rate)).toFixed(2);
      setConvertedValue(result);
    } catch (error) {
      console.error(error);
      setConvertedValue('Erro');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conversor de Moedas</Text>
      <TextInput
        style={styles.input}
        placeholder="Valor"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />
      <Picker
        selectedValue={fromCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setFromCurrency(itemValue)}
      >
        <Picker.Item label="USD" value="USD" />
        <Picker.Item label="EUR" value="EUR" />
        <Picker.Item label="BTC" value="BTC" />
      </Picker>
      <Picker
        selectedValue={toCurrency}
        style={styles.picker}
        onValueChange={(itemValue) => setToCurrency(itemValue)}
      >
        <Picker.Item label="BRL" value="BRL" />
      </Picker>
      <Button title="Converter" onPress={convertCurrency} />
      {convertedValue && (
        <Text style={styles.result}>Valor convertido: {convertedValue}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
