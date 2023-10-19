import logo from './logo.svg';
import './App.css';
import Match from './components/Match'
import { useEffect, useState } from 'react';

function App() {
  const [partidosPronostico,setPartidosPronostico] = useState({});
  const [cantidadPartidos,setCantidadPartidos] = useState(8);
  const posiblesResultados = ['local','empate','visitante'];
  let matchs = [...Array(cantidadPartidos)].map((e,i)=>
  <Match key={i} numberOfMatch={i} onChangePartidosPronostico={setPartidosPronostico}/>
  )
  let restulsMatch = ([...Array(cantidadPartidos)].map((e,i)=>
    <Match key={i+cantidadPartidos} isSimulado={true} numberOfMatch={i} />
  ))
 
  const [resultados,setResultados] = useState(restulsMatch);


  const simular = () => {
    Object.keys(partidosPronostico).length !== cantidadPartidos && console.log('alerta no todos partidos completos');
    
    let aciertos = 0;
    let aciertosObj=[];
    const resultadosSimulados = {};
    for(var i = 0;i<cantidadPartidos;i++){
      resultadosSimulados[i]=posiblesResultados[Math.floor(Math.random() * posiblesResultados.length)];
      if(resultadosSimulados[i] == partidosPronostico[i]){
        console.log('coincidencia');
        aciertos++;
        aciertosObj[i]=true;
      }
    }
    console.log({aciertos})
    setResultados(([...Array(cantidadPartidos)].map((e,i)=>
      <Match key={i+cantidadPartidos} isSimulado={true}  numberOfMatch={i} resultado={resultadosSimulados[i]} isAcierto={aciertosObj[i]===true}/>
    )))
    
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
