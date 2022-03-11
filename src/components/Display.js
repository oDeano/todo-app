import React from "react";
import NewTask from "./NewTask";

const Display = (props) => {
  const handlePassTask = (task) => {
    props.onSubmit(task);
  };

  return (
    <>
      <NewTask onSubmit={handlePassTask} />
    </>
  );
};

export default Display;
