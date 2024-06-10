// App.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, ActivityIndicator } from 'react-native';
import api from './components/src/services/api';

export default function App() {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState(null);
  const [loading, setLoading] = useState(false);

  const consultaCep = async (cep) => {
    setLoading(true);
    try {
      const response = await api.get(`/${cep}/json/`);
      if (response.data.erro) {
        setEndereco(null);
        alert('CEP não encontrado.');
      } else {
        setEndereco(response.data);
      }
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
      alert('Erro ao consultar CEP. Por favor, tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CEP {cep} - ENDEREÇO</Text>

      <TextInput
        style={styles.input}
        value={cep}
        onChangeText={(texto) => setCep(texto)}
        placeholder="Digite o CEP"
        keyboardType="numeric"
      />

      <Button title="Consultar CEP" onPress={() => consultaCep(cep)} disabled={loading} />

      {loading && <ActivityIndicator style={{ marginTop: 20 }} size="large" color="#0000ff" />}

      {endereco && (
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{endereco.logradouro}</Text>
          <Text style={styles.info}>CEP: {endereco.cep}</Text>
          <Text style={styles.info}>Bairro: {endereco.bairro}</Text>
          <Text style={styles.info}>Cidade: {endereco.localidade}</Text>
          <Text style={styles.info}>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
  infoContainer: {
    marginTop: 20,
    alignItems: 'flex-start',
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
  },
});
