import './Square.css'
import { EMPTY, WHITE } from './features/boardSlice'



function Square(props) {
  const {row, col, value, fixed } = props
  const {onPressed, onRightPressed} = props
  const {parentClasses} = props

  const squareClass=value === EMPTY ? "empty" : value === WHITE ? "white" : "black"

  return (
    <div
      className={`cell ${fixed ? "fixed" : ""} ${parentClasses}`}
      onClick={() => onPressed(row, col)}
      onContextMenu={(e) => {e.preventDefault(); onRightPressed(row, col)}}
    >
      { value !== EMPTY &&
      <div className={`piece ${squareClass}`} ></div>}
    </div>
  )

}

export default Square
