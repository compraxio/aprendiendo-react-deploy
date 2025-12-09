import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContextValue";

function TaskList() {
  const { tasks } = useContext(TaskContext);
  //*Si las tareas se obtienen desde una API (asíncrono) Llama a setState dentro del callback asíncrono del efecto:
  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aun</h1>;
  }

  return (
    <div className="grid grid-cols-3 gap-2 text-center">
      {tasks.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
}

export default TaskList;
