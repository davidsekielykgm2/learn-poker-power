import * as SecureStore from 'expo-secure-store';
import { LoginResponse } from './types';

const SESSION_KEY = 'auth_session';

export const secureStore = {

  async saveSession(data: LoginResponse) {
    try {
      const sessionData = JSON.stringify(data);
      await SecureStore.setItemAsync(SESSION_KEY, sessionData);
    } catch (error) {
      console.error('Error saving session to secure storage:', error);
      throw error; // Propagamos el error para manejarlo en el store
    }
  },

  async loadSession(): Promise<LoginResponse | null> {
    try {
      const sessionData = await SecureStore.getItemAsync(SESSION_KEY);
      return sessionData ? JSON.parse(sessionData) : null;
    } catch (error) {
      console.error('Error loading session from secure storage:', error);
      return null;
    }
  }

};
