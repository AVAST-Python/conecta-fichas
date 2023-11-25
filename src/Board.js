import './Board.css'

import { useDispatch, useSelector } from 'react-redux'
import { leftClick, rightClick } from './features/boardSlice'

import Square from './Square'

function Board() {

  const dispatch = useDispatch()
  const { fixed, current } = useSelector(state => state.board)

  function onPressed(row, col) {
    dispatch(leftClick([row, col]))
  }
  function onRightPressed(row, col) {
    dispatch(rightClick([row, col]));
  }

  return (

    <div className="board">
      {current.map((row, i) => (
        row.map((cell, j) => {
          const isFixed = fixed.some(([row, col]) => row === i && col === j)

          const isLastRow = i === current.length - 1
          const isLastCol = j === row.length - 1

          return (
            <Square key={`${i}-${j}`}
              row={i} col={j} value={cell}
              fixed={isFixed}
              parentClasses={`${isLastRow ? "last-row" : ""} ${isLastCol ? "last-col" : ""}`}
              onPressed={onPressed}
              onRightPressed={onRightPressed}
            />
          )
        })
      ))}
    </div>
  )

}


export default Board
