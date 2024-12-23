import { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import { commonStyles } from '../styles/common';
import { FormInput } from '../componets/FormImput';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

import { authService, LoginCredentials } from '../services/auth';

export function LoginScreen() {

  const { authStore } = useStores();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
  };

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
  };

  const handleLogin = async () => {
    try {
      const response = await authService.login(formData);
      console.log({response});

      authStore.setSession(response);
    } catch (error) {
      console.error(error);
    }
  };

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
              value={formData.email}
              onChangeText={handleEmailChange}
              keyboardType='email-address'
              autoCapitalize='none'
              autoCorrect={false}
            />

            <FormInput
              label='Password'
              value={formData.password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
            />

            <Button
              mode='contained'
              onPress={handleLogin}
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
