import React from 'react';
import styled from "styled-components"

const CellBox = styled.div`
text-align: center;
width: 3rem;
height: 3rem;
border: 0.5px solid black;
cursor:pointer
`

function Cell(props){
    return (
        <CellBox onClick={() => props.onClick()} > 
        {props.value}
        </CellBox>
    );
}


export default Cell;