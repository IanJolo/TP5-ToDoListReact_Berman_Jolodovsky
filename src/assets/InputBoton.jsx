import React from 'react'
import ListaTarea from './ListaTarea';

export default function InputBoton({setListaTareas, contador}) {
  const [tarea, setTarea] = useState("");
const agregarTarea=(() =>{
  let tareaCreada={
        id: contador,
        titulo: tarea,
        fechaCreada: Date.now(),
        fechaTachada: "",
        estaTachada: false
  }
}) 
  setTarea("")
  setListaTareas(...ListaTarea, tarea)
  return (
    <>
  <input onChange={(tarea) => setTarea(tarea.target.value)} autocomplete="off" type="text" id="nuevaTarea" placeholder="Ingrese una nueva tarea" /> 
  <button id="botonAgregar" onclick={agregarTarea()}>Agregar</button>
  </>
)
}