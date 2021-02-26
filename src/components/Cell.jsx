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



  enterContent = ()=> {
    if(this.state.cellContent !== null){//すでに埋まっていたら更新しない機構
　　　return 
    }else if(this.props.countNum == 0 || this.props.countNum % 2 == 0){
      this.props.checkContent() //埋まってるマス目数確認
      //this.props.changeUnderLine()　//下線入れ替え
      this.setState({
        cellContent : "◯"
      })
    }else if(this.props.checkContent() % 2  !== 0){
      this.props.checkContent()　//埋まってるマス目数確認
      //this.props.changeUnderLine()　//下線入れ替え
      this.setState({
        cellContent : "×"
      })
    }
  }
  render() {
    return (
      <React.Fragment>
      
        <div>{this.props.cellContent}</div>

        <CellBox  onClick= {()=>this.enterContent()}> {/*ここではクリックしたら◯か×何が入るイベントにしたい*/}
          {this.state.cellContent}
        </CellBox>
      </React.Fragment>
    );
  }
}


export default Cell;