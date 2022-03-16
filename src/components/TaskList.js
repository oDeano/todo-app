import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Task from "./Task";

const TaskList = ({ tasks, handleCheck, handleUpdateTask }) => {
  const [complete, setComplete] = useState(false);
  const [buttonText, setButtonText] = useState("Incomplete tasks");
  const [buttonVar, setButtonVar] = useState("danger");

  const toggleComplete = () => setComplete((prev) => !prev);

  function toggleButtonText() {
    if (complete === false) {
      setButtonText("Incomplete tasks");
    } else {
      setButtonText("All tasks");
    }
  }

  function toggleButtonVar() {
    if (complete === false) {
      setButtonVar("danger");
    } else {
      setButtonVar("success");
    }
  }

  useEffect(() => {
    toggleButtonText();
    toggleButtonVar();
  }, [complete]);

  return (
    <>
      <Button
        variant={`outline-${buttonVar}`}
        onClick={toggleComplete}
        id="toggle-button"
      >
        {buttonText}
      </Button>
      <ul>
        {complete ? (
          <ShowAll
            tasks={tasks}
            handleCheck={handleCheck}
            handleUpdateTask={handleUpdateTask}
          />
        ) : (
          <ShowIncomplete
            tasks={tasks}
            handleCheck={handleCheck}
            handleUpdateTask={handleUpdateTask}
          />
        )}
      </ul>
    </>
  );
};

export default TaskList;

const ShowIncomplete = ({ tasks, handleCheck, handleUpdateTask }) => {
  return (
    <>
      {tasks.map((task) => {
        if (task.isComplete === false) {
          return (
            <Task
              task={task}
              key={task.taskId}
              handleCheck={handleCheck}
              handleUpdateTask={handleUpdateTask}
            />
          );
        }
      })}
    </>
  );
};

const ShowAll = ({ tasks, handleCheck, handleUpdateTask }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Task
            task={task}
            key={task.taskId}
            handleCheck={handleCheck}
            handleUpdateTask={handleUpdateTask}
          />
        );
      })}
    </>
  );
};
