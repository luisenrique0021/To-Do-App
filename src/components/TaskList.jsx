import { Tareas } from "./Tareas"
// import { useEffect } from "react"

export const TaskList = ({ tareas, setTarea, eliminarTarea }) => {

  // useEffect(() => {
  //   if (tareas.length > 0) {
  //     console.log("Iniciando 😡");
  //   }
  // }, [tareas])

  return (

    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10 md:h-screen overflow-scroll">

      {tareas && tareas.length ? (

        <>
          <h2 className="font-black text-3xl text-center mb-10">Tengo tareas pendientes 😡</h2>

          {tareas.map((tarea, index) => {
            return (
              <Tareas
                key={tarea.id}
                tarea={tarea}
                setTarea={setTarea}
                eliminarTarea={eliminarTarea}
              />

            )
          })}
        </>
      ) : (<h2 className="font-black text-3xl text-center mb-10">No tengo tareas pendientes 😁</h2>)}




    </div>
  )
}
