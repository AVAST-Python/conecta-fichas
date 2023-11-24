import './Square.css'
import { EMPTY, WHITE } from './features/boardSlice'

import { useDispatch } from 'react-redux'
import { leftClick, rightClick } from './features/boardSlice'

function Square({row, col, value, fixed }) {
  const dispatch = useDispatch()
  const squareClass=value === EMPTY ? "empty" : value === WHITE ? "white" : "black"

  return (
    <td
      className={`${fixed ? "fixed" : ""}`}
      onClick={() => dispatch(leftClick([row, col]))}
      onContextMenu={(e) => {dispatch(rightClick([row,col])); e.preventDefault()}}
    >
      { value !== EMPTY &&
      <div className={`piece ${squareClass}`} ></div>}
    </td>
  )

}

export default Square
