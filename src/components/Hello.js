import React from "react";

const Hello = ({ name, birthYear }) => {
  return (
    <div>
      <h1>
        hello {name} ,age-{new Date().getFullYear() - birthYear}
      </h1>
    </div>
  );
};

export default Hello;
