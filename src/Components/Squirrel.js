import React from "react";

function Squirrel(props) {
  return (
    <div className="Squirrel">
      <h3>
        {props.sdata.age} {props.sdata.primary_fur_color}
      </h3>
      <p>
        Spotted on {props.sdata.date} in the {props.sdata.shift}.
      </p>
    </div>
  );
}

export default Squirrel;
