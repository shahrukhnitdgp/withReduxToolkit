import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {formReducer} from "./Redux/configStore";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from "./Redux/configStore"


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


