import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, View, Text, Image, TextInput, TouchableOpacity, Animated, Keyboard } from "react-native";
import firebase from "../../config/firebase";
import styles from "./styles";

export default function App({ navigation }) {
    const [offset] = useState(new Animated.ValueXY({ x: 0, y: 150 }));
    const [opacity] = useState(new Animated.Value(0));
    const [logo] = useState(new Animated.ValueXY({ x: 170, y: 235 }));

    // estados do cadastro
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //função do cadastro
    async function cadastrar() {
        await firebase.auth().signInWithEmailAndPassword(email, password).then((value) => {
            navigation.navigate("Task");
            
        }).catch((error) => {
            alert(error.message);
        }
        );
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
                duration: 300,
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
                toValue: 135,
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
                        source={require("../../../assets/Rafael.png")}
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
