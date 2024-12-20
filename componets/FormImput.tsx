import { TextInput, TextInputProps } from 'react-native-paper';
import { StyleSheet } from 'react-native';

type FormInputProps = TextInputProps

export function FormInput({ mode, ...rest }: FormInputProps) {
  return (
    <TextInput
      mode={mode}
      style={styles.input}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    width: '100%'
  }
});
