import { TodoTask, TodoActionTypes, TodoActions } from '../@types/todoTasks.types';

export const todoReducer = (state = [] as TodoTask[], action: TodoActionTypes): TodoTask[] => {
  switch (action.type) {
    case TodoActions.ADD_TASK:
      return [...state, action.payload];

    case TodoActions.REMOVE_TASK: {
      return state.filter(task => task.id !== action.payload.id)
    }

    case TodoActions.EDIT_TASK: {
      return state.map(task => task.id === action.payload.id ? task : action.payload)
    }

    case TodoActions.IMPORT_TASKS: {
      return action.payload;
    }

    default:
      return state;
  }
}