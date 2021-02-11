import React from 'react';
import styled from "styled-components"

//https://nakanisi-yusuke.gitbooks.io/react-hands-on/content/2nd/button-3092-30af-30ea-30c3-30af-shi-306b-state-setstate-3067-bian-geng-3059-308b.html
//クリック時に○か×を入力するコンポーネント
function Square(props){

    return (
        <button className="square" onClick={props.onClick}>
          {props.value}
        </button>
      );
}


export default Square;