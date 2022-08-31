import { useState, useEffect } from "react"
import ErrorAlert from "./ErrorAlert";


export const Form = ({ tareas, setTareas, tarea, setTarea }) => {

  const [titulo, setTitulo] = useState("");
  const [fecha, setFecha] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(tarea).length > 0) {
      setTitulo(tarea.titulo);
      setFecha(tarea.fecha);
      setDescripcion(tarea.descripcion);
      alert("Se llenó el formulario 😮")
    }
  }, [tarea])

  const generarId = () => {

    const id = Math.random().toString(20).substr(2);

    return id

  }

  //Vaidación del Formulario

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Hola Luis");

    if ([titulo, fecha, descripcion].includes('')) {
      alert("Ojo pues que hay campos incompletos!!! 😡")
      setError(true)
      return;
    }
    setError(false)


    //Objeto de Tareas

    const objetoTareas = {
      titulo,
      fecha,
      descripcion,
    }

    if (tarea.id) {
      // Editando registro

      objetoTareas.id = tarea.id;

      const tareasActualizadas = tareas.map((tareaState) =>
        tarea.id === tareaState.id ? objetoTareas : tareaState);

    setTareas(tareasActualizadas);
    setTarea({});

    } else {
      // Nuevo registro
      objetoTareas.id = generarId();
      setTareas([...tareas, objetoTareas]);
    }


    //Limpiar nuestro formulario

    setTitulo("")
    setFecha("")
    setDescripcion("")

  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5 mb-10">
      <h2 className="font-black text-3xl text-center mb-10">Creación de Tareas</h2>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-5 py-5"
      >
        {error && <ErrorAlert><p>Todos los campos son obligatorios !!!! 😡😠😡</p></ErrorAlert>}

        <div className="mb-5">
          <label
            htmlFor="titulo"
            className="block font-bold uppercase text-gray-700"
          >Título:
          </label>
          <input
            id="titulo"
            type="text"
            placeholder="Título de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="fecha"
            className="block font-bold uppercase text-gray-700"
          >Fecha:
          </label>
          <input
            id="fecha"
            type="date"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="descripcion"
            className="block font-bold uppercase text-gray-700"
          >Descripción:
          </label>
          <textarea
            id="descripcion"
            type="text"
            placeholder="Descripción de la tarea"
            className="border-2 w-full p-2 mt-2 rounded-lg placeholder-gray-500"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </div>

        {!tarea.id ? (
          <input
            type="submit"
            className="bg-blue-600 w-full p-3 text-white font-bold hover:bg-blue-800 rounded-md transition-colors uppercase cursor-pointer"
            value="Crear Tarea"
          />
        ) : (
          <input
            type="submit"
            className="bg-green-600 w-full p-3 text-white font-bold hover:bg-green-800 rounded-md transition-colors uppercase cursor-pointer"
            value="Actualizar Tarea"
          />
        )}

      </form>
    </div>
  )
}

// export default Form