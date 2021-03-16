import { default as bemCssModules } from 'bem-css-modules';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { TodoTask } from '../../types/todoTasks.types';
import { addTodoTask, editTodoTask } from '../../actions/todoActions';
import { default as AddTaskStyles } from './AddTask.module.scss';

const style = bemCssModules(AddTaskStyles);

const EDIT_LABEL = 'Edit task';
const ADD_LABEL = 'Add task';
const actualDate = new Date().toISOString().slice(0, 10);

const AddTask: React.FC = () => {
  const dispatch = useDispatch();
  const editState = useLocation().state as Partial<TodoTask>
  const history = useHistory();

  const [title, setTitle] = useState<string>(editState?.title ?? '');
  const [description, setDescription] = useState<string>(editState?.description ?? '');
  const [isDeadlineActive, setDeadlineActive] = useState<boolean>(false);
  const [deadline, setDeadline] = useState<string>(editState?.deadline
    ? new Date(editState.deadline).toISOString().slice(0, 10)
    : actualDate
  );

  const handleOnChangeText = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    e.target.id === 'title-task' ? setTitle(e.target.value) : setDescription(e.target.value);
  }
  const handleChangeDeadline = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value) {
      setDeadline(e.target.value);
    }
  }
  const handleOnSubmit = (e: React.MouseEvent) => {
    e.preventDefault();

    const location = {
      pathname: '/todo',
    }
    const newTask: TodoTask = {
      id: editState?.id ?? Date.now(),
      title,
      creationDate: editState?.id ?? Date.now(),
      description,
      deadline: isDeadlineActive ? new Date(deadline).getTime() : undefined,
    };

    if (editState?.id) {
      dispatch(editTodoTask(newTask));
    } else {
      dispatch(addTodoTask(newTask));
    }

    history.push(location);
  }
  const toggleDeadline = (): void => {
    setDeadlineActive(prev => !prev);
  }

  const buttonLabel = editState?.id ? EDIT_LABEL : ADD_LABEL;

  return (
    <div className={style()}>
      <form className={style('form')}>
        <div className={style('form-row')}>
          <label htmlFor="title-task">Task title</label>
          <input className={style('form-field')} onChange={handleOnChangeText} value={title} id="title-task" type="text" />
        </div>
        <div className={style('form-row')}>
          <label htmlFor="description-task">Task description</label>
          <textarea id="description-task" className={style('text-field')} onChange={handleOnChangeText} value={description} />
        </div>
        <div className={style('form-row')}>
          <label htmlFor="deadline-task">Deadline</label>
          <input onClick={toggleDeadline} id="deadline-task" type="checkbox" value={isDeadlineActive.toString()} />
          {isDeadlineActive && <input onChange={handleChangeDeadline} type="date" value={deadline} min={actualDate} />}
        </div>
        <button onClick={handleOnSubmit} type="submit">
          {buttonLabel}
        </button>
      </form>
    </div>
  );
}

export default AddTask;