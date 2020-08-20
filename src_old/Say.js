import React, { useState } from "react";

// state를 사용할 때 주의사항!!
// state를 직접 바꾸어서는 안된다.
// 반드시 사본을 만들어서 업데이트를 해야한다!!

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
