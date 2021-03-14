export enum TodoActions {
  ADD_TASK = "ADD_TASK",
  EDIT_TASK = "EDIT_TASK",
  REMOVE_TASK = "REMOVE_TASK",
  IMPORT_TASKS = "IMPORT_TASKS",
}

export interface Task {
  id: number;
  title: string;
  description: string;
  creationDate: number;
  deadline?: number;
}

export interface AddTask {
  type: TodoActions.ADD_TASK;
  payload: Task;
}

export interface RemoveTask {
  type: TodoActions.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface EditTask {
  type: TodoActions.EDIT_TASK;
  payload: Task;
}

export interface ImportTasks {
  type: TodoActions.IMPORT_TASKS;
  payload: Task[];
}

export type TodoActionTypes = AddTask | RemoveTask | EditTask | ImportTasks;