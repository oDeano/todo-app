import { ModalBody, ModalFooter, ModalHeader, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import "../styles/TaskModal.css";
import TaskModalEdit from "./TaskModalEdit";

const TaskModal = ({ task, checkHandler, handleUpdateTask }) => {
  const [taskInfo, setTaskInfo] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setTaskInfo(task);
    setTitle(task.title);
    setDescription(task.description);
  }, []);

  const toggleEdit = () => setEdit((prev) => !prev);
  const handleCancel = () => {
    setTitle(task.title);
    setDescription(task.description);
    toggleEdit();
  };
  const handleSave = () => {
    handleUpdateTask(task.taskId, "title", title);
    handleUpdateTask(task.taskId, "description", description);
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
          {edit ? (
            <TaskModalEdit
              taskInfo={taskInfo}
              setTitle={setTitle}
              setDescription={setDescription}
              title={title}
              description={description}
              handleCancel={handleCancel}
              handleSave={handleSave}
            />
          ) : (
            <DisplayInfo task={task} toggleEdit={toggleEdit} />
          )}
        </div>
      </ModalBody>
      <ModalFooter></ModalFooter>
    </>
  );
};

export default TaskModal;

const DisplayInfo = ({ task, toggleEdit }) => {
  return (
    <div className="task-modal-info-container" onClick={toggleEdit}>
      <div>{task.title}</div>
      <div>{task.description}</div>
    </div>
  );
};
