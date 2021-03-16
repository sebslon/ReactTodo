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
import { useEffect, useState } from 'react';

const style = bemCssModules(TaskStyles);

function getTimeInformation(unixTime: number, stringPrefix: string): string {
  const date = new Date(unixTime);
  const day = date.getDate();
  const month = Months[date.getMonth()];
  const year = date.getUTCFullYear();
  const hour = date.getUTCHours() > 9 ? date.getUTCHours() : `0${date.getUTCHours()}`;
  const minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`

  return `${stringPrefix} ${day} ${month} ${year} at : ${hour}:${minutes}`;
}

function getLeftTime(endTime: number): string {
  const leftTime = endTime - Date.now();
  const hours = Math.floor(leftTime / (1000 * 60 * 60));
  const minutes = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((leftTime % (1000 * 60)) / 1000);
  
  return `Time left: ${hours > 9 ? hours : `0${hours}`}:${minutes > 0 ? minutes : `0${minutes}`}:${seconds > 0 ? seconds : 0+seconds}`;
}

const Task: React.FC<TodoTask | DoneTask> = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams<any>();
  const isTodoPath = id !== 'done';

  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(Date.now())
    }, 1000);
    return () => {
      clearInterval(interval);
    }
  }, [time])
  
  const stringPrefix = isTodoPath ? 'Created' : 'Done';

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
    ? (<p className={style('creation-date')}>{getTimeInformation((props as TodoTask).creationDate, stringPrefix)}</p>)
    : (<p className={style('creation-date')}>{getTimeInformation((props as DoneTask).endDate, stringPrefix)}</p>)

  const isDeadline = props.deadline 
    ? (<p className={style('deadline')}>{getLeftTime(props.deadline)}</p>) 
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