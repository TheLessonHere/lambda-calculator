import React from "react";

const OperatorButton = ({oper, value}) => {
  return (
    <button className="button operator-button" id= {value}>
      {/* Display a button element rendering the data being passed down from the parent container on props */
      oper}
    </button>
  );
};


export default OperatorButton;