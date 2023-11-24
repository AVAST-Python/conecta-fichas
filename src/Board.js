import './Board.css'

import { useDispatch, useSelector } from 'react-redux'
import { leftClick, rightClick } from './features/boardSlice'

import Square from './Square'

function Board() {

  const dispatch = useDispatch()
  const {fixed, current} = useSelector(state => state.board)

  function onPressed(row, col) {
    dispatch(leftClick([row, col]))
  }
  function onRightPressed(row, col) {
    dispatch(rightClick([row,col]));
  }

  return (

    <div className="Board">
      <table>
        <tbody>
          {current.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => {
                const isFixed = fixed.some(([row, col]) => row === i && col === j)
                return (
                  <Square key={j} row={i} col={j} value={cell} fixed={isFixed}
                    onPressed={onPressed}
                    onRightPressed={onRightPressed}
                  />
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
