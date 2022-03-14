import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Display from "./components/Display";
import TaskList from "./components/TaskList";

const LOCAL_STORAGE_KEY = "todoApp.taskList";

function App() {
  // State
  const [tasks, setTasks] = useState([]);

  // Local storage
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Functions
  const handleReceiveData = (task) => {
    setTasks([...tasks, task]);
  };

  const handleUpdateTask = (id, property, newValue) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.taskId === id);
    task[property] = newValue;
    setTasks(newTasks);
  };

  const handleCheck = (id) => {
    const newTasks = [...tasks];
    const task = newTasks.find((task) => task.taskId === id);
    task.isComplete = !task.isComplete;
    setTasks(newTasks);
  };

  // Return
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="nav shadow h-100 w-100">
          <Nav />
        </div>
        <div className="display">
          <div>
            <Display handleReceiveData={handleReceiveData} />
          </div>
          <div className="p-3">
            <TaskList
              tasks={tasks}
              handleCheck={handleCheck}
              handleUpdateTask={handleUpdateTask}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
