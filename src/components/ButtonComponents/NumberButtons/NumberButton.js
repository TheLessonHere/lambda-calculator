import React from "react";

const NumberButton = ({numb, value, handler}) => {
  return (
    <button className="button number-button" id= {value} onClick={handler}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      numb}
    </button>
  );
};

export default NumberButton;