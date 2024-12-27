import { useMutation } from '@tanstack/react-query';
import { mockAuthService } from '../services/mockAuth';

import { LoginCredentials, LoginResponse } from '../services/types';

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
    mutationFn: async (credentials) => {
      const response = await mockAuthService.login(credentials);

      if (!response.data) {
        throw {
          message: response.error?.message || 'Authentication failed',
          code: response.error?.code || 'AUTH_ERROR'
        } as LoginError;
      }

      return response.data;
    },
    retry: (failureCount, error) => {
      // Only retry network errors, not auth errors
      if (error.message.includes('Network')) {
        return failureCount < 3;
      }
      return false;
    },
    onError: (error) => {
      console.error('Authentication error:', error);
    }
  });

  return {
    isLoading: loginMutation.isLoading,
    loginError: loginMutation.error,
    mutateAsync: loginMutation.mutateAsync
  };

};
