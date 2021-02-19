import React from 'react';
import styled from "styled-components"


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

class Display extends React.Component{
    constructor(props){
      super(props)

    }
    render(){
        return(
            <TurnContainer>
                <TurnItem>◯</TurnItem>
                <TurnItem>×</TurnItem>
            </TurnContainer>
        )
    }
}    


export default Display;