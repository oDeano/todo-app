import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Display from "./components/Display";
import TaskList from "./components/TaskList";

function App() {
  const [taskList, setTaskList] = useState([]);
  const addTask = (newTask) => {
    setTaskList([...taskList, newTask]);
    console.log(taskList);
  };

  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="nav">
          <Nav />
        </div>
        <div className="display">
          <Display onSubmit={addTask} />
          <TaskList taskList={taskList} />
        </div>
      </div>
    </div>
  );
}

export default App;
