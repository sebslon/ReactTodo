import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useDatabase } from '../../hooks/useDatabase';

import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';
import { importTodoTasks } from '../../actions/todoActions';
import { importDoneTasks } from '../../actions/doneActions';
import { TodoActionTypes, TodoTask } from '../../types/todoTasks.types';
import { DoneActionTypes, DoneTask } from '../../types/doneTasks.types';


const Content: React.FC = () => {
  const database = useDatabase();
  const dispatch = useDispatch();

  const databaseLoader = (): void => {
    database.getAllObjects<(result: TodoTask[]) => TodoActionTypes>('todo', tasks => dispatch(importTodoTasks(tasks)))
    database.getAllObjects<(result: DoneTask[]) => DoneActionTypes>('done', tasks => dispatch(importDoneTasks(tasks)))
  }

  useEffect(() => {
    window.addEventListener('load', () => databaseLoader());
  }, []);

  return (
    <Switch>
      <Route component={AddTask} path="/addtask" />
      <Route component={TasksList} path="/:id" />
      <Route component={TasksList} path="/" />
      <Redirect from="*" to="/todo" />
    </Switch>
  );
}

export default Content;