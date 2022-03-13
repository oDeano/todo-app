import React from "react";
import NewTask from "./NewTask";

const Display = ({ handleReceiveData }) => {
  // const handlePassTask = (task) => {
  //   onSubmit.onSubmit(task);
  // };

  return (
    <>
      <NewTask handleReceiveData={handleReceiveData} />
    </>
  );
};

export default Display;
