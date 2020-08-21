import React, { useState } from "react";

// stateë¥¼ ì¬ì©í  ë ì£¼ìì¬í­!!
// stateë¥¼ ì§ì  ë°ê¾¸ì´ìë ìëë¤.
// ë°ëì ì¬ë³¸ì ë§ë¤ì´ì ìë°ì´í¸ë¥¼ í´ì¼íë¤!!

export default function Say() {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("ìë!");
  const onClickLeave = () => setMessage("ì ê°ì~");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>ìì¥</button>
      <button onClick={onClickLeave}>í´ì¥</button>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        {" "}
        ë¹¨ê°ì{" "}
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        {" "}
        íëì{" "}
      </button>
      <h1 style={{ color }}>{message}</h1>
    </div>
  );
}
