import { useState, useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Display from "./components/Display";
import Table from "./components/Table";

function App() {
  // State
  const [tasks, setTasks] = useState([]);

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
          <div>
            <Table tasks={tasks} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
