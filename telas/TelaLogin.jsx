import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import ImputPersonalizado from '../componentes/ImputPersonalizado';

function TelaLogin({ navigation }) {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Tela de Login</Text>

            <View style={estilos.areaFormulario}>
                <ImputPersonalizado
                    legenda="Digite seu email"
                    textoTemporario="Ex: exemplo@gmail.com"
                    valor={email}
                    aoAlterarValor={setEmail}
                    estiloCampo={estilos.input}
                />

                <ImputPersonalizado
                    legenda="Senha"
                    textoTemporario="Mínimo 6 caracteres..."
                    valor={senha}
                    aoAlterarValor={setSenha}
                    ehSenha={true}
                    estiloCampo={estilos.input}
                />
            </View>

            <View style={estilos.areaBotoes}>
                <TouchableOpacity
                    style={estilos.botao}
                    onPress={() => navigation.navigate('Cadastro')}
                    activeOpacity={0.7}
                >
                    <Text style={estilos.textoBotao}>Ir para Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[estilos.botao, estilos.botaoSecundario]}
                    onPress={() => navigation.navigate('Descobrir')}
                    activeOpacity={0.7}
                >
                    <Text style={estilos.textoBotao}>Ir para Descobrir</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'flex-start',
    },
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40,
        marginBottom: 30,
    },
    areaFormulario: {
        marginBottom: 40,
        gap: 20,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 0,
        fontSize: 16,
    },
    areaBotoes: {
        alignItems: 'center',
        gap: 15,
    },
    botao: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    botaoSecundario: {
        backgroundColor: '#28a745',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TelaLogin;
