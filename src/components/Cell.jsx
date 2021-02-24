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

　//勝敗チェックする関数
　judgeWinner = ()=> {

}　
　//マス目クリック時に中身を入れる関数
  //この中に勝敗チェック関数を入れ込む必要あり
  enterContent = ()=> {
    if(this.state.cellContent !== null){//すでに埋まっていたら更新しない機構
　　　return 
    }else if(this.props.countNum == 0 || this.props.countNum % 2 == 0){
      this.props.checkContent()
      this.setState({
        cellContent : "◯"
      })
    }else if(this.props.checkContent() % 2  !== 0){
      this.props.checkContent()
      this.setState({
        cellContent : "×"
      })
    }
  }
  render() {
    return (
      <CellBox  onClick= {()=>this.enterContent() }> {/*ここではクリックしたら◯か×何が入るイベントにしたい*/}
        {/*valueは、{this.props.value}*/}
        {this.state.cellContent}
      </CellBox>
    );
  }
}


export default Cell;