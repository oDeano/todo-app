import {
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Form,
} from "react-bootstrap";
import { useEffect, useState } from "react";
import "../styles/TaskModal.css";
import TaskModalEdit from "./TaskModalEdit";

const TaskModal = ({ toggleModal, task, checkHandler }) => {
  const [taskInfo, setTaskInfo] = useState({});
  const [title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTaskInfo(task);
  }, []);

  const updateTaskInfo = () => {};
  const toggleEdit = () => setEdit((prev) => !prev);

  return (
    <>
      <ModalHeader closeButton>*Project*</ModalHeader>
      <ModalBody className="task-modal-details">
        <div>
          <Form.Check
            type="checkbox"
            id="task-check"
            checked={task.isComplete}
            onChange={checkHandler}
          />
        </div>
        <div className="task-modal-right">
          <DisplayEdit
            edit={edit}
            taskInfo={taskInfo}
            task={task}
            toggleEdit={toggleEdit}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={toggleModal}>Close</Button>
      </ModalFooter>
    </>
  );
};

export default TaskModal;

const DisplayEdit = ({ edit, toggleEdit, taskInfo, task }) => {
  return (
    <>
      {edit ? (
        <TaskModalEdit taskInfo={taskInfo} toggleEdit={toggleEdit} />
      ) : (
        <DisplayInfo task={task} toggleEdit={toggleEdit} />
      )}
    </>
  );
};

const DisplayInfo = ({ task, toggleEdit }) => {
  return (
    <div onClick={toggleEdit}>
      <div className="task-modal-info-container">{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
};
