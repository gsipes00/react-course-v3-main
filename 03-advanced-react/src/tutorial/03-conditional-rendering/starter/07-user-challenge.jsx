import { useState } from "react";
const defaultUser = {
  name: "default",
  age: 99,
  id: 99,
  hobby: "just do default",
};
const UserChallenge = () => {
  const [isLoggedIn, setIsLoggedIn] = useState({});
  // login function
  const logIn = () => {
    setIsLoggedIn({ name: "Gene", age: 39, id: 1, hobby: "learning react" });
  };
  // logout function
  const logOut = () => {
    setIsLoggedIn(null);
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h1>{isLoggedIn.name}</h1>
          <h4>Age: {isLoggedIn.age}</h4>
          <h5>Like to do? "{isLoggedIn.hobby}"</h5>
          <button className='btn' onClick={logOut}>
            log out
          </button>
        </div>
      ) : (
        <div>
          <h1>sorry mate, you need to log in</h1>
          <button className='btn' onClick={logIn}>
            log in
          </button>
        </div>
      )}
    </div>
  );
};

export default UserChallenge;
