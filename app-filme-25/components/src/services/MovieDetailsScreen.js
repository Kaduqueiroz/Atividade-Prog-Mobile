import React from 'react';
import { View, Text } from 'react-native';

const MovieDetailsScreen = ({ route }) => {
  const { title, synopsis } = route.params;

  return (
    <View style={{ flex: 40, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Text>
      <Text style={{ margin: 20 }}>{synopsis}</Text>
    </View>
  );
};

export default MovieDetailsScreen;
