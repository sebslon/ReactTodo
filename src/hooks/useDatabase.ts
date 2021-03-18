import { useContext } from "react";
import { DatabaseManager } from "../helpers/DatabaseManager";
import { StoreContext } from "../stores/StoreProvider";

export function useDatabase(): DatabaseManager {
  const databaseManager = useContext(StoreContext);

  if(!databaseManager) {
    throw new Error('Database manager not found.')
  }

  return databaseManager;
}