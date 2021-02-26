import React from 'react';
import styled from "styled-components"
import Board from "./Board"

const FooterContainer = styled.div`
display: block;
padding: 8px;
`

const StateMessage = styled.div`
justify-content: center;
padding: 12px;
`

const RestartButton = styled.button`
border: 3px solid black;
border-radius: 6px;
background-color: white;
font-weight: bold;
padding: 4px 16px;
&:hover {
  cursor: pointer;
  background-color:black;
 color:white
  }
`
const WINNING_PATTERNS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state={message: "processing"}
    } 
    
    
    judgeWinner = ()=>{
      
    }
  

    handleClick() {
        window.location.reload()
      }

    render() {
      return (
        <FooterContainer>
            <StateMessage> 
               processing
            </StateMessage>
            <RestartButton onClick={this.handleClick}> 
               RESTART
            </RestartButton>

        </FooterContainer>
      );
    }
}

export default Footer;