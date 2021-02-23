import React from 'react';
import styled from "styled-components"

const CellBox = styled.div`
text-align: center;
width: 3rem;
height: 3rem;
border: 0.5px solid black;
cursor:pointer
`

class Cell extends React.Component {
  constructor(props){
    super(props);
    this.state= { 
    cellContent : null,
    count : 0
    }
  }

  //勝敗チェック関数
  //◯か×か、どちらを入れるか判断する関数(都度、最後に勝敗チェック関数を差し込んでいる)
  enterContent= ()=> {
    console.log(this.props.checkContent)
    if(this.props.checkContent % 2 === 0){
      this.setState({
        cellContent : "◯"
      })
    }else if(this.props.checkContent % 2 !== 0){
      this.setState({
        cellContent : "×"
      })
    }return 
  }
  render() {
    return (
      <CellBox  onClick={this.enterContent}> {/*ここではクリックしたら◯か×何が入るイベントにしたい*/}
        {/*valueは、{this.props.value}です*/}
        {this.state.cellContent}
      </CellBox>
    );
  }
}


export default Cell;