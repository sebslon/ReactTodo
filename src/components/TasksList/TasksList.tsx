import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import { default as bemCssModules } from 'bem-css-modules';
import { default as TasksListStyles } from './TasksList.module.scss';

import Task from '../Task/Task';
import { DoneTask } from '../../types/doneTasks.types';
import { TodoTask } from '../../types/todoTasks.types';
import { RootState } from '../../reducers/rootReducer';

const style = bemCssModules(TasksListStyles);

type TaskType = TodoTask | DoneTask;

const TasksList: React.FC = () => {
  const { id } = useParams<any>();
  const tasks = useSelector((state: RootState) => id === 'done' ? state.done : state.todo)

  return (
    <div className={style()}>
      {(tasks as TaskType[]).map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}
 
export default TasksList;