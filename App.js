//import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';

import Routes from './src/routes';

export default function App() {
  return (
    // NavigationContainer Componente necessario para todos os tipos de navegação
    <NavigationContainer> 
      <Routes />
    </NavigationContainer>
    );
}


