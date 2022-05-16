import React from 'react'
import '../HojasDeEstilo/Boton.css'

const Boton = ({texto, esBotonDeClick, manejarClick}) => {

  return (
    <button className={esBotonDeClick ? "boton-sumar" : "boton-restar"} onClick={manejarClick}>
        {texto}
    </button>
  )
}

export default Boton