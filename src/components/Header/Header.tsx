import { Link } from 'react-router-dom';
import { default as bemCssModules } from 'bem-css-modules';
import { default as HeaderStyles } from './Header.module.scss';

const style = bemCssModules(HeaderStyles);

export interface HeaderProps {
  
}
 
const Header: React.FC<HeaderProps> = () => {
  return (
    <nav className={style()}>
      <h1 className={style('title')}>Get your things DONE !</h1>
      <ul className={style('list')}>
        <li className={style('element')}>
          <Link className={style('link')} to='/todo'>Your tasks</Link>
        </li>
        <li className={style('element')}>
          <Link className={style('link')} to='/done'>Done</Link>
        </li>
        <li className={style('element')}>
          <Link className={style('link')} to='/addtask'>Add new task</Link>
        </li>
      </ul>
    </nav>
  );
}
 
export default Header;