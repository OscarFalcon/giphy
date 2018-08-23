import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import ReactDOM from 'react-dom';
import store from './store/store.js'
import App from "./components/App";


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
