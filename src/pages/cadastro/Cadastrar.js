import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Animated, Keyboard } from "react-native";
import database from "../../config/firebase";
import styles from "./styles";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

export default function App() {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 195 }));

    // estados do cadastro
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //função do cadastro
    async function cadastrar() {
        await createUserWithEmailAndPassword(email, password)
            .then((value) => {
                alert("Cadastro realizado com sucesso!" + value.user.email);
            })
            .catch((error) => {
                if (error.code === "auth/invalid-email") {
                    alert("E-mail inválido!");
                } else if (error.code === "auth/weak-password") {
                    alert("Senha muito fraca!");
                } else if (error.code === "auth/email-already-in-use") {
                    alert("E-mail já cadastrado!");
                } else {
                    alert(error.message);
                }
            });
    }

    useEffect(() => {
        keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", keyboardDidShow);

        keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", keyboardDidHide);

        // Animações em paralelo
        Animated.parallel([
            // Fornece um modelo de física básico (efeito mola/estilingue)
            Animated.spring(offset.y, {
                toValue: 0,
                speed: 4,
                bounciness: 20,
                useNativeDriver: false,
            }),

            // Anima um valor ao longo do tempo
            Animated.timing(opacity, {
                toValue: 1,
                duration: 200,
                useNativeDriver: false,
            }),
        ]).start();
    }, []);

    function keyboardDidShow() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 95,
                duration: 100,
                useNativeDriver: false,
            }),

            Animated.timing(logo.y, {
                toValue: 105,
                duration: 100,
                useNativeDriver: false,
            }),
        ]).start();
    }

    function keyboardDidHide() {
        Animated.parallel([
            Animated.timing(logo.x, {
                toValue: 170,
                duration: 100,
                useNativeDriver: false,
            }),

            Animated.timing(logo.y, {
                toValue: 195,
                duration: 100,
                useNativeDriver: false,
            }),
        ]).start();
    }

    return (
        <>
            <KeyboardAvoidingView style={styles.container}>
                <View style={styles.containerLogo}>
                    <Animated.Image
                        style={{
                            width: logo.x,
                            height: logo.y,
                        }}
                        source={require("../../../assets/logo.png")}
                    />
                </View>

                <Animated.View
                    style={[
                        styles.form,
                        {
                            opacity: opacity,
                            transform: [
                                {
                                    translateY: offset.y,
                                },
                            ],
                        },
                    ]}
                >
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoCapitalize="none"
                        autoCompleteType="email"
                        autoCorrect={false}
                        onChangeText={(text) => setEmail(text)}
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        //keyboardType="visible-password"
                        textContentType="password"
                        autoCapitalize="none"
                        autoCompleteType="password"
                        autoCorrect={false}
                        secureTextEntry={true}
                        onChangeText={(text) => setPassword(text)}
                    />
                    <Text>{email}</Text>
                    <Text>{password}</Text>

                    <TouchableOpacity style={styles.buttonSubmit} onPress={() => cadastrar()}>
                        <Text style={styles.submitText}>Acessar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonRegister}>
                        <Text style={styles.registerText}>Criar conta gratuita</Text>
                    </TouchableOpacity>
                </Animated.View>
            </KeyboardAvoidingView>
        </>
    );
}
