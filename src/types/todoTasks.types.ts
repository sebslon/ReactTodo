export enum TodoActions {
  ADD_TASK = "ADD_TODO_TASK",
  EDIT_TASK = "EDIT_TODO_TASK",
  REMOVE_TASK = "REMOVE_TODO_TASK",
  IMPORT_TASKS = "IMPORT_TODO_TASKS",
}

export interface TodoTask {
  id: number;
  title: string;
  description: string;
  creationDate: number;
  deadline?: number;
}

export interface AddTask {
  type: TodoActions.ADD_TASK;
  payload: TodoTask;
}

export interface RemoveTask {
  type: TodoActions.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface EditTask {
  type: TodoActions.EDIT_TASK;
  payload: TodoTask;
}

export interface ImportTasks {
  type: TodoActions.IMPORT_TASKS;
  payload: TodoTask[];
}

export type TodoActionTypes = AddTask | RemoveTask | EditTask | ImportTasks;