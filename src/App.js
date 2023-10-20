import logo from './logo.svg';
import './App.css';
import Match from './components/Match'
import { useEffect, useState } from 'react';
import Modal from './components/Modal';

function App() {
  const [partidosPronostico,setPartidosPronostico] = useState({});
  const [cantidadPartidos,setCantidadPartidos] = useState(Math.floor(Math.random()*4)+3);
  const [isModalOpen,setModalOpen] = useState(false);
  const [aciertos,setAciertos] = useState();
  const [completo,setCompleto] = useState(false);
  const posiblesResultados = ['local','empate','visitante'];
  let matchs = [...Array(cantidadPartidos)].map((e,i)=>
  <Match key={i} numberOfMatch={i} onChangePartidosPronostico={setPartidosPronostico}/>
  )
  let restulsMatch = ([...Array(cantidadPartidos)].map((e,i)=>
    <Match key={i+cantidadPartidos} isSimulado={true} numberOfMatch={i} />
  ))
 
  const [resultados,setResultados] = useState(restulsMatch);


  const simular = () => {
    Object.keys(partidosPronostico).length === cantidadPartidos && setCompleto(true);
    let aciertos = 0;
    let aciertosObj=[];
    const resultadosSimulados = {};
    for(var i = 0;i<cantidadPartidos;i++){
      resultadosSimulados[i]=posiblesResultados[Math.floor(Math.random() * posiblesResultados.length)];
      if(resultadosSimulados[i] == partidosPronostico[i]){
        aciertos++;
        aciertosObj[i]=true;
      }
    }
    setAciertos(aciertos)
    setResultados(([...Array(cantidadPartidos)].map((e,i)=>
      <Match key={i+cantidadPartidos} isSimulado={true}  numberOfMatch={i} resultado={resultadosSimulados[i]} isAcierto={aciertosObj[i]===true}/>
    )))
    setModalOpen(true);
  }



  return (
  <>
    {isModalOpen && <Modal onClose={()=>{setModalOpen(!isModalOpen)}}> 
      <h1 className='title'>Puntuación obtenida</h1>
      <p className='info'>Acertaste <span className='infoNumber'>{aciertos}</span> de <span className='infoNumber'>{cantidadPartidos}</span> partidos</p>
      {aciertos === cantidadPartidos && <p className='perfect'>Puntuación perfecta</p>}
      {aciertos === 0 && <p className='nada'>Mala suerte!</p>}
      {!completo && <p className='info'>No se completaron todos los partidos</p>}
    </Modal>}
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
    </>
  );
}


export default App;
