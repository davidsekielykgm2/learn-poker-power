import { useMutation } from '@tanstack/react-query';
import { mockAuthService } from '../services/mockAuth';

import { LoginCredentials, LoginResponse, ApiResponse } from '../services/types';

export interface LoginError {
  message: string;
  code?: string;
}

export const useLoginQueries = () => {

  const loginMutation = useMutation<
    ApiResponse<LoginResponse>,
    LoginError,
    LoginCredentials
  >({
    mutationFn: mockAuthService.login,
    retry: (failureCount, error) => {
      // Only retry network errors, not auth errors
      if (error.message.includes('Network')) {
        return failureCount < 3;
      }
      return false;
    },
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
