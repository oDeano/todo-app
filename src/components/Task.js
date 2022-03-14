import { useState } from "react";
import {
  Form,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "react-bootstrap";
import TaskModal from "./TaskModal";

const Task = ({ task, handleCheck }) => {
  const checkHandler = () => {
    handleCheck(task.taskId);
  };

  const test = (e) => {
    console.log(e);
  };

  // TaskModal state
  const [modalState, setModalState] = useState(false);
  const toggleModal = () => setModalState((prev) => !prev);

  return (
    <div>
      <li className="task-element" onClick={toggleModal}>
        <div className="task-checkbox rounded">
          <Form.Check
            type="checkbox"
            id="task-check"
            checked={task.isComplete}
            onChange={checkHandler}
          />
        </div>
        <div className="task-details">
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
        </div>
      </li>
      <Modal show={modalState} onHide={toggleModal}>
        <TaskModal toggleModal={toggleModal} task={task} />
      </Modal>
    </div>
  );
};

export default Task;
