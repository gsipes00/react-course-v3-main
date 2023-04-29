import { useState } from "react";
import { data } from "../../../../data";
import List from "./List";
import ButtonCounter from "./counter";

const LowerState = () => {
  const [people, setPeople] = useState(data);

  return (
    <section>
      <ButtonCounter />
      <List people={people} />
    </section>
  );
};
export default LowerState;