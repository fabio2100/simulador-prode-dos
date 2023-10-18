import escudo from '../img/barsaescudo.png';
import { useState } from 'react';

export default function Match({numberOfMatch,partidosPronostico,onChangePartidosPronostico,partidosSimulados,onChangePartidosSimulados,isSimulado}){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion partidosPronostico={partidosPronostico} onChangePartidosPronostico={onChangePartidosPronostico} numberOfMatch={numberOfMatch} isSimulado={isSimulado}/>
      <Team />
    </div>
    </>
  )
}


function Team(){
  return (
    <div className="team">
      <img src={escudo} className="img" alt="escudo equipo"></img>
    </div>)
}

function Puntuacion({partidosPronostico,onChangePartidosPronostico,numberOfMatch,isSimulado}){
  const [estePartido,setEstePartido] = useState();

  const onChangeRadio = ({target}) => {
    onChangePartidosPronostico(  prev =>  ({...prev,[numberOfMatch]:target.value}))
    setEstePartido(target.value)
  }
  return (  
    <> 
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio}  value={'local'} checked={estePartido === 'local'}></input>
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio}  value={'empate'} checked={estePartido === 'empate'}></input>
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio} value={'visitante'} checked={estePartido === 'visitante'}></input>         
    </>
  )
}