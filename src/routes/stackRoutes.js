import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../../src/pages/home/index";
import Detalhes from "../../src/pages/detalhes/index";

const Stack = createNativeStackNavigator();
export default function StackRoutes() {
    
    return (
        <Stack.Navigator
        initialRouteName="Home"
        headerMode="none"
        
        screenOptions={{
            cardStyle: { backgroundColor: "#312e38" },
            headerShown: false,

        }}
        >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        </Stack.Navigator>
    );
    }