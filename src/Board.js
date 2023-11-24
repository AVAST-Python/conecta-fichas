import { useSelector } from 'react-redux'
import './Board.css'
import Square from './Square'

function Board() {

  const {height, width, fixed, current} = useSelector(state => state.board)

  return (

    <div className="Board">
      <table>
        <tbody>
          {current.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <Square key={j} value={cell}/>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}


export default Board
