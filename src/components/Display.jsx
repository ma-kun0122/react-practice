import React from 'react';
import styled from "styled-components"


//https://qiita.com/kiida/items/ceac662d9a8bdd960499
const TurnItem =styled.div`
text-align: center;
padding:8px 16px;
border-bottom: ${props => props.active ? 'solid' : ''};
`


class Display extends React.Component {
    constructor(props){
      super(props);
    }
    render() {
      return (
        <>  
        <TurnItem active>◯</TurnItem>
        <TurnItem active>×</TurnItem>
        </>
      );
    }
  }

export default Display;