import React from 'react';
import { DatabaseManager } from '../helpers/DatabaseManager';

export const StoreContext = React.createContext<DatabaseManager | null>(null);

StoreContext.displayName = 'RootStore';

export const StoreProvider: React.FC = ({ children }) => {
  return (
    <StoreContext.Provider value={new DatabaseManager('task-database', ['todo', 'done'])}>
      {children}
    </StoreContext.Provider>
  )
}

