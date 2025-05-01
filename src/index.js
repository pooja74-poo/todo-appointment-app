import React from 'react';
import ReactDOM from 'react-dom/client';
import './todo-index.css';
import { ToDoIndex } from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// import { ToDoIndex } from './todo-index'; // 👈 this matches your current file name

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ToDoIndex />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

