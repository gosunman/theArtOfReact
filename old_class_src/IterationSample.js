import React, { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "ëì¬ë" },
    { id: 2, text: "ë¼ì¬ë" },
    { id: 3, text: "ëì¬ë" },
    { id: 4, text: "ëì¬ë" }
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

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>ì¶ê°</button>
      <ul>{nameList}</ul>;
    </>
  );
};

export default IterationSample;
