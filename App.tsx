import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './navigation/AppNavigator';
import { AuthNavigator } from './navigation/AuthNavigator';

import { RootStoreProvider, useStores } from './stores/RootStore';
import { Observer } from 'mobx-react-lite';

const NavigationRoot = () => {
  const { authStore } = useStores();

  return (
    <Observer>
      {() => {
        return authStore.isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
      }}
    </Observer>
  );
};

export default function App() {

  return (
    <SafeAreaProvider>
      <RootStoreProvider>
        <NavigationContainer>
          <NavigationRoot />
          <StatusBar style="auto" />
        </NavigationContainer>
      </RootStoreProvider>
    </SafeAreaProvider>
  );
}
