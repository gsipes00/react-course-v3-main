import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [userData, setUserData] = useState(data);

  // submit new name
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();
    const newUser = { id: fakeId, name };
    const updatedUsers = [...userData, newUser];
    setUserData(updatedUsers);
    setName("");
  };

  // remove name
  const removeUser = (id) => {
    const updatedUsers = userData.filter((person) => person.id !== id);
    setUserData(updatedUsers);
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          submit
        </button>
      </form>
      {userData.map((data) => {
        const { name, id } = data;
        return (
          <div key={id}>
            <li>{name}</li>
            <button onClick={() => removeUser(id)} className='btn'>
              Remove User
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default UserChallenge;
