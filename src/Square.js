import './Square.css'
import { EMPTY, WHITE } from './features/boardSlice'


function Square({value}) {

  const squareClass=value === EMPTY ? "empty" : value === WHITE ? "white" : "black"

  return (
    <td>
      { value !== EMPTY &&
      <div className={`piece ${squareClass}`} ></div>}
    </td>
  )

}

export default Square
