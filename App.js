//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/pages/home/index";
import About from "./src/pages/about/index";
import Task from "./src/pages/task/task";
import NewTask from "./src/pages/newTask/NewTask";
import Details from "./src/pages/details/details";
import Cadastrar from "./src/pages/cadastro/Cadastrar";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Cadastrar"
                    component={Cadastrar}
                    options={{
                        title: "Cadastrar",
                        headerStyle: {
                            backgroundColor: "#59BFFF",
                        },
                    }}
                />
                {/* <Stack.Screen
                    name="Task"
                    component={Task}
                    options={{
                        title: "Tarefa",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="NewTask"
                    component={NewTask}
                    options={{
                        title: "Nova Tarefa",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Details"
                    component={Details}
                    options={{
                        title: "Detalhes",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: "Home",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                />
                <Stack.Screen
                    name="About"
                    component={About}
                    options={{
                        title: "Sobre",
                        headerStyle: {
                            backgroundColor: "#f4511e",
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            fontWeight: "bold",
                        },
                    }}
                /> */}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
