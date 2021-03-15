import { combineReducers } from "redux";
import { todoReducer } from './todoReducer'
import { doneReducer } from './doneReducer'

export const rootReducer = combineReducers({
  todo: todoReducer,
  done: doneReducer
});

export type RootState = ReturnType<typeof rootReducer>;