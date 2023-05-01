import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello, { Hello2, Hello3, Hello4 } from './lecture/start';
import Hello5 from './lecture/Var';
import Library from './lecture/Library';
import Greeting from './lecture/Greeting';
import GreetingAll from './lecture/GreetingAll';
import Clock from './lecture/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Hello />
    <Hello2 />
    <Hello3 />
    <Hello4 />
    <Hello5 />
    <Library />
    <Greeting />
    <hr />
    <GreetingAll />
  </React.StrictMode>
);

const timer = ReactDOM.createRoot(document.getElementById('timer'));
setInterval (() => {
  timer.render(
    <React.StrictMode>
      <Clock />
    </React.StrictMode>
  );
}, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
