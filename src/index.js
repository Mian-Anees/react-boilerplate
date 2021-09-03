import './index.css';

import { Cards } from './components/card';
import { Dashboard } from './components/dashboard';
import { Provider } from "react-redux";
import { ROUTES } from "./routes/routerConfig"
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterComponent } from './routes/routes';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/sampleSlice/sample'

const store = configureStore({
  reducer: rootReducer,
});
console.log({ROUTES})
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterComponent ROUTE={ROUTES} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

