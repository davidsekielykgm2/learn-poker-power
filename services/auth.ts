export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    email: string;
  }
}

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return {
      token: 'mock-token',
      user: {
        id: '1',
        email: credentials.email
      }
    };
  }
};
