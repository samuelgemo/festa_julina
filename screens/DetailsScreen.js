import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function DetailsScreen({ route, navigation }) {
  const { mensagem, destino, remetente } = route.params;

  useEffect(() => {
    salvarMensagem();
  }, []);

  const salvarMensagem = async () => {
    try {
      const novaMensagem = { remetente, destino, mensagem };
      const historico = await AsyncStorage.getItem('historicoMensagens');
      const mensagens = historico ? JSON.parse(historico) : [];
      mensagens.push(novaMensagem);
      await AsyncStorage.setItem('historicoMensagens', JSON.stringify(mensagens));
    } catch (error) {
      console.error('Erro ao salvar mensagem:', error);
    }
  };

  return (
    <ImageBackground
      source={require('../assets/img/fundo-envio.png')}
      style={styles.container}
    >
      <Text style={styles.titulo}>💌Mensagem Enviada!💌</Text>
      <Text style={styles.mensagem}>De: {remetente}</Text>
      <Text style={styles.mensagem}>Para: {destino}</Text>
      <Text style={styles.mensagem}>Mensagem: {mensagem}</Text>
      <Button
        title="Voltar para O Início"
        onPress={() => navigation.navigate('Home')}
        color="#ffa3a5"
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
