export enum DoneActions {
  ADD_TASK = "ADD_DONE_TASK",
  REMOVE_TASK = "REMOVE_DONE_TASK",
  IMPORT_TASKS = "IMPORT_DONE_TASKS",
}

export interface DoneTask {
  id: number;
  title: string;
  description: string;
  endDate: number;
  deadline?: number;
}

export interface AddDoneTask {
  type: DoneActions.ADD_TASK;
  payload: DoneTask;
}

export interface RemoveDoneTask {
  type: DoneActions.REMOVE_TASK;
  payload: {
    id: number;
  };
}

export interface ImportDoneTasks {
  type: DoneActions.IMPORT_TASKS;
  payload: DoneTask[];
}

export type DoneActionTypes = AddDoneTask | RemoveDoneTask | ImportDoneTasks;