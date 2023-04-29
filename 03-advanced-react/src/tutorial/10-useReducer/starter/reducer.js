import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./actions";
import { data } from "../../../data";

// reducer takes current state and an action
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return { ...state, people: [] };
  }
  if (action.type === RESET_LIST) {
    return { ...state, people: data };
  }
  if (action.type === REMOVE_ITEM) {
    const { id } = action.payload;
    let newPeople = state.people.filter((person) => person.id !== id);
    return { ...state, people: newPeople };
  }
  // return state, or as shown below return error
  throw new Error(`No matching "${action.type}" - action type`);
};

export default reducer;
