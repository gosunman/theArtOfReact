import React, { useState } from "react";

export default function Say() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("안녕!");
  const onClickLeave = () => setMessage("잘 가요~");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        {" "}
        빨강색{" "}
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        {" "}
        파란색{" "}
      </button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
}
