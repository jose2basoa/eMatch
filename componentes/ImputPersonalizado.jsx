import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ImputPersonalizado({
    legenda,
    textoTemporario,
    valor,
    aoAlterarValor,
    ehSenha
})
{

    return (
        <View style={estilo.container}>
            {legenda && <Text>{legenda}</Text>}

            <View style={estilo.entradaContainer}>
                <TextInput
                    placeholder={textoTemporario}
                    value={valor}
                    onChangeText={aoAlterarValor}
                    secureTextEntry={ehSenha}
                    style={estilo.entrada}
                />
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {},
    legenda: {},
    entradaContainer: {}, 
    entrada: {}
});