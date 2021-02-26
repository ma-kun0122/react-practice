import React,{ useState } from 'react';
import styled from "styled-components"
import "./Board.css"
import Cell from "./Cell"

const TurnContainer =styled.div`
display: flex;
padding:8px 16px
`

const TurnItem =styled.div`
display: block;
padding:8px 16px;
font-size:1.5rem;
width: 100%;

`


const TurnActive =styled.div`
display:block;
padding: 8px;
font-size: 1.5rem;
width: 100%;
border-bottom: 3px solid black;
`

const TurnNoActive =styled.div`
display:block;
padding: 8px;
font-size: 1.5rem;
width: 100%;
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
    super(props)
    this.state={
      cellCotent: null,
      countNum: 0,
      active: false
    }
  }

  cellNumber = (i)　=>{
    return  <Cell
              value ={i}
              checkContent={()=>this.checkContent()} //無限renderを防ぐ書き方
              countNum ={this.state.countNum}
            />
            }//cellNumber(i)は配列のi番目。


//全てのマスのうち、何マス空いているかを確認して返す関数
  checkContent = ()=> {
    for(let i = 0; i <= 8; i ++){
      if(this.cellNumber(i) !== null){//中身に何か入ってる場合、1カウントしていく
        this.setState({
          countNum : this.state.countNum + 1
        })
      }
    }console.log(this.state.countNum)
  }
　　
 

  

  render(){
    return (
      <>
        <TurnContainer>
              <div className = {`underLine $ 'setUnderLine': '' `} onclick={()=>remove(!underLine)}>◯</div>
              <div>×</div>
        </TurnContainer>
        
        <Table>
          <Row>
            <div>{this.cellNumber(0)}</div>
            <div>{this.cellNumber(1)}</div>
            <div>{this.cellNumber(2)}</div>
          </Row>

          <Row>
            <div>{this.cellNumber(3)}</div>
            <div>{this.cellNumber(4)}</div>
            <div>{this.cellNumber(5)}</div>
          </Row>

          <Row>
            <div>{this.cellNumber(6)}</div>
            <div>{this.cellNumber(7)}</div>
            <div>{this.cellNumber(8)}</div>
          </Row>
        </Table>
        </> 
      );
}
}

export default Board;