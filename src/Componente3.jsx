import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
export default class Componente3 extends React.Component {
    static navigationOptions = {
        title: 'Sobre o curso'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../assets/icon-SI.png')} />
                <Text style={styles.paragraph}>
                    Sistemas de Informação é a expressão utilizada para descrever um Sistema seja ele automatizado (que pode ser denominado como Sistema Informacional Computadorizado), seja manual, que abrange pessoas, máquinas e/ou métodos organizados para coletar, processar, transmitir e disseminar dados que representam informação para o usuário e/ou cliente.
        </Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
    },
    paragraph: {
        margin: 24,
        fontSize: 14,
        textAlign: 'center',
    },
    logo: {
        marginTop: 45,
        height: 200,
        width: 200,
    }
});