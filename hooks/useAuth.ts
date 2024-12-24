import { useStores } from '../stores/RootStore';
import { LoginResponse } from '../services/auth';

export const useAuth = () => {

  const { authStore } = useStores();

  const handleLoginResponse = (response: LoginResponse) => {
    authStore.setSession(response);
  };

  const handleLogout = () => {
    authStore.clearSession();
  };

  return {
    isAuthenticated: authStore.isAuthenticated,
    user: authStore.user,
    token: authStore.token,

    handleLoginResponse,
    handleLogout
  };

};
