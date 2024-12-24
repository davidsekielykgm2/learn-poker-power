import { View, StyleSheet } from 'react-native';
import { Text, Button, HelperText } from 'react-native-paper';
import { commonStyles } from '../styles/common';
import { FormInput } from '../componets/FormImput';

import { Observer } from 'mobx-react-lite';

import { useLogin } from '../hooks/useLogin';

export function LoginScreen() {

  const {
    formData,
    validationErrors,
    isLoading,
    loginError,
    handleEmailChange,
    handlePasswordChange,
    handleLogin
  } = useLogin();

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
