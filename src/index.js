import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';


//ここにそれぞれのコンポーネントをimport??　トラハック動画を見る限り必要ないのでは？

import reportWebVitals from './reportWebVitals';

//JSXをJSに変換してブラウザに表示する部分？現にこの部分を消すとブラウザは真っ白になる。要確認。
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
