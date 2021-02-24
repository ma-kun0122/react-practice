import React from 'react';
import styled from "styled-components"
import Header from "./components/Header"
import Display from "./components/Display"
import Board from "./components/Board"
import Footer from "./components/Footer"


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

const Table =styled.div`
width: 140px;
height: 140px;
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
          <Display/>
          <Table>
          <Board/>
          </Table>
          <Footer/>
        </Main>
      </Container> 
      )
    }
  }
export default App;