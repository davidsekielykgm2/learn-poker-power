import { LoginCredentials, LoginResponse } from './types';

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    // Aquí iría la implementación real cuando esté lista
    console.log({credentials});
    throw new Error('Not implemented');
  }
};
