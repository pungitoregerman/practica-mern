import React from 'react'

export default function Cards(props) {
    let {image,name,category,description,next,back,hide} = props;
    
    return ( 
     <div className='cardComplet'>
      <div className='categoria'>{category}</div>
      <img src={image} alt={name} className='photo' />
      <p>{name}</p>
      <p>{description}</p>
      <div className='contenedor-botones'>
        <button onClick= {back} className='boton'>👈🏽</button>
        <button onClick = {hide} className='boton'>👆🏽</button>
        <button onClick={next} className='boton'>👉🏽</button>
      </div>
    </div> 
  )
}