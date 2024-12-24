import { Observer } from 'mobx-react-lite';
import { useStores } from '../stores/RootStore';

import { AppNavigator } from './AppNavigator';
import { AuthNavigator } from './AuthNavigator';


export const NavigationRoot = () => {
  const { authStore } = useStores();

  return (
    <Observer>
      {() => {
        return authStore.isAuthenticated ? <AppNavigator /> : <AuthNavigator />;
      }}
    </Observer>
  );
};
