import { useMutation } from '@tanstack/react-query';
import { authService, LoginCredentials, LoginResponse } from '../services/auth';

export interface LoginError {
  message: string;
  code?: string;
}

export const useLoginQueries = () => {

  const loginMutation = useMutation<
    LoginResponse,
    LoginError,
    LoginCredentials
  >({
    mutationFn: authService.login,
    onError: (error) => {
      console.error('Authentication error:', error);

      return {
        message: error.message || 'An unexpected authentication error occurred',
        code: error.code || 'AUTH_ERROR'
      };
    }
  });

  return {
    isLoading: loginMutation.isLoading,
    loginError: loginMutation.error,
    mutateAsync: loginMutation.mutateAsync
  };

};
