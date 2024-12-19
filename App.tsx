import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './screens/types';

import { WelcomeScreen } from './screens/Welcome';
import { LoginScreen } from './screens/Login';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{ title: 'Bienvenido' }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{ title: 'Iniciar Sesion' }}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
