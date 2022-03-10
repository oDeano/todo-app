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

const NewTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      key: uuidv4(),
      title: title,
      description: description,
    };
    props.onSubmit(task);
    handleModalState();
  };

  const [modalState, setModalState] = useState(false);
  const handleModalState = () => {
    setModalState(!modalState);
  };

  return (
    <div>
      <Button className="mt-2" onClick={handleModalState}>
        New Task
      </Button>
      <Modal show={modalState} onHide={handleModalState}>
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
                type="text"
                placeholder="Additional details"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="mb-2"
              />
            </Form.Group>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleModalState} variant="secondary">
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
