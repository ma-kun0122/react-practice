import React from 'react';
import styled from "styled-components"
import Contents from "./Contents"


//https://nakanisi-yusuke.gitbooks.io/react-hands-on/content/2nd/button-3092-30af-30ea-30c3-30af-shi-306b-state-setstate-3067-bian-geng-3059-308b.html
class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state= { 
    count: 0}
  }

  //何マス埋まっているか確認し、次に何を入れるか判断する関数
  enterContents= ()=>{
    if(this.state.count% 2 == 0){
      return "◯"
    }else if(this.state.count % 2 !== 0)
    return "×"
  }

  //勝敗チェック関数
  judgeWinner= ()=>{

  }

  render() {
    return (
      <div onClick={()=>{this.setState( {count: this.state.count +1})}}>

        {this.props.value}
        {/*<p>{this.state.count}回クリック</p>*/}
      </div>
    );
  }
}


export default Cell;