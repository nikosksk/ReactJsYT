import React from 'react'
import '../HojasDeEstilo/Contador.css'

const Contador = ({numClicks}) => {
  return (
    <div className='contador'>
        {numClicks}
    </div>
  )
}

export default Contador