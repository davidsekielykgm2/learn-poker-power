import { useMutation } from '@tanstack/react-query';
import { authService, LoginCredentials, LoginResponse } from '../services/auth';

export interface AuthenticationError {
  code: string;
  message: string;
}

export const useLogin = () => {

  const loginMutation = useMutation<
    LoginResponse,
    AuthenticationError,
    LoginCredentials
  >({
    mutationFn: authService.login,
    onError: (error) => {
      console.error('Authentication error:', error);
    }
  });

  return {
    isLoading: loginMutation.isLoading,
    authError: loginMutation.error,
    mutateAsync: loginMutation.mutateAsync
  };

};
