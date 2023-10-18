import escudo from '../img/barsaescudo.png';
import { useState } from 'react';

export default function Match({numberOfMatch,partidosPronostico,onChangePartidosPronostico}){
  return (
    <>
    <div className="matchMain">
      <Team />
      <Puntuacion partidosPronostico={partidosPronostico} onChangePartidosPronostico={onChangePartidosPronostico} numberOfMatch={numberOfMatch}/>
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

function Puntuacion({partidosPronostico,onChangePartidosPronostico,numberOfMatch}){
  const [estePartido,setEstePartido] = useState();

  const onChangeRadio = ({target}) => {
    onChangePartidosPronostico(  prev =>  ({...prev,[numberOfMatch]:target.value}))
    console.log({partidosPronostico})
    setEstePartido(target.value)
  }
  return (  
    <> 
        <input type="radio" className='radioButton'  onChange={onChangeRadio}  value={'local'} checked={estePartido === 'local'}></input>
        <input type="radio" className='radioButton'  onChange={onChangeRadio}  value={'empate'} checked={estePartido === 'empate'}></input>
        <input type="radio" className='radioButton'   onChange={onChangeRadio} value={'visitante'} checked={estePartido === 'visitante'}></input>         
    </>
  )
}