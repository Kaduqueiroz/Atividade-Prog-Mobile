import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  TextInput,
  ScrollView,
  Button,
  StyleSheet,
} from 'react-native';

import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';
import styles from './styles';

const App = ({ navigation }) => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [education, setEducation] = useState('');
  const [accountLimit, setAccountLimit] = useState(0);
  const [isBrazilian, setIsBrazilian] = useState(false);

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
          onValueChange={(itemValue) => setGender(itemValue)}>
          <Picker.Item label="Selecione" value="Selecione" />
          <Picker.Item label="Masculino" value="Masculino" />
          <Picker.Item label="Feminino" value="Feminino" />
        </Picker>
        <Picker
          style={styles.picker}
          selectedValue={education}
          onValueChange={(itemValue) => setEducation(itemValue)}>
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
          onPress={() => {
            // Verifica se todos os campos estão preenchidos
            if (name && age && gender && education && accountLimit > 0) {
              navigation.navigate('Resultado', {
                nome: name,
                idade: age,
                sexo: gender,
                escolaridade: education,
                limiteConta: accountLimit,
                brasileiro: isBrazilian,
              });
            } else {
              // Caso algum campo não esteja preenchido, exiba uma mensagem de erro
              alert('Por favor, preencha todos os campos do formulário.');
            }
          }}
        />
      </ScrollView>
    </View>
  );
};

export default App;
