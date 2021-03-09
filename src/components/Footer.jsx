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

function Footer(props){
  const handleClick = ()=> {
    window.location.reload()
  }
      return (
        <FooterContainer>
            <StateMessage> 
            {props.message}
            </StateMessage>
            <RestartButton onClick={handleClick}> 
               RESTART
            </RestartButton>

        </FooterContainer>
      );
}

export default Footer;