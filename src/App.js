import React from 'react';
import styled from "styled-components"
import Header from "./components/Header"
import Board from "./components/Board"

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

class App extends React.Component {
　constructor(props){
   super(props)
}
    render() {
      return (
      <Container>  
        <Main>
          <Header/>
          <Board/>
        </Main>
      </Container> 
      )
    }
  }
export default App;