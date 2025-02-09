import React from "react";

const Section = (props) => {
  return (
    <div style={{ margin: "5px" }}>
      <hr></hr>
      <h1 style={{ textAlign: "center" }}>{props.heading}</h1>
      <br></br>
      <p>{props.description}</p>
    </div>
  );
};

export default Section;
