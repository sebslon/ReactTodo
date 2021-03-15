import {TodoTask, TodoActions, TodoActionTypes} from '../types/todoTasks.types';

export const addTodoTask = (task: TodoTask): TodoActionTypes => ({
  type: TodoActions.ADD_TASK,
  payload: task,
});

export const removeTodoTask = (id: number): TodoActionTypes => ({
  type: TodoActions.REMOVE_TASK,
  payload: {
    id,
  },
});

export const editTodoTask = (task: TodoTask): TodoActionTypes => ({
  type: TodoActions.EDIT_TASK,
  payload: task,
});

export const importTodoTasks = (tasks: TodoTask[]): TodoActionTypes => ({
  type: TodoActions.IMPORT_TASKS,
  payload: tasks,
});
