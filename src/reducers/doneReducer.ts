import { DoneTask, DoneActionTypes, DoneActions } from '../types/doneTasks.types';

export const doneReducer = (state = [] as DoneTask[], action: DoneActionTypes): DoneTask[] => {
  switch (action.type) {
    case DoneActions.ADD_TASK:
      return [...state, action.payload];

    case DoneActions.REMOVE_TASK: {
      return state.filter(task => task.id !== action.payload.id)
    }

    case DoneActions.IMPORT_TASKS: {
      return action.payload;
    }

    default:
      return state;
  }
}