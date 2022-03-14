import Task from "./Task";

const TaskList = ({ tasks, handleCheck, handleUpdateTask }) => {
  return (
    <>
      <div>Tasks</div>
      <ul>
        {tasks.map((task) => {
          return (
            <Task
              task={task}
              key={task.taskId}
              handleCheck={handleCheck}
              handleUpdateTask={handleUpdateTask}
            />
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
