import React, { useState } from "react";
import NewTask from "./NewTask-bs";

const Display = (props) => {
  const passData = (data) => {
    props.onSubmit(data);
  };

  return (
    <div>
      <NewTask onSubmit={passData} />
    </div>
  );
};

export default Display;
