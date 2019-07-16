import React from "react";

const NumberButton = ({numb}) => {
  return (
    <button>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      numb}
    </button>
  );
};

export default NumberButton;