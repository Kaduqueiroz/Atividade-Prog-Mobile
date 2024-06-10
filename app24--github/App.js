import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';
import api from './components/src/services/api';

export default function App() {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await api.get('/users/alexz7k');
        setProfileData(response.data);
      } catch (error) {
        console.error('Erro ao buscar perfil:', error);
      }
    }

    fetchProfile();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do GitHub</Text>
      {profileData && (
        <View style={styles.profileContainer}>
          <Image
            style={styles.avatar}
            source={{ uri: profileData.avatar_url }}
          />
          <Text style={styles.username}>{profileData.name}</Text>
          <Text style={styles.id}>ID: {profileData.id}</Text>
          <Text style={styles.bio}>{profileData.bio}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Repositórios públicos:</Text>
            <Text style={styles.info}>{profileData.public_repos}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Criado em:</Text>
            <Text style={styles.info}>{new Date(profileData.created_at).toLocaleDateString()}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Seguidores:</Text>
            <Text style={styles.info}>{profileData.followers}</Text>
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.label}>Seguindo:</Text>
            <Text style={styles.info}>{profileData.following}</Text>
          </View>
          <Text style={styles.education}>Formação acadêmica: Cursando Fatec-PG</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  id: {
    fontSize: 18,
    marginBottom: 10,
  },
  bio: {
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  info: {
    flex: 1,
  },
  education: {
    marginTop: 10,
    fontStyle: 'italic',
  },
});
