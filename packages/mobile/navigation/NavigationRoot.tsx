import { useEffect } from 'react';

import { Observer } from 'mobx-react-lite';
import { ActivityIndicator, View } from 'react-native';
import { useStores } from '../stores/RootStore';

import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';

import { commonStyles } from '../styles/common';

export const NavigationRoot = () => {
  const { authStore } = useStores();

  useEffect(() => {
    authStore.initSession();
  }, []);

  return (
    <Observer>
      {() => {
        if (!authStore.isInitialized) {
          return (
            <View style={commonStyles.centeredContainer}>
              <ActivityIndicator size="large" />
            </View>
          );
        }

        return authStore.isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
      }}
    </Observer>
  );
};
