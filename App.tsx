import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PaperProvider, MD3LightTheme } from 'react-native-paper';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './lib/react-query';

import { RootStoreProvider } from './stores/RootStore';
import { NavigationRoot } from './navigation/NavigationRoot';


export default function App() {
  return (
    <PaperProvider theme={MD3LightTheme}>
      <SafeAreaProvider>
        <QueryClientProvider client={queryClient}>
          <RootStoreProvider>
            <NavigationContainer>
              <NavigationRoot />
              <StatusBar style="auto" />
            </NavigationContainer>
          </RootStoreProvider>
        </QueryClientProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
