import React from 'react';
import styled from "styled-components"
import Cell from "./Cell"

const Teble = styled.div`
text-align: center;
`

const Row = styled.div`
display: flex;
`

class Board extends React.Component{
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
  }

  cellNumber = (i)　=>{
    return <Cell value ={i} />
  }//cellNumber(i)は配列のi番目。


//全てのマスのうち、何マス空いているかを確認して返す関数
  checkContent = ()　=>{
    let count = this.state.count
    for(let i = 0; i <= 8; i ++){
      if(this.cellNumber(i).innerHTML !=""){//中身に何も入ってない場合、1カウントしていく
        this.setState({count: this.state.count +1})
      }
    }
    return
  }

  render(){
    return (
      <Teble>
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
       </Teble>
      );
}
}

export default Board;