import React, { useState } from "react";

const EventPracticeForFunction = () => {
  const [form, setForm] = useState({
    username: "",
    message: ""
  });

  const { username, message } = form;

  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: ""
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <div>
      <h1>í¨ìíìì ì´ë²¤í¸ ì°ìµ</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        value={username}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <input
        type="text"
        name="message"
        placeholder="message"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>íì¸</button>
    </div>
  );
};

export default EventPracticeForFunction;
