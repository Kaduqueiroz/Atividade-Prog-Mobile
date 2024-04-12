import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';

function App() {
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const [palpite, setPalpite] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tentativasRestantes, setTentativasRestantes] = useState(3);

    const gerarNumeroAleatorio = () => {
        const numero = Math.floor(Math.random() * 11);
        setNumeroAleatorio(numero);
        setMensagem('');
        setTentativasRestantes(3);
    };

    const verificarPalpite = () => {
        const palpiteNumero = parseInt(palpite);

        if (isNaN(palpiteNumero) || palpiteNumero < 0 || palpiteNumero > 10) {
            setMensagem('Por favor, digite um número válido entre 0 e 10.');
            return;
        }

        if (palpiteNumero === numeroAleatorio) {
            setMensagem('Parabéns! Você acertou o número.');
            setNumeroAleatorio(null);
        } else {
            setTentativasRestantes(tentativasRestantes - 1);
            if (tentativasRestantes === 1) {
                setMensagem(`Suas tentativas acabaram. O número correto era ${numeroAleatorio}.`);
                setNumeroAleatorio(null);
            } else {
                setMensagem(`Número errado. Você tem mais ${tentativasRestantes - 1} tentativas.`);
            }
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Jogo do Número Aleatório</Text>
            <Button title="Iniciar Jogo" onPress={gerarNumeroAleatorio} />
            {numeroAleatorio !== null && (
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu palpite"
                        onChangeText={(text) => setPalpite(text)}
                        keyboardType="numeric"
                    />
                    <Button title="Verificar Palpite" onPress={verificarPalpite} />
                </View>
            )}
            <Text style={styles.mensagem}>{mensagem}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    texto: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    mensagem: {
        marginTop: 20,
        fontSize: 16,
    },
});

export default App;
