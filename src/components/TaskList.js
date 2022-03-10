import React from "react";
import Task from "./Task";

const TaskList = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => {
        return (
          <Task
            title={task.title}
            description={task.description}
            key={task.key}
          />
        );
      })}
    </div>
  );
};

export default TaskList;
