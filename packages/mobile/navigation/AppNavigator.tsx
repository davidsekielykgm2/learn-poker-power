import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from './types';

import { HomeScreen } from '../screens/Home';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <AppStack.Navigator>
      <AppStack.Screen name="Home" component={HomeScreen} />
    </AppStack.Navigator>
  );
}
