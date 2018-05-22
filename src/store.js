import { createStore, appleMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import rootReducer from './reducers';

const initialState = {};
const middleware = [thunk, promise];
const store = createStore(
  rootReducer,
  initialState,
  compose(appleMiddleware(...middleware)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
