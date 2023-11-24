import './Board.css'
import { useSelector } from 'react-redux'

function Board() {

  const {height, width, fixed, current} = useSelector(state => state.board)

  return (

    <div className="Board">
      height: {height}, width: {width} <br/>
      fixed: {fixed} <br/>
      current: {current} <br/>
    </div>
  )

}


export default Board
