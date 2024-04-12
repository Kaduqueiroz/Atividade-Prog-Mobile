import React, { useState } from 'react';
import { View, Text, Switch, TextInput, ScrollView, Button, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import styles from './styles'

const App = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [accountLimit, setAccountLimit] = useState(0);
  const [isBrazilian, setIsBrazilian] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  const handleConfirm = () => {
    setConfirmed(true);
    console.log('Nome:', name);
    console.log('Idade:', age);
    console.log('Sexo:', gender);
    console.log('Escolaridade:', education);
    console.log('Limite na conta:', accountLimit);
    console.log('Brasileiro:', isBrazilian);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Conta Bancária</Text>
      <ScrollView style={styles.scrollView}>
        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={age}
          onChangeText={(text) => setAge(text)}
          keyboardType="numeric"
        />
        <Picker
          style={styles.picker}
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={education}
          onValueChange={(itemValue) => setEducation(itemValue)}
        >
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Ensino Médio" value="Ensino Médio" />
          <Picker.Item label="Graduação" value="Graduação" />
          <Picker.Item label="Pós-graduação" value="Pós-graduação" />
        </Picker>
        <Slider
          style={styles.slider}
          minimumValue={0}
          maximumValue={1000}
          value={accountLimit}
          onValueChange={(value) => setAccountLimit(value)}
        />
        <Text style={styles.limit}>Limite {accountLimit.toFixed(0)}</Text>
        <View style={styles.switchContainer}>
          <Text>Brasileiro:</Text>
          <Switch
            value={isBrazilian}
            onValueChange={(value) => setIsBrazilian(value)}
          />
        </View>
        <Button
          title="Confirmar"
          onPress={handleConfirm}
        />
        {confirmed && (
          <View style={styles.confirmation}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {age}</Text>
            <Text>Sexo: {gender}</Text>
            <Text>Escolaridade: {education}</Text>
            <Text>Limite na conta: R${accountLimit.toFixed(2)}</Text>
            <Text>Brasileiro: {isBrazilian ? 'Sim' : 'Não'}</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
};

export default App;
