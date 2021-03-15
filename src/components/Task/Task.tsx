import { default as bemCssModules } from 'bem-css-modules';
import IconButton from '../IconButton/IconButton';
import { default as TaskStyles } from './Task.module.scss';

import deleteTaskIcon from '../../images/clear-24px.svg';
import doneTaskIcon from '../../images/done-24px.svg';
import editTaskIcon from '../../images/create-24px.svg';
import { useHistory, useParams } from 'react-router';
import { DoneTask } from '../../types/doneTasks.types';
import { TodoTask } from '../../types/todoTasks.types';
import { useDispatch } from 'react-redux';
import { addDoneTask, removeDoneTask } from '../../actions/doneActions';
import { removeTodoTask } from '../../actions/todoActions';
import { Months } from '../../types/utils.types'

const style = bemCssModules(TaskStyles);

const Task: React.FC<TodoTask | DoneTask> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<any>();
  const isTodoPath = id !== 'done';

  const moveToDone = (): void => {
    const changedTask: DoneTask = {
      ...props,
      endDate: Date.now(),
    };

    dispatch(addDoneTask(changedTask));
    dispatch(removeTodoTask(props.id));
  };

  const deleteTask = (): void => {
    if (isTodoPath) {
      dispatch(removeTodoTask(props.id));
    } else {
      dispatch(removeDoneTask(props.id));
    }
  };

  const editTask = (): void => {
    const location = {
      pathname: '/addtask',
      state: props,
    };

    history.push(location);
  };

  const todoIcons = isTodoPath ? (
    <>
      <IconButton icon={editTaskIcon} onClick={editTask} />
      <IconButton icon={doneTaskIcon} onClick={moveToDone} />
    </>
  ) : null;

  const correctDateToDisplay = isTodoPath
    ? (<p className={style('creation-date')}>Creation date</p>)
    : (<p className={style('creation-date')}>End date</p>)

  const isDeadline = props.deadline 
    ? (<p className={style('deadline')}>Deadline</p>) 
    : null;

  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>
          {props.title}
        </h2>
        {todoIcons}
        <IconButton icon={deleteTaskIcon} onClick={deleteTask} />
      </div>
      <p className={style('description')}>
        {props.description}
      </p>
      {correctDateToDisplay}
      {isDeadline}
    </div>
  );
}

export default Task;