import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, handleCheck }) => {
  return (
    <>
      <div>Tasks</div>
      <ul>
        {tasks.map((task) => {
          return (
            <Task task={task} key={task.taskId} handleCheck={handleCheck} />
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
