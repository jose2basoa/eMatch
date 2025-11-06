import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ImputPersonalizado({
    legenda,
    textoTemporario,
    valor,
    aoAlterarValor,
    ehSenha
}) {
    return (
        <View style={estilo.container}>
            {legenda && <Text style={estilo.legenda}>{legenda}</Text>}

            <View style={estilo.entradaContainer}>
                <TextInput 
                    placeholder={textoTemporario}
                    value={valor}
                    onChangeText={aoAlterarValor}
                    secureTextEntry={ehSenha}
                    style={estilo.entrada}
                    placeholderTextColor="#888"
                />
            </View>
        </View>
    );
}

const estilo = StyleSheet.create({
    container: {
        width: '100%',
        marginBottom: 20,
    },
    legenda: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 6,
        color: '#333',
    },
    entradaContainer: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        backgroundColor: '#fff',
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    entrada: {
        fontSize: 16,
        color: '#000',
        paddingHorizontal: 10,
        paddingVertical: 8,
    },
});
