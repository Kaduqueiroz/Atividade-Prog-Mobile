import React, { useState, useEffect } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSmallFont, setIsSmallFont] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const darkModeValue = await AsyncStorage.getItem('darkMode');
        const smallFontValue = await AsyncStorage.getItem('smallFont');
        if (darkModeValue !== null) setIsDarkMode(JSON.parse(darkModeValue));
        if (smallFontValue !== null) setIsSmallFont(JSON.parse(smallFontValue));
      } catch (e) {
        console.error('Failed to load settings.');
      }
    };

    loadSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      try {
        await AsyncStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        await AsyncStorage.setItem('smallFont', JSON.stringify(isSmallFont));
      } catch (e) {
        console.error('Failed to save settings.');
      }
    };

    saveSettings();
  }, [isDarkMode, isSmallFont]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}>
      <View style={styles.switchContainer}>
        <Text style={styles.switchLabel}>Dia</Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
        <Text style={styles.switchLabel}>Pequeno</Text>
        <Switch value={isSmallFont} onValueChange={setIsSmallFont} />
      </View>
      <Text style={[styles.quote, { fontSize: isSmallFont ? 16 : 24, color: isDarkMode ? '#fff' : '#000' }]}>
        "A vingança nunca é plena, mata a alma e envenena." (Seu Madruga)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  switchLabel: {
    marginHorizontal: 10,
    fontSize: 18,
  },
  quote: {
    textAlign: 'center',
  },
});
