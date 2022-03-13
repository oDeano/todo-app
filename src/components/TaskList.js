import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return (
    <>
      <div>Tasks</div>
      <ul>
        {tasks.map((task) => {
          return <Task task={task} key={task.taskId} />;
        })}
      </ul>
    </>
  );
};

export default TaskList;
