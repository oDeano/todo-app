import React from "react";
import NewTask from "./NewTask";

const Display = (onSubmit) => {
  const handlePassTask = (task) => {
    onSubmit.onSubmit(task);
  };

  return (
    <>
      <NewTask onSubmit={handlePassTask} />
    </>
  );
};

export default Display;
