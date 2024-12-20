import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { commonStyles } from '../styles/common';
import { FormInput } from '../componets/FormImput';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

export function LoginScreen() {
  const { authStore } = useStores();

  return (
    <Observer>
      {() => (
        <View style={[commonStyles.centeredContainer, styles.container]}>
          <Text variant='headlineMedium' style={styles.title}>
            Login
          </Text>

          <View style={styles.form}>
            <FormInput
              label='Email'
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />

            <FormInput
              label='Password'
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
            />

            <Button
              mode='contained'
              onPress={() => authStore.login()}
              style={styles.button}
            >
              <Text>Login (simulado)</Text>
            </Button>
          </View>

        </View>
      )}
    </Observer>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
  },
  container: {
    padding: 16,
  },
  form: {
    maxWidth: 400,
    width: '100%',
  },
  title: {
    marginBottom: 24,
  },
});
