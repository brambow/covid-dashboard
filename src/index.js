import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ElementsProvider } from '@cartolab/elements';
import theme from './theme';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import appReducer from './redux/reducer';
import { ThemeProvider } from 'theme-ui';

//initialize redux
let composeEnhancers;

if (process.env.NODE_ENV === 'development') {
  composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      : compose;
}
let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(appReducer, composeEnhancers());
} else if (process.env.NODE_ENV === 'production') {
  store = createStore(appReducer);
}

ReactDOM.render(
  <React.StrictMode>
    <ElementsProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </ElementsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
