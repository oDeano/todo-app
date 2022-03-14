import NewTask from "./NewTask";

const Display = ({ handleReceiveData }) => {
  return (
    <>
      <NewTask handleReceiveData={handleReceiveData} />
    </>
  );
};

export default Display;
