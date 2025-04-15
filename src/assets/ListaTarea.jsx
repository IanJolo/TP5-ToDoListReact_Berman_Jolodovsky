import React from 'react'

export default function ListaTarea(tareas) {
  return (
    <>
        {
            tareas.map((tarea)=>{
                <Tarea text="tarea.name"></Tarea>
            })
        }
    </>
  )
}
