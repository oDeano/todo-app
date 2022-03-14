import { ModalBody, ModalFooter, ModalHeader, Button } from "react-bootstrap";

const TaskModal = ({ toggleModal, task }) => {
  return (
    <>
      <ModalHeader closeButton>Header</ModalHeader>
      <ModalBody>{task.title}</ModalBody>
      <ModalFooter>
        <Button onClick={toggleModal}>Close</Button>
      </ModalFooter>
    </>
  );
};

export default TaskModal;
