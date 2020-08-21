import React from "react";
import useInputs from "./useInputs";

export default function Info() {
  const [state, onChange] = useInputs({
    name: "",
    nickname: ""
  });

  const { name, nickname } = state;

  return (
    <div>
      <div>
        <input value={name} onChange={onChange} />
        <input value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>name:</b> {name}
        <b>nickname:</b> {nickname}
      </div>
    </div>
  );
}
