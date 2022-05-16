import React from 'react'
import "../HojasDeEstilo/Apepe.css"
import ImagenLogo from '../Imagen/foto-carrito.png';
import Boton from './Boton.js';
import Contador from './Contador.js';
import {useState} from 'react';

const Apepe = (props) => {

  const [numClicks, setNumClicks] = useState(0);


  const manejarClick = ()=> {
      setNumClicks(numClicks + 1);
  }

  const restarContador = ()=> {
    setNumClicks(numClicks - 1);
  }
  return (
    <div className='contenedor-apepe'>
        <img 
        className='imagen-apepe' 
        src={require(`../Imagen/juego-${props.imagen}.jpg`)}
        alt='Foto de HF'/>
        <div className='contenedor-texto'>
            <p className='titulo-texto'><strong>{props.nombre}</strong></p>
            <p className='informacion-texto'>consola: <strong>{props.consola}</strong></p>
            <p className='texto-texto'>{props.informacion}</p>
        </div>
        <div className='contenedor-clicks'>
       <img className='contenedor-logo' 
            src={ImagenLogo}
            alt="logo clicks"/>
     </div>
     <div className='contenedor-contador'>
       <Contador numClicks={numClicks} />
       <Boton texto="Sumar"
              esBotonDeClick={true}
              manejarClick={manejarClick} />
       <Boton texto="Quitar"
              esBotonDeClick={false}
              manejarClick={restarContador}/>
     </div>
    </div>
  )
}

export default Apepe