import React from "react";
import NewTask from "./NewTask";

const Display = (props) => {
  const handlePassTask = (task) => {
    props.onSubmit(task);
  };

  return (
    <div>
      <NewTask onSubmit={handlePassTask} />
    </div>
  );
};

export default Display;
