import React from "react";

const Board = (props) => (
  <div className='col py-3' id={props.id}>
    <div className="card" style={{ width: "18rem" }}>
      <h5 className="card-header bg-dark bg-gradient text-primary">{props.name}</h5>
      <div className="card-body">
        <h5 className="card-title">Location - {props.location}</h5>
        <p className="card-text">{props.desc}</p>
        <h2>${props.price}</h2>
      </div>
    </div>
  </div>
);

export default Board;