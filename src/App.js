import logo from './logo.svg';
import './App.css';
import Match from './components/Match'
import { useState } from 'react';

function App() {
  const [partidosPronostico,setPartidosPronostico] = useState({})
  const n = 8;
  const matchs = [...Array(n)].map((e,i)=>
  <Match key={i} numberOfMatch={i} partidosPronostico={partidosPronostico} onChangePartidosPronostico={setPartidosPronostico}/>
  )

  const simular = () => {
    console.log(partidosPronostico);
    Object.keys(partidosPronostico).length != n && console.log('alerta no todos partidos completos')
  }



  return (
    <div className='main'>
      <div id="pronosticos">
         <h1>Su pronóstico</h1>
         {matchs}
      </div>
      <button
      type="button"
      value="Simular"
      className="btnSimular"
      onClick={simular}
    >
      Simular resultados<i className="fas fa-vote-yea"></i>
    </button>
    </div>
  );
}


export default App;
