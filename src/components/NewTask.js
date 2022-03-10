import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const NewTask = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = {
      key: uuidv4(),
      title: title,
      description: description,
    };
    props.onSubmit(task);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add new task</button>
      </form>
    </div>
  );
};

export default NewTask;
