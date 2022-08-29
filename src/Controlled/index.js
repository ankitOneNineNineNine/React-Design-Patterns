import { useState } from "react";

export const ControlledInput = () => {
  const [text, setText] = useState("");
  return (
    <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
  );
};
