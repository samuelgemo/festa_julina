import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image } from 'react-native';

export default function ContentScreen({ navigation }) {
  const [message, setMessage] = useState('');
  const [recipient, setRecipient] = useState('');

  return (
    <ImageBackground
      source={require('../assets/img/fundo-msg.png')}
      style={styles.container}
      resizeMode="cover"
    >
      <Text style={styles.titulo}>📜Escreva sua mensagem💕</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem..."
        placeholderTextColor="#666"
        value={message}
        onChangeText={setMessage}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome do destinatário..."
        placeholderTextColor="#666"
        value={recipient}
        onChangeText={setRecipient}
      />
      <Button
        title="Enviar Mensagem"
        onPress={() => navigation.navigate('Detalhes', { message, recipient })}
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 8,
    borderRadius: 8,
    marginBottom: 20
  },
  input: {
    backgroundColor: '#fff',
    width: '80%',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});