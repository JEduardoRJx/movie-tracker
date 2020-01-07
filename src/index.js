import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './Containers/App/App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers';
import { 
  // BrowserRouter, 
  HashRouter } from 'react-router-dom'

const store = createStore(rootReducer, composeWithDevTools());

const router = (
  <HashRouter basename='/'>
    <App />
  </HashRouter>
)

ReactDOM.render(
<Provider store={store}>
  {router}
</Provider>,
document.getElementById('root'));

