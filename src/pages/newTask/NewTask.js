import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "../../config/firebase";
import styles from "./style";
import { FontAwesome5 } from "@expo/vector-icons";

export default function NewTask({ navigation }) {
    const [description, setDescription] = useState("");
    const database = firebase.firestore();

    function formatDate() {
        var data = new Date(),
            dia = data.getDate().toString(),
            diaF = dia.length == 1 ? "0" + dia : dia,
            mes = (data.getMonth() + 1).toString(), //+1 pois no getMonth Janeiro começa com zero.
            mesF = mes.length == 1 ? "0" + mes : mes,
            anoF = data.getFullYear();
        return diaF + "/" + mesF + "/" + anoF;
    }

    function addTask() {
        database.collection("Tasks").add({
            description: description,
            date: formatDate(),
            status: false,
            createdAt: new Date(),
        });
        navigation.navigate("Task");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Adicinonar nova tarefa</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Ex: Lavar o carro"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.bottonNewTask}
                onPress={() => {
                    addTask();
                }}
            >
                <FontAwesome5 name="plus" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
}
