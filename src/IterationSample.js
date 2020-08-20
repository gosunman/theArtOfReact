import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "논사람" },
    { id: 3, text: "난사람" },
    { id: 4, text: "넌사람" }
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    const nextNames = names.concat({ id: nextId, text: inputText });
    setNames(nextNames);
    setNextId(nextId + 1);
    setInputText("");
  };

  const nameList = names.map((name) => <li key={name.id}>{name.text}</li>);

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
