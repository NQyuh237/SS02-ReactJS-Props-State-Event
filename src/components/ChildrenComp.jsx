import React from "react";

export default function ChildrenComp(props) {
  console.log(props.ai);
  console.log(props.bi);
  let aB = props.ai * props.bi;
  return (
    <>
      <h5>ai*bi={aB}</h5>
    </>
  );
}
