import { useState, useRef } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Display from "./components/Display";
import TaskList from "./components/TaskList";

function App() {
  // State
  let test = {
    id: 1,
    title: "task1",
    description: "description",
  };
  const [tasks, setTasks] = useState([test]);
  const dataRef = useRef();

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
          <Display onSubmit={handleReceiveData} />
          <TaskList tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default App;
