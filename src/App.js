import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Display from "./components/Display";

const LOCAL_STORAGE_KEY = "todoApp.taskList";

function App() {
  // State
  const [tasks, setTasks] = useState([]);

  // Local storage
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedTasks) setTasks(storedTasks);
  }, []);

  // Functions
  const handleReceiveData = (task) => {
    setTasks([...tasks, task]);
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
            <Display onSubmit={handleReceiveData} />
          </div>
          <div className="p-3"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
