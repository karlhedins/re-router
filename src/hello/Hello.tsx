import React from "react";
import { useTypedSelector } from "../app/createRootReducer";
import { selectMsg } from "../app/appReducer";

const Hello = () => {
  const msg = useTypedSelector(selectMsg);

  return (
    <div>
      <p>Hello {msg}</p>
    </div>
  );
};

export default Hello;
