import React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
export default class Componente4 extends React.Component {
    static navigationOptions = {
        title: 'Sobre o time'
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.logo} source={require('../assets/maria.jpeg')} />
                <Text style={styles.paragraph}>
                    Maria Rita Benate
        </Text>
                <Image style={styles.logo} source={require('../assets/arthur.jpeg')} />

                <Text style={styles.paragraph}>
                    Arthur Castaldi
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
        height: 150,
        width: 150,
    }
});