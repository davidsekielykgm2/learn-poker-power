import { useState } from 'react';

import { View, StyleSheet } from 'react-native';
import { Text, Button, HelperText } from 'react-native-paper';
import { commonStyles } from '../styles/common';
import { FormInput } from '../componets/FormImput';

import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

import { LoginCredentials } from '../services/auth';
import { useLogin } from '../hooks/useLogin';

import { validateDTO } from '../validations/utils';
import { LoginDTO } from '../validations/LoginDTO';

export function LoginScreen() {

  const { authStore } = useStores();
  const { mutateAsync, isLoading, loginError } = useLogin();

  const [formData, setFormData] = useState<LoginCredentials>({
    email: '',
    password: ''
  });

  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleEmailChange = (email: string) => {
    setFormData(prev => ({ ...prev, email }));
    setValidationErrors([]);
  };

  const handlePasswordChange = (password: string) => {
    setFormData(prev => ({ ...prev, password }));
    setValidationErrors([]);
  };

  const handleLogin = async () => {
    try {
      setValidationErrors([]);

      const loginDTO = new LoginDTO(formData);
      const { isValid, errors: dtoErrors } = await validateDTO(loginDTO);

      if(!isValid) {
        setValidationErrors(dtoErrors);
        console.error(dtoErrors);
        return;
      }

      const response = await mutateAsync(formData);
      console.log({response});

      authStore.setSession(response);
    } catch (error) {
      console.error(error);
      setValidationErrors([ 'An unexpected error occurred' ]);
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
              (validationErrors.length > 0 || loginError) && (
                <View style={styles.errorsContainer}>
                  {validationErrors.map((error, index) => (
                    <HelperText
                      key={`validation-${index}`}
                      type="error"
                      visible={true}
                    >
                      {error}
                    </HelperText>
                  ))}

                  {loginError && (
                    <HelperText
                      type="error"
                      visible={true}
                    >
                      {loginError.message}
                    </HelperText>
                  )}
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
