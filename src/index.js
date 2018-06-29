import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './store';

if (process.env.NODE_ENV === 'development') {
  window.console.log('Environment =>', process.env.NODE_ENV);
}

// <HashRouter></HashRouter> when navigating prod on local host
ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);
