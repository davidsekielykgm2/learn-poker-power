import { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { Text, Button, HelperText } from 'react-native-paper';
import { commonStyles } from '../styles/common';
import { FormInput } from '../componets/FormImput';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

import { authService, LoginCredentials } from '../services/auth';

import { validateDTO } from '../validations/utils';
import { LoginDTO } from '../validations/LoginDTO';

export function LoginScreen() {

  const { authStore } = useStores();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
    setErrors([]);
  };

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    setErrors([]);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      setErrors([]);

      const loginDTO = new LoginDTO(formData);
      const { isValid, errors: validationErrors } = await validateDTO(loginDTO);

      if(!isValid) {
        setErrors(validationErrors);
        console.error(validationErrors);
        return;
      }

      const response = await authService.login(formData);
      console.log({response});

      authStore.setSession(response);
    } catch (error) {
      console.error(error);
      setErrors([error as string]);
    } finally {
      setIsLoading(false);
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
              disabled={isLoading}
            />

            <FormInput
              label='Password'
              value={formData.password}
              onChangeText={handlePasswordChange}
              secureTextEntry
              autoCapitalize='none'
              autoCorrect={false}
              disabled={isLoading}
            />

            {
              errors.length > 0 && (
                <View>
                  {errors.map((error, index) => (
                    <HelperText
                      key={index}
                      type="error"
                      visible={true}
                    >
                      {error}
                    </HelperText>
                  ))}
                </View>
              )
            }

            <Button
              mode='contained'
              onPress={handleLogin}
              style={styles.button}
              loading={isLoading}
              disabled={isLoading}
            >
              <Text>{isLoading ? 'Iniciando sesión...' : 'Login'}</Text>
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
  errorsContainer: {
    marginVertical: 8,
  },
  form: {
    maxWidth: 400,
    width: '100%',
  },
  title: {
    marginBottom: 24,
  }
});
