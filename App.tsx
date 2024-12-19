import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './navigation/AppNavigator';
import { AuthNavigator } from './navigation/AuthNavigator';


export default function App() {
  const [isAuthenticated] = useState(false);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        { isAuthenticated ? <AppNavigator /> : <AuthNavigator /> }
        <StatusBar style="auto" />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
