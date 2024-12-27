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

export interface ApiError {
  code: string;      // Machine-readable error code for programmatic handling
  message: string;   // Human-readable error message for display
  details?: any;     // Optional additional error context
}

export interface ApiResponse<T> {
  data?: T;          // The successful response data
  error?: ApiError;  // Error information if something goes wrong
  status: number;    // HTTP status code to simulate real API behavior
}

export enum MockScenario {
  SUCCESS = 'success',
  INVALID_CREDENTIALS = 'invalid_credentials',
  NETWORK_ERROR = 'network_error',
  TIMEOUT = 'timeout'
}
