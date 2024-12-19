import { View, Text, Button } from 'react-native';
import { commonStyles } from '../styles/common';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

export function LoginScreen() {
  const { authStore } = useStores();

  return (
    <Observer>
      {() => (
        <View style={commonStyles.centeredContainer}>
          <Text>Login Page</Text>
          <Button
            title='Login (simulado)'
            onPress={() => authStore.login()}
          />
        </View>
      )}
    </Observer>
  );
}
