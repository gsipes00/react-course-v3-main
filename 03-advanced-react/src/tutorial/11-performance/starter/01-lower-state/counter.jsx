import { useState } from "react";

const ButtonCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <button
      className='btn'
      onClick={() => setCount(count + 1)}
      style={{ marginBottom: "1rem" }}
    >
      count {count}
    </button>
  );
};

export default ButtonCounter;
