import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello, { Hello2, Hello3, Hello4 } from './lecture/day1/start';
import Hello5 from './lecture/day1/Var';
import Library from './lecture/day1/Library';
import Greeting from './lecture/day1/Greeting';
import GreetingAll from './lecture/day1/GreetingAll';
import Clock from './lecture/day1/Clock';
import Book from './lecture/day2/BookProps';
import CommentList from './lecture/day2/CommentList';
import User from './lecture/day2/ThisStateTest';
import LifeCycleEx from './lecture/day2/LifeCycle';
import User2 from './lecture/day2/UseStateTest';
import BoardList from './lecture/day2/BoardList';

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
    <Book title="책제목1" price="20000" totalPage="200" body="리액트 입문자용입니다." />
    <Book title="책제목2" price="30000" totalPage="300" body="리액트 초보자용입니다." />
    <hr />
    <CommentList />
    <hr />
    <User />
    <hr />
    <LifeCycleEx prop_value = "프롭스 전달" />
    <User2 id={1}/>
    <BoardList />
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
