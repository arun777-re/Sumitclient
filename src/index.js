import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ownerReducer from '../src/state/index.jsx'
import { Provider } from "react-redux";
import {configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
   owner:ownerReducer
})

const store = configureStore({
  reducer:rootReducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
