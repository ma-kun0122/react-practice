import React from 'react';
import styled from "styled-components"
import Display from "./Display"
import Cell from "./Cell"
import Footer from "./Footer"

const TurnContainer =styled.div`
display: flex;
padding:8px 16px;
`
const Table = styled.div`
text-align: center;
width: 140px;
height: 140px;
`
const Row = styled.div`
display: flex;
`


class Board extends React.Component{
  constructor(props){
    super(props);
    this.state={
      active: true,
      cells: Array(9).fill(null),
      winner: null,
      message: "processing",
      countNum: 0
    }
  }
  
  //ターン下線入れ替え関数
  changeUnderLine() {
    this.setState({active: !this.state.active})
    console.log(this.state.active)
    return ;
  }
  
  //各マスに番号を与える
  cellContent(i) {
    return <Cell value={this.state.cells[i]}
                 onClick={() => this.handleClick(i)}/>
  }
  
  //勝敗決着パターンの関数
  judgewinner(cells) {
    const winnerPatten = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerPatten.length; i++) {
      const [a, b, c] = winnerPatten[i];
      if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {//勝敗決着するケース
        //console.log(this.state.cells[a])
        this.setState({message: this.state.cells[a]　+ "win!"})
        //console.log(this.state.message)
        return this.state.cells[a]
      }else if(this.state.countNum == 8){ //引き分けのケース
        this.setState({message: "draw"})
      }
    }
    console.log(this.state.cells)
    return;
  }
  

  //クリック時関数
  handleClick(i) {
    const cells = this.state.cells.slice();
    cells[i] = this.state.enterNext ? '×' : '◯'; // ◯×を交互に入れる
    if(this.state.cells[i] !== null){
      return //マス目が埋まってたら入れない機構
    }else if(this.state.message !== "processing"){
      return //勝敗決着していたら続行できない機構
    }
    else{
    this.setState({
      cells: cells,// state変更:◯か×か入れる
      enterNext: !this.state.enterNext, //都度、stateを反転させる
      countNum : this.state.countNum + 1,//埋まっているマス数カウント
    })
    this.judgewinner(cells)
    console.log(this.state.countNum)
    this.changeUnderLine()
  }
}


  render(){
    return (
      <>
        <TurnContainer>
          <Display active = {this.state.active}>
          </Display>
        </TurnContainer>

        <Table>
          <Row>
          {this.cellContent(0)}
          {this.cellContent(1)}
          {this.cellContent(2)}
          </Row>

          <Row>
          {this.cellContent(3)}
          {this.cellContent(4)}
          {this.cellContent(5)}
          </Row>

          <Row>
          {this.cellContent(6)}
          {this.cellContent(7)}
          {this.cellContent(8)}
          </Row>
        </Table>
        <Footer message = {this.state.message}/> 
      </> 
      );
}
}

export default Board;