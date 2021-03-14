import { default as bemCssModules } from 'bem-css-modules';
import IconButton from '../IconButton/IconButton';
import { default as TaskStyles } from './Task.module.scss';

import deleteTaskIcon from '../../images/clear-24px.svg';
import doneTaskIcon from '../../images/done-24px.svg';
import editTaskIcon from '../../images/create-24px.svg';

const style = bemCssModules(TaskStyles);
 
const Task: React.FC = (props) => {
  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>
          Example Title
        </h2>
        <IconButton icon={deleteTaskIcon} onClick={() => console.log('Click')}/>
      </div>
      <p className={style('description')}>
        Task Description
      </p>
      <p className={style('creation-date')}>
        Creation Date
      </p>
      <p className={style('deadline')}> 
        Deadline
      </p>
    </div>
  );
}
 
export default Task;