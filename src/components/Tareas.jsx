

export const Tareas = ({ tarea, setTarea, eliminarTarea }) => {

  const { titulo, fecha, descripcion, id } = tarea;

  const handleEliminar = () => {

    const respuesta = confirm("¿Desea de verdad eliminar este registro? 😤, no podrá recuperarlo después 😡")

    if(respuesta){
      eliminarTarea(id);
    }

  }

  return (
    <div className="bg-white px-5 py-10 shadow-lg rounded-lg mt-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">Titulo:

        <span className="font-normal normal-case">{titulo} - {id}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Fecha:

        <span className="font-normal normal-case">{fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">Descripción:
        <span className="font-normal normal-case">{descripcion}</span>
      </p>

      <div className="flex justify-between">
        <button
          className="text-white font-bold bg-purple-600 hover:bg-purple-700 transition-colors mt-4 py-1 px-6 rounded-md uppercase cursor-pointer"
          type="button"
          onClick={ () => setTarea(tarea)}
          >
          Actualizar 😁
        </button>
        <button
          className="text-white font-bold bg-red-600 hover:bg-red-700 transition-colors mt-4 py-1 px-6 rounded-md uppercase cursor-pointer"
          type="button"
          onClick={() => handleEliminar()}
          >            
          Eliminar 😠
        </button>
      </div>
    </div>
  )
}
