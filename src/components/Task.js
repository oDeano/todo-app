import { useState } from "react";
import { Form, Modal } from "react-bootstrap";
import TaskModal from "./TaskModal";

const Task = ({ task, handleCheck, handleUpdateTask }) => {
  const checkHandler = () => {
    handleCheck(task.taskId);
  };

  // TaskModal state
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => setModalState((prev) => !prev);

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
        <div className="task-details" onClick={toggleModal}>
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
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
