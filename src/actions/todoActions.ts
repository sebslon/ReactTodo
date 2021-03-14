import {Task, TodoActions, TodoActionTypes} from '../@types/todoTasks.types';

export const addTask = (task: Task): TodoActionTypes => ({
  type: TodoActions.ADD_TASK,
  payload: task,
});

export const removeTask = (id: number): TodoActionTypes => ({
  type: TodoActions.REMOVE_TASK,
  payload: {
    id,
  },
});

export const editTask = (task: Task): TodoActionTypes => ({
  type: TodoActions.EDIT_TASK,
  payload: task,
});

export const importTasks = (tasks: Task[]): TodoActionTypes => ({
  type: TodoActions.IMPORT_TASKS,
  payload: tasks,
});
