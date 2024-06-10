import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, ScrollView } from 'react-native';
import { fetchMovies } from './api.js';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies()
      .then(data => {
        setMovies(data);
      });
  }, []);


  const navigation = useNavigation();

  const handleMovieDetails = (title, synopsis) => {
    navigation.navigate('MovieDetails', {});
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }}>APP de Filmes</Text>
      <ScrollView>
        {movies.slice(0, 2).map(movie => (
          <View key={movie.id} style={{ alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 18 }}>{movie.nome}</Text>
            <Image
              source={{ uri: movie.foto }}
              style={{ width: 200, height: 300, resizeMode: 'contain', marginTop: 10 }}
            />
            <Button
              title="Ler mais"
              onPress={() => handleMovieDetails(movie.nome, movie.sinopse)}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
