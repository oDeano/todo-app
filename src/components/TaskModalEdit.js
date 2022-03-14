import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

const TaskModalEdit = ({
  taskInfo,
  title,
  setTitle,
  description,
  setDescription,
  handleCancel,
}) => {
  return (
    <div>
      <div className="task-modal-edit">
        <Form>
          <Form.Control
            type="text"
            id="edit-title"
            placeholder="Task"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Form.Control
            type="text"
            id="edit-description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form>
      </div>
      <div className="task-modal-edit-buttons">
        <Button variant="danger" size="sm">
          Save
        </Button>
        <Button variant="outline-secondary" size="sm" onClick={handleCancel}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default TaskModalEdit;
