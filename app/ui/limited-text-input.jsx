"use client";
import * as React from "react";

export default function LimitedTextInput({ characterLimit = 20 }) {
  const [inputValue, setInputValue] = React.useState("");
  const remainingCharacters = characterLimit - inputValue.length;
  const limitExceeded = remainingCharacters < 0;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (limitExceeded) {
      alert("The input exceeds the character limit. Please shorten your text.");
    } else {
      alert(`Characters remaining: ${remainingCharacters}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="limited-text-input" className="text-beige text-sm">
          Limited Text Input:
        </label>
        <span
          className={`text-sm mb-2 ${
            limitExceeded ? "text-red-500" : "text-beige"
          }`}
        >
          Characters remaining: {remainingCharacters}
        </span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
        className="primary"
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}
