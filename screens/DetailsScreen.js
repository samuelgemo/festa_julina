import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  const { message, recipient } = route.params;

  return (
    <ImageBackground
      source={require('../assets/img/fundo-envio.png')}
      style={styles.container}
    >
      <Text style={styles.titulo}>💌Mensagem Enviada!💌</Text>
      <Text style={styles.mensagem}>Para: {recipient}</Text>
      <Text style={styles.mensagem}>Mensagem: {message}</Text>
      <Button
        title="Voltar para O Início"
        onPress={() => navigation.navigate('Home')}
        color="#ea253d"
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
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20
  },
  mensagem: {
    fontSize: 18,
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 5,
    marginBottom: 10
  }
});