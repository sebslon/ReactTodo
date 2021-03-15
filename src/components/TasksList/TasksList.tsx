import { default as bemCssModules } from 'bem-css-modules';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { DoneTask } from '../../types/doneTasks.types';
import { TodoTask } from '../../types/todoTasks.types';
import { RootState } from '../../reducers/rootReducer';
import Task from '../Task/Task';
import { default as TasksListStyles } from './TasksList.module.scss';

const style = bemCssModules(TasksListStyles);

type Task = TodoTask | DoneTask;

const TasksList: React.FC = () => {
  const { id } = useParams<any>();
  const tasks = useSelector((state: RootState) => id === 'done' ? state.done : state.todo)

  return (
    <div className={style()}>
      {(tasks as Task[]).map(task => (
        <Task key={task.id} {...task} />
      ))}
    </div>
  );
}
 
export default TasksList;