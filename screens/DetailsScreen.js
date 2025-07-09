import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { message, recipient } = route.params;

  return (
    <ImageBackground
      source={{ uri: 'https://i.imgur.com/FYv7tEJ.jpg' }}
      style={styles.container}
    >
      <Text style={styles.title}>💌 Mensagem Enviada!</Text>
      <Text style={styles.message}>Para: {recipient}</Text>
      <Text style={styles.message}>Mensagem: {message}</Text>
      <Button
        title="Voltar para a Home"
        onPress={() => navigation.navigate('Home')}
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  message: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 5,
    marginBottom: 10
  }
});