import './App.css';
import Board from './Board'

function App() {

  function handleChange(e) {
    console.log('change')
  }

  return (
    <div className="App">
      <label>
        <input type="checkbox" id="modo" onChange={handleChange}/>
        Fijar fichas
      </label>
      <Board/>
      <div id="instrucciones">
        Botón izquierdo: fichas blancas. Botón derecho: fichas negras.
      </div>
    </div>
  )
}

export default App;
