import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HistoricoScreen() {
  const [mensagensEnviadas, setMensagensEnviadas] = useState([]);

  useEffect(() => {
    const carregarMensagens = async () => {
      const historico = await AsyncStorage.getItem('historicoMensagens');
      if (historico) {
        setMensagensEnviadas(JSON.parse(historico));
      }
    };
    carregarMensagens();
  }, []);

  return (
    <ImageBackground
      source={require('../assets/img/fundo-envio.png')}
      style={styles.container}
    >
      <Text style={styles.titulo}>📜 Histórico de Mensagens 📜</Text>
      <FlatList
        data={mensagensEnviadas}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.mensagem}>De: {item.remetente}</Text>
            <Text style={styles.mensagem}>Para: {item.destino}</Text>
            <Text style={styles.mensagem}>"{item.mensagem}"</Text>
          </View>
        )}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
    padding: 20,
    alignItems: 'center',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 20,
    textAlign: 'center'
  },
  card: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
    width: '100%',
  },
  mensagem: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 5,
  },
});