import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setText] = useState(false);
  const [name, setName] = useState(true);
  return (
    <div>
      <h4>falsy OR: {text || "hello world"}</h4>
      <h4>falsy AND: {text && "hello world"}</h4>
      <h4>falsy OR: {name || "hello world"}</h4>
      <h4>falsy AND: {name && "hello world"}</h4>
    </div>
  );
};
export default ShortCircuitOverview;
