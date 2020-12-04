import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import rootReducers from './store/reducers/rootReducers';
import { App } from './App';

const composeEnhancers
  = typeof window === 'object'
  && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(thunk)),
);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
