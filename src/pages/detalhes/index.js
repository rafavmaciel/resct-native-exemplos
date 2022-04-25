import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AntDesign } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
// recebe o componente navigation do stack
export default function Detalhes({navigation} ) {
    return (
        <View style={styles.container} >
            <Text>Detalhes</Text>
            <Text> Pagina de detalhes do usuário </Text>
            <AntDesign name="smile-circle" size={50} color="green" />
            <Button style={styles.button} title="Voltar" onPress={() => {
                navigation.goBack();
            }} />
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
    button : {
        backgroundColor: '#e91e63',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        alignContent: 'flex-end',
        alignItems: 'flex-end',

    },
});