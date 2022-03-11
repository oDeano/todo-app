import { v4 as uuidv4 } from "uuid";

const fakeData = () => {
  return [
    {
      taskId: uuidv4(),
      title: "task1",
      description: "description1",
    },
    {
      taskId: uuidv4(),
      title: "task2",
      description: "description2",
    },
    {
      taskId: uuidv4(),
      title: "task3",
      description: "description3",
    },
    {
      taskId: uuidv4(),
      title: "task4",
      description: "description4",
    },
    {
      taskId: uuidv4(),
      title: "task5",
      description: "description5",
    },
    {
      taskId: uuidv4(),
      title: "task6",
      description: "description6",
    },
  ];
};

export default fakeData;
