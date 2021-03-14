import { default as bemCssModules } from 'bem-css-modules';
import { default as TaskStyles } from './Task.module.scss';

const style = bemCssModules(TaskStyles);
 
const Task: React.FC = (props) => {
  return (
    <div className={style()}>
      <div className={style('state-panel')}>
        <h2 className={style('title')}>
          Example Title
        </h2>
        <button type="button">Button</button>
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