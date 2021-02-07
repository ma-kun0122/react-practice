import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import BoardOfSquares from './components/BoardOfSquares';
import ChangeUnderLine from './components/ChangeUnderLine';
import ContentOfSquare from './components/ContentOfSquare';
import CountTurn from './components/CountTurn';
import EnterContents from './components/EnterContents';
import JudgeWinner from './components/JudgeWinner';
import Restart from './components/Restart';

//ここにそれぞれのコンポーネントをimport??

import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <BoardOfSquares />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
