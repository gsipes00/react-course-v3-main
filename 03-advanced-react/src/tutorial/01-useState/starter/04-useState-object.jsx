import { useState } from "react";
const newPerson = { name: "John", age: 55, hobby: "Scream at the tv" };

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "Peter",
    age: 25,
    hobby: "playing poker",
  });
  // const [name, setName] = useState("Peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("read books");

  const displayPerson = () => {
    // setName("john");
    // setAge(55);
    // setHobby("scream at com");
    setPerson(newPerson);
  };

  // const { name, age, hobby } = person;
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>
        show John
      </button>
    </>
  );
};

export default UseStateObject;
