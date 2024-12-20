import { types, Instance } from 'mobx-state-tree';

export const AuthStoreModel = types
  .model('AuthStore', {
    isAuthenticated: types.optional(types.boolean, false)
  })
  .actions(self => {

    const actions = {
      setAuthenticated(value: boolean) {
        self.isAuthenticated = value;
      },
      login() {
        actions.setAuthenticated(true);
      },
      logout() {
        actions.setAuthenticated(false);
      },
    };

    return actions;
  });

export type IAuthStore = Instance<typeof AuthStoreModel>
