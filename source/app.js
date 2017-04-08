import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/app.jsx';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css';

import reduxApp from './reducers/index';

import { filterBySearchString } from './actions/filter';

let store = createStore(reduxApp);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);

// store.dispatch(filterBySearchString('Whatever')).then(() =>
//   console.log(store.getState())
// );
