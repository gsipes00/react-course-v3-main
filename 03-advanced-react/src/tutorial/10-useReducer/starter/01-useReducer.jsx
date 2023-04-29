// import React from 'react';
// import { data } from '../../../data';
// const ReducerBasics = () => {
//   const [people, setPeople] = React.useState(data);

//   const removeItem = (id) => {
//     let newPeople = people.filter((person) => person.id !== id);
//     setPeople(newPeople);
//   };
//   return (
//     <div>
//       {people.map((person) => {
//         const { id, name } = person;
//         return (
//           <div key={id} className='item'>
//             <h4>{name}</h4>
//             <button onClick={() => removeItem(id)}>remove</button>
//           </div>
//         );
//       })}
//       <button
//         className='btn'
//         style={{ marginTop: '2rem' }}
//         onClick={() => setPeople([])}
//       >
//         clear items
//       </button>
//     </div>
//   );
// };

// export default ReducerBasics;

import { useReducer } from "react";
import { data } from "../../../data";
import reducer from "./reducer";
import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";

const defaultState = { people: data };

const ReducerBasics = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  // const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
  };
  const clearItems = () => {
    dispatch({ type: CLEAR_LIST });
    // setPeople([]);
  };
  const resetItems = () => {
    dispatch({ type: RESET_LIST });
    // setPeople(data);
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item'>
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={resetItems}
        >
          reset items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: "2rem" }}
          onClick={clearItems}
        >
          clear items
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
