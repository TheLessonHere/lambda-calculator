import React from "react";

const SpecialButton = ({spec, value}) => {
  return (
    <button className="button special-button" id= {value}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      spec}
    </button>
  );
};

export default SpecialButton;