import './Square.css'
import { EMPTY, WHITE } from './features/boardSlice'



function Square(props) {
  const {row, col, value, fixed } = props
  const {onPressed, onRightPressed} = props

  const squareClass=value === EMPTY ? "empty" : value === WHITE ? "white" : "black"

  return (
    <td
      className={`${fixed ? "fixed" : ""}`}
      onClick={() => onPressed(row, col)}
      onContextMenu={(e) => {e.preventDefault(); onRightPressed(row, col)}}
    >
      { value !== EMPTY &&
      <div className={`piece ${squareClass}`} ></div>}
    </td>
  )

}

export default Square
