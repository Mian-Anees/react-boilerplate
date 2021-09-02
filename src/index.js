import './index.css';

import { Cards } from './components/card';
import { Dashboard } from './components/dashboard';
import { Provider } from "react-redux";
import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/sampleSlice/sample'

const store = configureStore({
  reducer: rootReducer,
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Dashboard/> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
