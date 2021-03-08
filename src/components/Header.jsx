import React from 'react';
import styled from "styled-components"

const Title =styled.h1`
font-size: 1.2rem;
`
//関数コンポーネントにする


function Header(props){
    return (
        <Title>Tic Tac Toe</Title>
    );
}

export default Header;