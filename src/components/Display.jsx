import React from 'react';
import styled from "styled-components"
import Cell from "./Cell"


const TurnContainer =styled.div`
display: flex;
padding:8px 16px
`

const TurnItem =styled.div`
display:block;
padding: 8px;
font-size: 1.5rem;
width: 100%;
border-bottom: 3px solid black; //この下線が加わる必要あり
`


//https://qiita.com/olt/items/c96795e5bdf1058cd547 →スタイルの動的更新の記事

class Display extends React.Component{
    constructor(props){
      super(props)
      this.state ={
          countNum: 0,
          stylesSendButton: {}
      }
    }  


    
    changeUnderLine = ()=> {
      
    if(this.state.cellContent !== null){//すでに埋まっていたら更新しない機構
　　　return 
    }
  }
    render(){
        return(
            <TurnContainer>
                <TurnItem className = "circle">◯</TurnItem>
                <TurnItem className = "cross">×</TurnItem>
            </TurnContainer>
        )
    }
}    


export default Display;