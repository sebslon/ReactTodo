import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';
import Task from '../Task/Task';
import AddTask from '../AddTask/AddTask';

const style = bemCssModules(ContentStyles);

const taskList = (): JSX.Element => <div>Task List</div>

const Content: React.FC = () => {
  return (
    <Switch>
      <Route component={AddTask} path="/addtask" />
      <Route component={taskList} path="/:id" />
      <Route component={Task} path="/" />
      <Redirect from="*" to="/todo" />
    </Switch>
  );
}
 
export default Content;