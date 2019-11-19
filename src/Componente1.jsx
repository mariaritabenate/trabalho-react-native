import React from 'react';
import { Button, View, Text } from 'react-native';
export default class Componente1 extends React.Component {
    static navigationOptions = {
        title: 'Menu Inicial'
    };
    render() {
        return (
            <View style={{ marginTop: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button style={{ marginBottom: 50 }} title="Sobre a Uni-FACEF"
                    onPress={() => this.props.navigation.navigate('Componente2')} /><br></br>
                <Button style={{ marginTop: 50 }} title="Sobre o curso"
                    onPress={() => this.props.navigation.navigate('Componente3')} /><br></br>
                <Button title="Sobre o time"
                    onPress={() => this.props.navigation.navigate('Componente4')} />
            </View>
        );
    }
}