import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

export default function About() {
    return (
        <View style={styles.container} >
            <Text>Navegação Bem sucedida </Text>
            <Ionicons name="md-checkmark-circle" size={50} color="green" />
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