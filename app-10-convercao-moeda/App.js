import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const ConversorMoedas = () => {
  const [valorReal, setValorReal] = useState('');
  const [valorConvertido, setValorConvertido] = useState('');

  const converterMoeda = (moeda) => {
    let valorConvertido;
    if (moeda === 'dolar') {
      valorConvertido = parseFloat(valorReal) * 5;
    } else if (moeda === 'euro') {
      valorConvertido = parseFloat(valorReal) * 6;
    }
    setValorConvertido(valorConvertido.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text>Insira o valor em Real:</Text>
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        value={valorReal}
        onChangeText={(text) => setValorReal(text)}
      />
      <View style={styles.buttonsContainer}>
        <Button 
          title="Converter para Dólar" 
          onPress={() => converterMoeda('dolar')}
          style={styles.button}
          titleStyle={styles.buttonText} // Aplica o estilo ao texto do botão
        />
        <Button 
          title="Converter para Euro" 
          onPress={() => converterMoeda('euro')}
          style={styles.button}
          titleStyle={styles.buttonText} // Aplica o estilo ao texto do botão
        />
      </View>
      <Text>Valor convertido: {valorConvertido}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    borderColor: 'gray',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginVertical: 10,
  },
  button: {
    width: 10, // Define a largura desejada para o botão
    height: 40, // Define a altura desejada para o botão
  },
  buttonText: {
    fontSize: 8, // Define o tamanho da fonte do texto do botão
  },
});

export default ConversorMoedas;
