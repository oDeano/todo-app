import React, { useState } from "react";
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

const NewTask = (onSubmit) => {
  // Form data handling
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit.onSubmit(createTask());
    handleClose();
  };

  const createTask = () => {
    const task = new Task();
    task.taskId = uuidv4();
    task.title = title;
    task.description = description;

    return task;
  };

  const resetForm = () => {
    setTitle("");
    setDescription("");
  };

  // Modal State
  const [modalState, setModalState] = useState(false);
  const handleClose = () => {
    setModalState(false);
    resetForm();
  };
  const handleShow = () => setModalState(true);

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
