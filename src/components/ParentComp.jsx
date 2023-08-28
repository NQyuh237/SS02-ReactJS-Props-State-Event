import React from "react";
import ChildrenComp from "./ChildrenComp";

export default function ParentComp() {
  const ai = 12;
  const bi = 20;
  return (
    <>
      <h1>
        Số {ai} {bi}
      </h1>
      <ChildrenComp ai={ai} bi={bi} />
    </>
  );
}
