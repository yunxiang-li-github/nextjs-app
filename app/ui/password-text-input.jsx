"use client";
import React from "react";

export default function PasswordInput({ minimum = 8 }) {
  const [inputValue, setInputValue] = React.useState("");
  const [isInputValueVisible, setIsInputValueVisible] = React.useState(false);
  const thresholdMet = inputValue.length >= minimum;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleToggleVisibility = () => {
    setIsInputValueVisible(!isInputValueVisible);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (thresholdMet) {
      alert("Password submitted");
    } else {
      alert("You need a longer password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-2">
      <div className="flex items-center justify-between">
        <label htmlFor="limited-text-input" className="primary">
          Password:
        </label>
        <span
          className={`text-sm mb-2 ${
            thresholdMet ? "text-beige" : "text-red-500"
          }`}
        >
          Characters Count: {inputValue.length}
        </span>
      </div>
      <div className="flex items-center justify-between relative">
        <input
          placeholder="Enter a password"
          type={isInputValueVisible ? "text" : "password"}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
          className="primary"
        />
        <button
          type="button"
          onClick={handleToggleVisibility}
          className="absolute right-2 bg-opacity-10 bg-white w-8 h-8 rounded-full grid place-content-center hover:opacity-80"
        >
          {isInputValueVisible ? "🙊" : "🙈"}
        </button>
      </div>

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}
