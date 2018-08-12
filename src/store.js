import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';

const isChrome = !!window.chrome;
const middleware = [thunk, promise];
const devEnv = process.env.NODE_ENV;

const store = createStore(
  rootReducer,

  devEnv === 'development' &&
    isChrome &&
    compose(
      applyMiddleware(...middleware)
      // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ),
  applyMiddleware(...middleware)
);

export default store;
