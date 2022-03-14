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
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTaskInfo(task);
    setTitle(task.title);
    setDescription(task.description);
  }, []);

  const updateTaskInfo = () => {};
  const toggleEdit = () => setEdit((prev) => !prev);
  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description);
    toggleEdit();
  };

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
            setTitle={setTitle}
            setDescription={setDescription}
            title={title}
            description={description}
            handleCancel={handleCancel}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        {/* <Button onClick={toggleModal}>Close</Button> */}
      </ModalFooter>
    </>
  );
};

export default TaskModal;

const DisplayEdit = ({
  edit,
  taskInfo,
  task,
  setTitle,
  setDescription,
  title,
  description,
  handleCancel,
  toggleEdit,
}) => {
  return (
    <>
      {edit ? (
        <TaskModalEdit
          taskInfo={taskInfo}
          setTitle={setTitle}
          setDescription={setDescription}
          title={title}
          description={description}
          handleCancel={handleCancel}
        />
      ) : (
        <DisplayInfo task={task} toggleEdit={toggleEdit} />
      )}
    </>
  );
};

const DisplayInfo = ({ task, toggleEdit }) => {
  return (
    <div className="task-modal-info-container" onClick={toggleEdit}>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
};
