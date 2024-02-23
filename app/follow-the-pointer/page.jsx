"use client";
import * as React from "react";

export default function Page() {
  const ref = React.useRef(null);
  const [position, setPosition] = React.useState([20, 20]);

  const handleClick = ({ nativeEvent }) => {
    // Get the width and height of the child div
    const { width, height } = ref.current.getBoundingClientRect();
    // Get the width and height of the parent div
    const parentWidth = nativeEvent.target.offsetWidth;
    const parentHeight = nativeEvent.target.offsetHeight;
    // Calculate the new position of the child div
    let x = nativeEvent.offsetX - width / 2;
    let y = nativeEvent.offsetY - height / 2;

    // Ensure the child div does not go beyond the edge of the parent div
    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + width > parentWidth) x = parentWidth - width;
    if (y + height > parentHeight) y = parentHeight - height;
    setPosition([x, y]);
  };

  return (
    <>
      <div className="p-6 h-full">
        <div
          className="relative w-full max-w-full h-full bg-coal rounded-md"
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
      </div>
    </>
  );
}
