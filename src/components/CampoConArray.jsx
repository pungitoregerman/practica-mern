import React from 'react'

export default function CampoConArray(props){
    let {titulo,datos} =  props; //Saco las propiedades titulo y datos del objeto props
  return (
    <div className='datos white flex a-center'>
      <p>{titulo}: {datos}</p>
    </div>
  )
}
