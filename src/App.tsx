import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { default as bemCssModules } from 'bem-css-modules';

bemCssModules.setSettings({
  modifierDelimiter: '--',
  throwOnError: true,
})

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Content />
      </HashRouter>
    </div>
  );
}

export default App;
