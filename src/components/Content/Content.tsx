import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';
import Task from '../Task/Task';

const style = bemCssModules(ContentStyles);

const addTask = (): JSX.Element => <div><Task /></div>
const taskList = (): JSX.Element => <div>Task List</div>

const Content: React.FC = () => {
  return (
    <Switch>
      <Route component={addTask} path="/addtask" />
      <Route component={taskList} path="/:id" />
      <Route component={Task} path="/" />
      <Redirect from="*" to="/todo" />
    </Switch>
  );
}
 
export default Content;