import React from 'react';
import styled from "styled-components"

const TurnItem =styled.div`
text-align: center;
padding:8px 16px;
border-bottom: ${props => props.circleTurn ? 'solid' : ''};
border-bottom: ${props => props.crossTurn ? 'solid' : ''};
`

function Display(props){
      return (
        <>  
        <TurnItem circleTurn={props.circleTurn}>◯</TurnItem>
        <TurnItem crossTurn={props.crossTurn}>×</TurnItem>
        </>
      )
}      

export default Display;