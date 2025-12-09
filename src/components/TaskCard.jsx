import { useContext } from "react";
import { TaskContext } from "../context/TaskContextValue";

function TaskCard({ task }) {
  const { delateTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-white p-4 rounded flex flex-col gap-2 items-center shadow-2xl ">
      <h1 className="text-xl font-bold capitalize">{task.title}</h1>
      <p className="text-gray-500 text-sm">{task.description}</p>
      <button
        onClick={() => {
          delateTask(task.id);
        }}
        className="bg-red-500 rounded-2xl p-1.5 hover:scale-110 hover:bg-red-900 transition "
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
