import React from 'react';

class BoardOfSquares extends React.Component {
    render() {
      return (
        <div>
         <table　className =　"table">
           <tbody>
                <tr className = "row">
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                </tr>

                <tr className = "row">
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                </tr>
                
                <tr className = "row">
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                  <td className = "cell">"○"</td>
                </tr>

              </tbody>
            </table>
        </div>
      )
    }
  }
export default BoardOfSquares;