import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { memory } from './components/memory';
import App from './components/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={memory}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
