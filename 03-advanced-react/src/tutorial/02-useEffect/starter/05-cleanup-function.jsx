import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("");

  // toggleFunction
  const toggleFunc = () => {
    setToggle(!toggle);
  };

  // second component
  const ComponentTwo = () => {
    useEffect(() => {
      setData("I am gene");
    }, []);
    return (
      <div>
        <h1>Hello I am component two</h1>
        <h2>{data}</h2>
      </div>
    );
  };

  return (
    <div>
      <button className='btn' onClick={toggleFunc}>
        toggle me
      </button>
      {toggle ? <ComponentTwo /> : null}
    </div>
  );
};

export default CleanupFunction;
