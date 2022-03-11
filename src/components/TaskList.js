import React from "react";
import Task from "./Task";

const TaskList = ({ tasks }) => {
  return tasks.map((task) => {
    return <Task task={task} key={task.key} />;
  });
};

export default TaskList;
