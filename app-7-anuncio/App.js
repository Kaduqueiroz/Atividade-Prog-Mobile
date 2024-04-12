import React from 'react';
import { View, ScrollView, Image, TextInput, StyleSheet, Text } from 'react-native';

const images = [
  require('./assets/download.jpg'),
  require('./assets/images.jpg'),
   require('./assets/images.jpg'),
];

const App = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.anuncio}>ANUNCIO</Text>
      <ScrollView horizontal={true} style={styles.scrollView}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
            <Text>Ferrari - Vermelha </Text>
            <Text>Valor 1.000,00</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50, 
  },
  scrollView: {
    flexDirection: 'row', 
    paddingVertical: 20,
  },
  imageContainer: {
    marginRight: 20,
  },
  image: {
    width: 150,
    height: 150,
  },
  anuncio:{
    fontSize: 30,
    textAlign: `center`,
  }
});

export default App;
