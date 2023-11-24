import './App.css';
import Board from './Board'

import { useDispatch, useSelector } from 'react-redux'
import { setMode } from './features/boardSlice'

function App() {

  const dispatch = useDispatch()
  const {fixing} = useSelector(state => state.board)

  function handleChange(e) {
    dispatch(setMode(e.target.checked))
  }

  return (
    <div className="App">
      <label className='modo'>
        <input type="checkbox"
          id="modo"
          checked={fixing}
          onChange={handleChange}
        />
        Fijar fichas
      </label>
      <Board/>
      <div id="instrucciones">
        Botón izquierdo: fichas blancas.<br/>
        Botón derecho: fichas negras.
      </div>
    </div>
  )
}

export default App;
