import { View, Text, Button } from 'react-native';
import { commonStyles } from '../styles/common';

import { AuthStackScreenProps } from '../navigation/types';

export function WelcomeScreen({ navigation }: AuthStackScreenProps<'Welcome'>) {
  return (
    <View style={commonStyles.centeredContainer}>
      <Text>Bienvenido a Poker Power</Text>
      <Button
        title='Ir al login'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}
