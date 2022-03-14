import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const TaskModalEdit = ({ taskInfo, toggleEdit }) => {
  return (
    <div>
      <div className="task-modal-edit">
        <Form>
          <Form.Control
            type="text"
            id="edit-title"
            placeholder="Task"
            value={taskInfo.title}
          />
          <Form.Control
            type="text"
            id="edit-description"
            placeholder="Description"
            value={taskInfo.description}
          />
        </Form>
      </div>
      <div>
        <Button variant="danger" size="sm">
          Save
        </Button>
        <Button variant="outline-secondary" size="sm" onClick={toggleEdit}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TaskModalEdit;
