import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/FYv7tEJ.jpg' }}  // imagem online de festa junina
      style={styles.container}
    >
      <Text style={styles.title}>🎊 Correio Elegante Digital 🎊</Text>
      <Text style={styles.bandeirinhas}>🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈🏳️‍🌈</Text>
      <Button
        title="Enviar Mensagem"
        onPress={() => navigation.navigate('Conteúdo')}
        color="#ff4500"
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  bandeirinhas: {
    fontSize: 30,
    marginBottom: 20
  }
});