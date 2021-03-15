import {DoneTask, DoneActions, DoneActionTypes} from '../types/doneTasks.types';

export const addDoneTask = (task: DoneTask): DoneActionTypes => ({
  type: DoneActions.ADD_TASK,
  payload: task,
});

export const removeDoneTask = (id: number): DoneActionTypes => ({
  type: DoneActions.REMOVE_TASK,
  payload: {
    id,
  },
});

export const importDoneTasks = (tasks: DoneTask[]): DoneActionTypes => ({
  type: DoneActions.IMPORT_TASKS,
  payload: tasks,
});
