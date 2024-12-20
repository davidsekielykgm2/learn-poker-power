import { View } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { commonStyles } from '../styles/common';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

export function LoginScreen() {
  const { authStore } = useStores();

  return (
    <Observer>
      {() => (
        <View style={commonStyles.centeredContainer}>
          <Text variant='headlineMedium'>Login Page</Text>
          <Button
            mode='contained'
            onPress={() => authStore.login()}
          >
            <Text>Login (simulado)</Text>
          </Button>
        </View>
      )}
    </Observer>
  );
}
