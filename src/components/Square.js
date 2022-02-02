import React from "react";

const Square = (props) => {
  return (
    <div>
      <button className="btn" onClick={()=>props.onClick()} id={props.id}>{props.value}</button>
    </div>
  );
};

export default Square;
