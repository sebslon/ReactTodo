import { useContext } from "react";
import { StoreContext } from "../stores/StoreProvider";
import { DatabaseManager } from "../helpers/DatabaseManager";

export function useDatabase(): DatabaseManager {
  const databaseManager = useContext(StoreContext);

  if(!databaseManager) {
    throw new Error('Database manager not found.')
  }

  return databaseManager;
}