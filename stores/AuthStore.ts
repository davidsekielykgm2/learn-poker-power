import { types, Instance } from 'mobx-state-tree';
import { LoginResponse } from '../services/types';

const UserStoreModel = types
  .model('UserStore', {
    id: types.string,
    email: types.string
  });

export const AuthStoreModel = types
  .model('AuthStore', {
    isAuthenticated: types.optional(types.boolean, false),
    token: types.maybe(types.string),
    user: types.maybe(UserStoreModel)
  })
  .actions(self => {

    const actions = {
      setSession(data: LoginResponse) {
        self.token = data.token;
        self.user = data.user;

        self.isAuthenticated = true;
      },
      clearSession() {
        self.token = undefined;
        self.user = undefined;

        self.isAuthenticated = false;
      }
    };

    return actions;
  });

export type IAuthStore = Instance<typeof AuthStoreModel>
