import { useSelector } from 'react-redux'
import './Board.css'
import Square from './Square'

function Board() {

  const {fixed, current} = useSelector(state => state.board)

  return (

    <div className="Board">
      <table>
        <tbody>
          {current.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const isFixed = !!fixed.find(e => e.cell[0] === i && e.cell[1] === j)
                return (
                  <Square key={j} row={i} col={j} value={cell} fixed={isFixed}/>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}


export default Board
