import React from 'react';
import styled from "styled-components"

import Square from "./components/Square"
//import Restart from "./components/Restart"

//styled-componentsを使った各要素定義
const Container =styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;  
`

const Main =styled.div`
  font-size:1.2rem;
  text-align:center;
  `

const Title =styled.h1`
  font-size:1.2rem;
  text-align:center;
  `

const Display =styled.div`
  padding:8px 16px
  `

const Turn =styled.div`
  display: flex;
  text-align: center;
  `

const TurnItemCircle =styled.div`
  padding: 8px;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  border-bottom: 3px solid black; //この下線が切り替わる必要あり。
  `
const TurnItemCross =styled.div`
  padding: 8px;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  `

const State =styled.div`
`

const StateMessage =styled.span`
  padding: 8px;
  text-align: center;
  display: block;
  `

const Board =styled.div`
  padding: 16px;  
`

const Table =styled.div`
width: 140px;
height: 140px;
`  

const Row =styled.div`
display: flex;
`

const Cell =styled.div`
width: 3rem;
height: 3rem;
border: 0.5px solid black;
`


const Footer =styled.div`
padding: 16px;
`

const RestartButton =styled.a`
display: block;
`

//styled-component解説動画https://www.youtube.com/watch?v=3X69FzE32uE
//ReactDOM.renderについての記事https://qiita.com/tatane616/items/9808f8861586fb2b2926

class App extends React.Component {
　constructor(props){
   super(props)
   this.state = {
    contents: new Array(9)
    };
}

enterContent = ()=>{
  if(!this.state.value){
    this.setState({
    contents: this.state.value= "○"
  });
  }
};

onRestart = ()=>{
    this.setState({
    
  });
  }

    render() {
      return (
      <Container>  
        <Main>
          <Title>TIC TAC TOE</Title>
          <Display>　{/*　→display部分では①「ChangeUnderLine」②「CountTurn、ターン認識」のコンポーネントをはめこむ?　*/}
            <Turn>
              <TurnItemCircle>○</TurnItemCircle>
              <TurnItemCross>×</TurnItemCross>
            </Turn>
            <State>
              <StateMessage></StateMessage>
            </State>
          </Display>

        
          <Board>
            <Table> 
              <Row>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[0]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[1]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[2]}
                </Cell>
              </Row>

              <Row>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[3]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[4]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[5]}
                </Cell>
              </Row>
          
              <Row>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[6]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[7]}
                </Cell>
                <Cell onClick={this.enterContent}>
                  {this.state.contents[8]}
                </Cell>
              </Row>
          
            </Table>
          </Board>
          

          <Footer>　{/*　→footerの部分では①「JudgeWinner」②「Restart」のコンポーネントをはめこむ　*/}
            <StateMessage>
            　starting...
            </StateMessage>
            <RestartButton onClick>
              
            </RestartButton>
          </Footer>   

        </Main>
      </Container> 
      )
    }
  }
export default App;