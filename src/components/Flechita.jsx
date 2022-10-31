import React from 'react'

export default function Flechita(props) {
    //A través de las llaves: Desestructuro
    let {verbo} = props //Sacar la propiedad verbo del objeto props 
    let {estilo} = props
    let {onClick} = props
    return (
    <div className= {`gray flecha ${estilo} flex j-center a-center`}onClick = {onClick}>{verbo}</div>
  )
}
