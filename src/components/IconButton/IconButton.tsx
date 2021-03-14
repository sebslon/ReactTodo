import { default as bemCssModules } from 'bem-css-modules';
import { default as IconButtonStyles } from './IconButton.module.scss';

interface IconButtonProps {
  onClick: () => void;
  icon: string;
}

const style = bemCssModules(IconButtonStyles);

const IconButton: React.FC<IconButtonProps> = (props) => {
  return (
    <button 
      className={style()}
      onClick={props.onClick}
      style={{background: `url(${props.icon})`}}
      type="button"
    />
  );
}

export default IconButton;