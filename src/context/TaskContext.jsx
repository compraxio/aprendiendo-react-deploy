import { useState } from "react";
import { TaskContext } from "./TaskContextValue";
import { task } from "../data/task";

export function TaskContextProvider({ children }) {
  //*Si task ya es el arreglo de tareas (valor estático) UseState inicializado directamente:
  const [tasks, setTasks] = useState(task);

  const createTask = (newTask, newDescription) => {
    setTasks([
      ...tasks,
      {
        title: newTask,
        id: tasks.length,
        description: newDescription,
      },
    ]);
  };

  const delateTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        delateTask,
        createTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
