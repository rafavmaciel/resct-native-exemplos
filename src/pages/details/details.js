import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./style";

export default function Details({ navigation, route }) {
    const [task, setTask] = useState(route.params);
    return (
        <View style={styles.container}>
            <TouchableOpacity style= {styles.bottonNewTask}>
                <Text style= {styles.textBottonNewTask} > Tarefa: {task.description}</Text>
                <Text style= {styles.textBottonNewTask} >Data de criação: {task.date}</Text>
                <Text style= {styles.textBottonNewTask} >Status: {task.status ? "Concluida" : "Pendente"    }</Text>
            </TouchableOpacity>
        </View>
    );
}
