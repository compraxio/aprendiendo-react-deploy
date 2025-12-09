import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContextValue";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, Description);
    e.target[0].value = "";
    e.target[1].value = "";
  };
  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-zinc-800 p-10 mb-4">
        <h1 className="text-xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          autoFocus
          required
          className="bg-slate-300 p-3 w-full mb-2 outline-0"
        />
        <textarea
          placeholder="Escribe la descripcion"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          required
          className="bg-slate-300 p-3 w-full mb-2 outline-0"
        />
        <button className="bg-purple-900 p-1.5 rounded-2xl text-amber-50 ">Guardar</button>
      </form>
    </div>
  );
}

export default TaskForm;
