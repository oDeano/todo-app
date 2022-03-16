import { useState } from "react";
import { Modal } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import TaskModal from "./TaskModal";
import rDate from "../functions/rDate";

const Task = ({ task, handleCheck, handleUpdateTask }) => {
  const checkHandler = () => {
    handleCheck(task.taskId);
  };

  // TaskModal state
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => setModalState((prev) => !prev);

  // Date formatting
  const dueDate = task.dueDate;
  const dateSplit = dueDate.split("-");
  let date = new Date(task.dueDate);

  return (
    <div>
      <li className="task-element">
        <div className="task-checkbox rounded">
          <Form.Check
            type="checkbox"
            id="task-check"
            checked={task.isComplete}
            onChange={checkHandler}
          />
        </div>
        <div
          className="task-details"
          onClick={toggleModal}
          data-complete={task.isComplete}
        >
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
        </div>
        <div>
          {task.dueDate ? (
            <Form.Control
              type="date"
              readOnly
              plaintext
              value={task.dueDate}
              id="TaskList-date"
            />
          ) : null}
        </div>
        <div>
          <p>{JSON.stringify(dateSplit)}</p>
        </div>
      </li>
      <Modal show={modalState} onHide={toggleModal}>
        <TaskModal
          task={task}
          checkHandler={checkHandler}
          handleUpdateTask={handleUpdateTask}
        />
      </Modal>
    </div>
  );
};

export default Task;
