import React, { useEffect, useRef, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
} from "react-bootstrap";

const TaskModal = ({ handleClose, task }) => {
  return (
    <>
      <ModalHeader closeButton>Header</ModalHeader>
      <ModalBody>{task.title}</ModalBody>
      <ModalFooter>
        <Button onClick={handleClose}>Close</Button>
      </ModalFooter>
    </>
  );
};

export default TaskModal;
