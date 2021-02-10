import React from 'react';
import styled from "styled-components"
import './BoardOfSquares.css';

//styled-componentsを使った定義
const Title =styled.h1`
  font-size:1.2rem;text-align:center
  `

const Display =styled.div`
  padding:8px 16px
  `

const StateMessage =styled.span`
  padding: 8px;
  text-align: center;
`

//styled-component解説動画https://www.youtube.com/watch?v=3X69FzE32uE
//ReactDOM.renderについての記事https://qiita.com/tatane616/items/9808f8861586fb2b2926

class BoardOfSquares extends React.Component {
//ひとまず、js形式で全て記載。render部分が「View」にあたる。
　constructor(props){
   super(props);
   this.state = {
  //ここに初期値をいれる
   }
}

    render() {
      return (
      <div>

        <Title>TIC TAC TOE</Title>

        <Display>　{/*　→display部分では①「ChangeUnderLine」②「CountTurn、ターン認識」のコンポーネントをはめこむ?　*/}
          <div className="turn">
            <div className="turn-item circle active">○</div>
            <div className="turn-item cross">×</div>
          </div>
          <div className="state">
            <StateMessage></StateMessage>
          </div>
        </Display>


        <table　className =　"table"> {/*　→tableの部分では①「ContentOfSquare」②「EnterContents、ターンの中身を入れる」のコンポーネントをはめこむ　*/}
          <tbody>
            <tr className = "row">
              <td className = "cell">○</td>
              <td className = "cell">○</td>
              <td className = "cell">○</td>
            </tr>

            <tr className = "row">
              <td className = "cell">○</td>
              <td className = "cell">○</td>
              <td className = "cell">○</td>
            </tr>
                
            <tr className = "row">
              <td className = "cell">○</td>
              <td className = "cell">○</td>
              <td className = "cell">○</td>
            </tr>
          </tbody>
        </table>


        <div class="l-footer footer">　{/*　→footerの部分では①「JudgeWinner」②「Restart」のコンポーネントをはめこむ　*/}
          <div class="state-message js-state-message">
          　starting...
          </div>
          <div>
            <a class="button js-restart ">RESTART</a>
          </div>
        </div>   

      </div>
      )
    }
  }
export default BoardOfSquares;