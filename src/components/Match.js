import escudo from '../img/barsaescudo.png';
import { useState } from 'react';

export default function Match({numberOfMatch,onChangePartidosPronostico,isSimulado,resultado,isAcierto}){
  return (
    <>
    <div className={isAcierto===undefined ? "matchMain" : isAcierto ? "matchMain acierto" : "matchMain noAcierto"}>
      <Team />
      <Puntuacion onChangePartidosPronostico={onChangePartidosPronostico} numberOfMatch={numberOfMatch} isSimulado={isSimulado} resultado={resultado}/>
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

function Puntuacion({onChangePartidosPronostico,numberOfMatch,isSimulado,resultado}){
  const [estePartido,setEstePartido] = useState();

  const onChangeRadio = ({target}) => {
    onChangePartidosPronostico(  prev =>  ({...prev,[numberOfMatch]:target.value}))
    setEstePartido(target.value)
  }
  return (  
    <> 
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio}  value={'local'} checked={estePartido === 'local' || resultado === 'local'}></input>
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio}  value={'empate'} checked={estePartido === 'empate' || resultado === 'empate'}></input>
        <input type="radio" className='radioButton' disabled={isSimulado}  onChange={onChangeRadio} value={'visitante'} checked={estePartido === 'visitante' || resultado === 'visitante'}></input>         
    </>
  )
}