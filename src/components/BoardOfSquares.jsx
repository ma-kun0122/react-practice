import React from 'react';
import './BoardOfSquares.css';


class BoardOfSquares extends React.Component {

    render() {
      return (
      <div>
        <h1>TIC TAC TOE</h1>
        <div className="display">
          <div className="turn">
            <div className="turn-item circle active">○</div>
            <div className="turn-item cross">×</div>
          </div>
          <div className="state">
            <span className="state-message"></span>
          </div>
        </div>


         <table　className =　"table">
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

            <div class="l-footer footer">
              <div class="state-message js-state-message">starting...</div>
              <div>
                <a class="button js-restart ">RESTART</a>
              </div>
            </div>
        
      </div>


      )
    }
  }
export default BoardOfSquares;