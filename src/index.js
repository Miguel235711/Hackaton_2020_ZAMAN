import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxthunk from 'redux-thunk';

import reducers from './dataManager';

const store = createStore(
  reducers,
  {},
  applyMiddleware(reduxthunk)
);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

