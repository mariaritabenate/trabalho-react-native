import React, { Component } from 'react';
import { Text, Button, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Componente1 from './src/Componente1';
import Componente2 from './src/Componente2';
import Componente3 from './src/Componente3';
import Componente4 from './src/Componente4';
const Project = createStackNavigator({ Componente1, Componente2, Componente3, Componente4 },
    {
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: '#003c8f' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            headerBackTitle: 'voltar'
        }
    });
export default createAppContainer(Project);