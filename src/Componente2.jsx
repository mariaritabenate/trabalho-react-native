import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
export default class Componente2 extends React.Component {
    static navigationOptions = {
        title: 'Sobre a Uni-FACEF'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../assets/LOGO_Uni-FACEF.png')} />
                <Text style={styles.paragraph}>
                    O Uni-FACEF – Centro Universitário Municipal de Franca – é uma Instituição de Ensino Superior que atua há mais sessenta anos no ensino superior na cidade de Franca, situada a 400 km de distância, a nordeste da capital São Paulo.
          
          A Missão do Uni-FACEF é “construir e difundir o conhecimento, contribuindo para a formação do ser humano, a fim de que ele exerça o seu papel na sociedade com ética e cidadania”.
          
          Em termos quantitativos, atualmente, o Uni-FACEF Centro Universitário Municipal de Franca é um Centro Universitário Municipal, com cerca de 2.000 estudantes. Instalado, atualmente, em dois amplos terrenos, com mais de 12.000 m² de área e, aproximadamente, 10.000 m² edificados, o Centro Universitário Uni-FACEF Centro Universitário de Franca dispõe de modernas instalações para desenvolver um ensino de padrão de alta qualidade.
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
        marginTop: 50,
        height: 45,
        width: 200,
    }
});