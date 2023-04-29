import { useEffect } from "react";

const Person = ({ name, position }) => {
  console.log("render");
  // useEffect(() => {
  //   console.log('unfortunately does not fix the issue');
  // }, []);
  return (
    <div>
      <h4>{name}</h4>
      <p>{position}</p>
    </div>
  );
};
export default Person;
