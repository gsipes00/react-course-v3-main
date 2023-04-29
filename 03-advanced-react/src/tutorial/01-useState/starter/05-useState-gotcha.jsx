import { useState } from "react";

const UseStateGotcha = () => {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((prevState) => {
      const newState = prevState + 1;

      return newState;
    });
  };
  return (
    <>
      <h2>{count}</h2>
      <button type='button' className='btn' onClick={handleClick}>
        Increase
      </button>
    </>
  );
};

export default UseStateGotcha;
