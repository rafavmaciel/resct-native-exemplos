import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import firebase from "../../firebaseConection";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
    const [nome, setNome] = useState("");

    useEffect(() => {
        async function getNome() {
            await firebase
                .database()
                .ref("nome")
                .on("value", (snapshot) => {
                    setNome(snapshot.val());
                });
            }
            getNome();
    }, []);

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text>{nome}</Text>
            <Button
                title="Ir para Detalhes"
                onPress={() => {
                    navigation.navigate("Detalhes");
                }}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
