import React from "react";

const NumberButton = ({numb, handler}) => {
  return (
    <button onClick={handler}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      numb}
    </button>
  );
};

export default NumberButton;