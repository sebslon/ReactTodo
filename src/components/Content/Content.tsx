import { Switch, Route, Redirect } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as ContentStyles } from './Content.module.scss';
import AddTask from '../AddTask/AddTask';
import TasksList from '../TasksList/TasksList';

const style = bemCssModules(ContentStyles);

const Content: React.FC = () => {
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