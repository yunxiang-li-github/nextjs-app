"use client";
import * as React from "react";
import "./style.css";

export default function FollowThePointer() {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState([0, 0]);

  const handleClick = ({ clientX, clientY }) => {
    console.log(clientX);
    console.log(clientY);

    const { width, height } = ref.current.getBoundingClientRect();
    setPosition([clientX - width / 2, clientY - height / 2]);
  };

  return (
    <>
      <div className="wrapper" onClick={handleClick}>
        <div
          className="box"
          ref={ref}
          style={{
            transform: `translate(${position[0]}px, ${position[1]}px)`,
            transition: "transform 0.3s",
          }}
        />
      </div>
    </>
  );
}
