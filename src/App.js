import logo from './logo.svg';
import './App.css';
import Match from './components/Match'
import { useState } from 'react';

function App() {
  const [partidosPronostico,setPartidosPronostico] = useState({});
  const [partidosSimulados,setPartidosSimulados] = useState({});
  const n = 8;
  const matchs = [...Array(n)].map((e,i)=>
  <Match key={i} numberOfMatch={i} partidosPronostico={partidosPronostico} onChangePartidosPronostico={setPartidosPronostico}/>
  )
  
  const restulsMatch = ([...Array(n)].map((e,i)=>
  <Match key={i+n} num={i+n} isSimulado={true}  numberOfMatch={i} partidosSimulados={partidosSimulados} onChangePartidosSimulados={setPartidosSimulados}/>
  ))
  const [resultados,setResultados] = useState(restulsMatch);

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
      <div id="resultados">
        <h1>Resultados</h1>
        {resultados}
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
