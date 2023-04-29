import React, { useState, useEffect } from "react";
import MessageBox from "./helloThere";

const ToggleChallenge = () => {
  const [inStock, setInStock] = useState(0);

  const toggleButton = () => {
    if (inStock !== 0) {
      setInStock(0);
    } else {
      setInStock(1);
    }
  };

  return (
    <div>
      <button className='btn' onClick={toggleButton}>
        take a chance
      </button>
      {inStock ? (
        <MessageBox />
      ) : (
        <div style={{ margin: "2rem", fontSize: "3rem" }}>
          Sorry Not Your Lucky Day
        </div>
      )}
    </div>
  );
};

export default ToggleChallenge;
