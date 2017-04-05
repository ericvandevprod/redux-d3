import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/App/App';
import reducers from './reducers/Reducer';

const rootEl = document.getElementById('app');
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const render = () => {
  ReactDOM.render(
      <Provider store={createStoreWithMiddleware(reducers)}>
        <App />
      </Provider>,
      rootEl
  );
};

render();