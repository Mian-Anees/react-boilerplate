import './index.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter } from 'react-router-dom';
import { Dashboard } from './components/dashboard';
import { Home } from './pages/home';
import { Provider } from "react-redux";
import { ROUTES } from './routes/routerConfig';
import React from 'react';
import ReactDOM from 'react-dom';
import { RouterComponent } from './routes/routes';
import { configureStore } from "@reduxjs/toolkit";
import reportWebVitals from './reportWebVitals';
import rootReducer from './redux/sampleSlice/sample'

const store = configureStore({
  reducer:rootReducer
});
const client = new ApolloClient({
  uri: 'https://48p1r2roz4.sse.codesandbox.io',
  cache: new InMemoryCache()
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ApolloProvider client={client}>
    <RouterComponent >
    <Home /> 
    </RouterComponent>
    </ApolloProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
