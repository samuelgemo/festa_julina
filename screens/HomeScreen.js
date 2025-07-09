import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <ImageBackground
    source={require('../assets/img/festajulina.jpg')}
      style={styles.container}
      resizeMode="cover"

    >
      <Image
        source={require('../assets/img/logo-correio.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.bandeirinhas}>Feito por Thiago e Samuel</Text>
      <Button
        title="Enviar Mensagem"
        onPress={() => navigation.navigate('Conteúdo')}
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
  logo: {
    width: 350,
    height: 200,
    marginBottom: 10,
  },
  bandeirinhas: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
     padding: 5,
    borderRadius: 8,
  },
});