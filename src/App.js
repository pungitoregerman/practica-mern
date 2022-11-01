import './App.css';
import data from './data/events1';
import Cards from './components/Cards'
import CardsComplet from './components/CardsComplet'
import { useState } from 'react';

function App() {
  let [numeroAcambiar,setNumeroAcambiar] = useState(0)
  let [mostrarOcultar,setMostrarOcultar] = useState(false)
    let next = () =>{
        if(numeroAcambiar < data.length-1){
          setNumeroAcambiar(++numeroAcambiar)
        }else{
          setNumeroAcambiar(0)
        }
      }
      let back = () =>{
        if(numeroAcambiar>0){
          setNumeroAcambiar(--numeroAcambiar)
        }else{
          setNumeroAcambiar(data.length -1)
        }
      }   
      let hide = () => {
        setMostrarOcultar(!mostrarOcultar)
      }

  return(
    mostrarOcultar ? ( 
     <div className='conteiner-card'> 
    <Cards name= {data[numeroAcambiar].name} image= {data[numeroAcambiar].image} category={data[numeroAcambiar].category} next={next} back={back} hide={hide}/>
    </div>)
      : 
      <div className='conteiner-card'>
      <CardsComplet name= {data[numeroAcambiar].name} image= {data[numeroAcambiar].image} category ={data[numeroAcambiar].category} description= {data[numeroAcambiar].description} next={next} back={back} hide={hide} />
      </div>
    )
}
export default App;

//Para usar una variable JS, se emplea directamente con {} 

/* import NombreFoto from './components/NombreFoto'
import CampoConArray from './components/CampoConArray';
import Flechita from './components/Flechita';
import data from './data/datoMentores'*/

/*  
  let [mostrarOcultar,setMostrarOcultar] = useState(false)
  let [numeroAcambiar,setNumeroAcambiar] = useState(0)
  //El hook de estado esta compuesto por dos Elementos
  //primer elemento es la variable que tiene que cambiar
  //segundo elemento la funcion que va a modificar/setear esa variable
  //es necesiario PRE-DEFINIR con que valor inciia el estado (adentro del parentesis del hook de estado)
  let hide = () => {
    setMostrarOcultar(!mostrarOcultar)
  }
  let next = () =>{
    if(numeroAcambiar < data.length-1){
      setNumeroAcambiar(++numeroAcambiar)
    }else{
      setNumeroAcambiar(0)
    }
  }
  let prev = () =>{
    if(numeroAcambiar>0){
      setNumeroAcambiar(--numeroAcambiar)
    }else{
      setNumeroAcambiar(data.length -1)
    }
  }
  return (
    <div className='card black'>
    <NombreFoto nombre= {data[numeroAcambiar].nombre} foto={data[numeroAcambiar].foto}/>
    {/*VAMOS A ARMAR UN CONDICIONAL QUE DEPENDA DEL BOOLEANO DEL EVENTO}*/
   /* {
      mostrarOcultar ? ( <>
      <p className='gray flex j-center a-center' onClick={hide}>Ocultar info</p>
      <div className='edad-fecha'>
      <p className='datos white r25 edad'>Edad: {data[numeroAcambiar].edad}</p>
      <p className='datos white l25 fecha'>Fecha: {data[numeroAcambiar].nacimiento}</p>
      </div>
      <div className='datos white flex a-center'>
      <p>Mail: {data[numeroAcambiar].mail}</p>
     </div>
     <CampoConArray titulo = 'Hobbies' datos = {data[numeroAcambiar].hobbies.join(' y ')}/>
     <CampoConArray titulo = 'Comidas' datos = {data[numeroAcambiar].comidas.join(' y ')}/>
      </>) 
      : 
      (<p className='gray flex j-center a-center' onClick={hide}>Mostrar info</p>
      )
    }
    <div className='flex j-center a-center'>
      <Flechita estilo ='r25' verbo = 'Anterior' onClick ={prev}/>
      <Flechita estilo ='l25' verbo = 'Siguiente' onClick={next}/>*/
      {/*los eventos en los componentes se pasan como propiedades/metodos NO COMO EVENTOS*/}
      {/*por eso es necesario desestructurarlo adentro del componente*/ }
      {/*y aplciarlo en la etiqueta HTML que corresponda*/}
   //</div>
 /* </div>
  ); */