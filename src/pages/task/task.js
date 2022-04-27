import React, { useEffect, useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    TextInput,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import database from "../../config/firebase";
import styles from "./style";

export default function Task({ navigation }) {
    const [task, setTask] = useState([]);

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList showsVerticalScrollIndicator = {false}
            data={task}
            renderItem ={( { item } ) => {
                return (
                <View style={styles.Tasks}>
                    <TouchableOpacity  style = {styles.deleteTask}>
                        <FontAwesome5 name="trash-alt" size={20} color="#F92e6a"  />
                    </TouchableOpacity>
                    <Text style={styles.descriptionText}>{item.description}</Text>
                </View>
                );
            }}
            />

            <TouchableOpacity 
                style={styles.bottonNewTask}
                onPress={() => navigation.navigate("NewTask")}
            >
                <Text styles={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    );
}


