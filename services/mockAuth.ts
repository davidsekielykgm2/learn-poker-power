import { ApiResponse, MockScenario, LoginCredentials, LoginResponse } from './types';

interface MockConfig {
  scenario?: MockScenario;
  delay?: number;
}

const createMockAuthService = (config: MockConfig = {}) => {

  const defaultConfig: MockConfig = {
    scenario: MockScenario.SUCCESS,
    delay: 1000
  };

  const finalConfig = { ...defaultConfig, ...config };

  return {
    login: async (credentials: LoginCredentials): Promise<ApiResponse<LoginResponse>> => {
      await new Promise(resolve => setTimeout(resolve, finalConfig.delay));

      switch (finalConfig.scenario) {
        case MockScenario.INVALID_CREDENTIALS:
          return {
            error: {
              code: 'AUTH_INVALID_CREDENTIALS',
              message: 'Invalid email or password',
            },
            status: 401
          };

        case MockScenario.NETWORK_ERROR:
          throw new Error('Network request failed');

        case MockScenario.TIMEOUT:
          await new Promise(resolve => setTimeout(resolve, 10000));
          throw new Error('Request timed out');

        case MockScenario.SUCCESS:
        default:
          return {
            data: {
              token: 'mock-token',
              user: {
                id: '1',
                email: credentials.email
              }
            },
            status: 200
          };
      }

    }
  };

};

export const mockAuthService = createMockAuthService();
