import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

import ImputPersonalizado from '../componentes/ImputPersonalizado';

function TelaCadastro({ navigation }) {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');

    const [errors, setErrors] = useState([]);

    const efetuarCadastro = () => {
        let erros = [];

        if (!email.trim()) {
            erros.push(['Preencha todos os campos de email.']);
        }

        if (!nome.trim()) {
            erros.push(['Preencha todos os campos de nome']);
        }

        if (senha.length !== 6) {
            erros.push(['A senha deve ter exatamente 6 caracteres.']);
        }

        if (senha !== confirmarSenha) {
            erros.push(['As senhas não coincidem.']);
        }

        setErrors(erros);

        if (erros.length > 0) {
            return;
        }

        try{
            const resposta = axios.post("http://10.0.8.58:3000/api/usuarios",
                {
                    nome: nome,
                    email: email,
                    senha: senha
                }
            );

        } catch (error) {
            console.error('Erro ao cadastrar:', error);
        }
    }

    return (
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Tela de Cadastro</Text>

            {errors.length > 0 && (
                <View>
                    {errors.map((erro, index) => (
                        <Text key={index} style={{ color: 'red' }}>{erro}</Text>
                    ))}
                </View>
            )}

            <View style={estilos.areaFormulario}>
                <ImputPersonalizado
                    legenda="Nome"
                    textoTemporario="Ex: Pedrinho da quebrada"
                    valor={nome}
                    aoAlterarValor={setNome}
                    estiloCampo={estilos.input}
                />

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

                <ImputPersonalizado
                    legenda="Confirmação de senha"
                    textoTemporario="Digite sua senha novamente..."
                    valor={confirmarSenha}
                    aoAlterarValor={setConfirmarSenha}
                    ehSenha={true}
                    estiloCampo={estilos.input}
                />
            </View>

            <View style={estilos.areaBotoes}>
                <TouchableOpacity 
                    style={estilos.botaoPrincipal}
                    onPress={ () => efetuarCadastro() }
                    activeOpacity={0.7}
                >
                    <Text style={estilos.textoBotao}>Finalizar Cadastro</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={estilos.botaoSecundario}
                    onPress={() => navigation.navigate('Login')}
                    activeOpacity={0.7}
                >
                    <Text style={estilos.textoBotao}>Ir para Login</Text>
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
    botaoPrincipal: {
        backgroundColor: '#007bff',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    botaoSecundario: {
        backgroundColor: '#28a745',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 8,
        width: '80%',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default TelaCadastro;
