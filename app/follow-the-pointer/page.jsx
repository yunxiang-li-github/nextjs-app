"use client";
import * as React from "react";

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
      <div
        className="relative w-screen max-w-full h-screen"
        onClick={handleClick}
      >
        <div
          className="w-12 h-12 absolute bg-beige transition duration-100 ease-in-out"
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
