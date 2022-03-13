import React from "react";
import { Form } from "react-bootstrap";

const Task = ({ task }) => {
  return (
    <li className="task-element">
      <div className="task-checkbox rounded">
        <Form.Check type="checkbox" id="task-check" />
      </div>
      <div className="task-details">
        <div className="task-title">{task.title}</div>
        <div className="task-description">{task.description}</div>
      </div>
    </li>
  );
};

export default Task;
