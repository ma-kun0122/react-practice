import React from 'react';
import styled from "styled-components"
import Cell from "./Cell"


//https://nakanisi-yusuke.gitbooks.io/react-hands-on/content/2nd/button-3092-30af-30ea-30c3-30af-shi-306b-state-setstate-3067-bian-geng-3059-308b.html
//クリック時に○か×を入力するコンポーネント
class Board extends React.Component{
  constructor(props){
    super(props)
    this.state= { 
    count: 0}
  }

  cellNumber = (i)=>{
    return <Cell value ={i} />//引数を渡す
  }
//cellNumber(i)は配列のi番目を表す。

  render(){
    return (
      <div>
        <div>
          {this.cellNumber(0)}
          {this.cellNumber(1)}
          {this.cellNumber(2)}
        </div>

        <div>
          {this.cellNumber(3)}
          {this.cellNumber(4)}
          {this.cellNumber(5)}
        </div>

        <div>
          {this.cellNumber(6)}
          {this.cellNumber(7)}
          {this.cellNumber(8)}
        </div>
       </div>
      );
}
}

export default Board;