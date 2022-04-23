//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

import Home from './src/home/index';
import About from './src/about/index';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        screenOptions={{
          //headerShown: false,   // remove header
          tabBarHideOnKeyboard: true, // esconder tabbar quando teclado aberto
          tabBarActiveTintColor : '#e91e63', // cor do icone ativo
          tabBarStyle: {
            backgroundColor: '#202225', // cor de fundo
            borderTopColor: '#e91e63', // borda superior
            borderTopWidth: 3, // largura da borda superior
          },
        }}
       >
        <Tab.Screen name="Home" component={Home} 
        options = {{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-home" color={color} size={size} />
          ),

        }} />
        <Tab.Screen name="About" component={About}
        options = {{
          tabBarLabel: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-information-circle" color={color} size={size} />
          ),
        }} />
      </Tab.Navigator> 
    </NavigationContainer>
    );
}


