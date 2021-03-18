import './App.css';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

import { default as bemCssModules } from 'bem-css-modules';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import { StoreProvider } from './stores/StoreProvider';

bemCssModules.setSettings({
  modifierDelimiter: '--',
  throwOnError: true,
})

function App() {
  return (
    <Provider store={store}>
      <StoreProvider>
        <div className="App">
          <HashRouter>
            <Header />
            <Content />
          </HashRouter>
        </div>
      </StoreProvider>
    </Provider>
  );
}

export default App;
