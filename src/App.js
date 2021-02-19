import React from 'react';
import styled from "styled-components"
import Board from "./components/Board"



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

const TurnItem =styled.div`
  padding: 8px;
  font-size: 1.5rem;
  width: 100%;
  text-align: center;
  border-bottom: 3px solid black; //この下線が切り替わる必要あり。
`


const Table =styled.div`
width: 140px;
height: 140px;
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
    contents: Array(9).fill(null)
    };
}


//各マスに○バツを入れる関数
enterContent = (i)=>{
    this.setState({
    contents: this.state.contents[i]
    })
};

    render() {
      return (
      <Container>  
        <Main>
          <Title>TIC TAC TOE</Title>
          <Display>　{/*　→display部分では①「ChangeUnderLine」②「CountTurn、ターン認識」のコンポーネントをはめこむ?　*/}
            <Turn>
              <TurnItem>○</TurnItem>
              <TurnItem>×</TurnItem>
            </Turn>
           
          </Display>
          <Table>
        
           <Board/>
         
          </Table>

        </Main>
      </Container> 
      )
    }
  }
export default App;