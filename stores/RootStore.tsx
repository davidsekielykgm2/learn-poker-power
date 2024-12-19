import { authStore } from './AuthStore';
import { createContext, useContext } from 'react';

class RootStore {
  authStore = authStore;
}

const RootStoreContext = createContext<RootStore | null>(null);

export const useStores = () => {
  const context = useContext(RootStoreContext);
  if (context === null) {
    throw new Error('useStore need to be used inside RootStoreProvider');
  }

  return context;
};

export const RootStoreProvider = ({ children }: { children: React.ReactNode }) => (
  <RootStoreContext.Provider value={new RootStore()}>
    {children}
  </RootStoreContext.Provider>
);
