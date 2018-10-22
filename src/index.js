/**
 * created by Ajor on 20-10-2018
*/
//=============================================================================


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const render = () => {
  return ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>, document.getElementById("root"));
};

render();

serviceWorker.unregister();
