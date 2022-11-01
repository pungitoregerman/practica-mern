import React from 'react'

export default function Cards(props) {
    let {image,name,category,next,back,hide} = props;
    
    return ( 
     <div className='card'>
      <div className='categoria'>{category}</div>
      <img src={image} alt={name} className='photo' />
      <div className='contenedor-botones'>
        <button onClick= {back} className='boton'>👈🏽</button>
        <button onClick = {hide} className='boton'>👇🏽</button>
        <button onClick={next} className='boton'>👉🏽</button>
      </div>
    </div> 
  )
}