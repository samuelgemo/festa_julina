import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ContentScreen from './screens/ContentScreen';
import DetailsScreen from './screens/DetailsScreen';
import HistoricoScreen from './screens/HistoricoScreen';



const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{
    title: 'Bem-Vindo!',
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }} />
        <Stack.Screen name="Conteúdo" component={ContentScreen} options={{
          headerStyle: {
          backgroundColor: '#fdc4f1',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}/>
        <Stack.Screen name="Detalhes" component={DetailsScreen} options={{
          title: 'Mensagem Enviada!',
          headerStyle: {
          backgroundColor: '#ffa3a5',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}/>
        <Stack.Screen name="Histórico" component={HistoricoScreen} options={{
          headerStyle: {
          backgroundColor: '#fdc4f1',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}