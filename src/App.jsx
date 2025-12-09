import TaskList from "./components/TaskList";
import TaskForm from "./components/taskForm";

function App() {
  return (
    <main className="h-screen  bg-zinc-900">
      <div className="container mx-auto p-10">
      <TaskForm />
      <TaskList />

      </div>
    </main>
  );
}

export default App;
