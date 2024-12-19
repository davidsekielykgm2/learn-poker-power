import { makeAutoObservable } from 'mobx';

class AuthStore {

  isAuthenticated = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthenticated(value: boolean) {
    this.isAuthenticated = value;
  }

  login() {
    this.setAuthenticated(true);
  }

  logout() {
    this.setAuthenticated(false);
  }

}

export const authStore = new AuthStore();
