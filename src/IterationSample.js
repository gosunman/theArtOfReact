import React from "react";

const IterationSample = () => {
  const names = ["susan", "colemann", "walker"];
  const nameList = names.map((name) => <li>{name}</li>);

  return <ul>{nameList}</ul>;
};

export default IterationSample;
