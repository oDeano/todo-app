import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "react-bootstrap/Form";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "react-bootstrap";
import Task from "../functions/Task";
import { useHotkeys } from "react-hotkeys-hook";
import "../styles/NewTask.css";

const NewTask = ({ handleReceiveData }) => {
  // Form data handling
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleReceiveData(createTask());
    handleClose();
  };

  const createTask = () => {
    const task = new Task();
    task.taskId = uuidv4();
    task.title = title;
    task.description = description;
    task.dueDate = date;

    return task;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
    setDate("");
  };

  // Modal State
  const [modalState, setModalState] = useState(false);
  const handleClose = () => {
    setModalState(false);
    resetForm();
  };
  const handleShow = () => setModalState(true);

  const modalHotKey = useHotkeys("ctrl+i", () => {
    setModalState((prev) => !prev);
  });

  return (
    <div className="shadow-sm p-3">
      <Button onClick={handleShow}>New Task</Button>
      <Modal show={modalState} onHide={handleClose}>
        <ModalHeader closeButton>Add new task</ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mb-2"
              />
              <Form.Control
                type="textarea"
                placeholder="Additional details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-2"
                wrap="soft"
              />
              <div className="NewTask-date-container">
                <Form.Label>Due date:</Form.Label>
                <Form.Control
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleClose} variant="secondary">
              Close
            </Button>
            <Button type="submit" variant="primary">
              Add new task
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </div>
  );
};

export default NewTask;
