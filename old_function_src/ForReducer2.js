import React, { useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value
  };
}

export default function ForReducer2() {
  const [state, dispatch] = useReducer(reducer, {
    name: "",
    nickname: ""
  });

  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>name:</b> {name}
        <b>nickname:</b> {nickname}
      </div>
    </div>
  );
}
