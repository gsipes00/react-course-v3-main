import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeItem = (id) => {
    const newArray = people.filter((name) => name.id !== id);
    setPeople(newArray);
  };
  const clearAllItems = () => {
    setPeople([]);
  };
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button
        type='button'
        style={{ marginTop: "2rem" }}
        className='btn'
        onClick={clearAllItems}
      >
        clear all
      </button>
    </div>
  );
};

export default UseStateArray;
