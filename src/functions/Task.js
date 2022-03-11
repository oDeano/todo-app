class Task {
  constructor() {
    this.taskId = undefined;
    this.title = undefined;
    this.description = undefined;
  }

  returnObj() {
    return {
      taskID: this.taskId,
      title: this.title,
      description: this.description,
    };
  }
}

export default Task;
