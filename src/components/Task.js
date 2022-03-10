import React from "react";

const Task = ({ task }) => {
  return (
    <div>
      <p>{task.title}</p>
      <p>{task.description}</p>
    </div>
  );
};

export default Task;
