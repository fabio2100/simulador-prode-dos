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



  return (
    <div className='main'>
      <div id="pronosticos">
         <h1>Su pronóstico</h1>
         {matchs}
      </div>
    </div>
  );
}


export default App;
