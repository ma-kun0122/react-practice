import React from 'react';
import styled from "styled-components"


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

class Footer extends React.Component {
    constructor(props){
      super(props);
      this.state={message: "processing"}
    } 

    //勝敗決着を検知し、メッセージを変える関数
    //changeStateMessage= ()=>{
        //勝敗決着を検知
       //if(){}
       // return this.state.message
    //} 

    handleClick() {
        window.location.reload()
      }

    render() {
      return (
        <FooterContainer>
            <StateMessage> 
               {/*{this.changeStateMessage()}*/}
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