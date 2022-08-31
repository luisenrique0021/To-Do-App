import { useState, useEffect } from "react"
import { Form } from "./components/Form"
import { Header } from "./components/Header"
import { TaskList } from "./components/TaskList"


function App() {

  const [tareas, setTareas] = useState([])
  const [tarea, setTarea] = useState({})

  useEffect(() => {

    const obtenerTareasLocalStorage = () => {
      const tareasLocalStorage =
        JSON.parse(localStorage.getItem("tareas")) ?? [];
      setTareas(tareasLocalStorage)
    };
    obtenerTareasLocalStorage();

  }, []);

  useEffect( () => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas])

  const eliminarTarea = (id) => {
    const identificarTarea = tareas.filter(tarea => tarea.id !== id);
    setTareas(identificarTarea);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
      />
      <div className="mt-12 md:flex">
        <Form
          tarea={tarea}
          tareas={tareas}
          setTareas={setTareas}
          setTarea={setTarea}
        />
        <TaskList
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </div>
  )
}

export default App
