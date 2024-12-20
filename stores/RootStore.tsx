import { createContext, useContext } from 'react';

import { types, Instance } from 'mobx-state-tree';
import { AuthStoreModel } from './AuthStore';

export const RootStoreModel = types
  .model('RootStore', {
    authStore: types.optional(AuthStoreModel, {})
  });

export const rootStore = RootStoreModel.create({});

const RootStoreContext = createContext<Instance<typeof RootStoreModel> | null>(null);

export const useStores = () => {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('useStore need to be used inside RootStoreProvider');
  }

  return store;
};

export const RootStoreProvider = ({ children }: { children: React.ReactNode }) => (
  <RootStoreContext.Provider value={rootStore}>
    {children}
  </RootStoreContext.Provider>
);
