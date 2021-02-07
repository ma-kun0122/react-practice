import React from 'react';

//マス目の中身のコンポーネント(初期設定null)
class ContentOfSquare extends React.Component {
    constructor(props){
      super(props);
      this.state ={
        value: null
      }
    }
}    

export default ContentOfSquare;