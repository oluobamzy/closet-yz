import React from "react";

const Button = (props) => {
  return (
    <button className="btn" onClick={props.join}>
      Join Now
    </button>
  );
};

export default Button;
