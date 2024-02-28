"use client";
import React from "react";
import Badge from "@/app/ui/badge";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";

const USER_DATA = {
  name: "Yunxiang Li",
  img: "https://avatars.githubusercontent.com/u/122238474",
  handle: "yunxiang-li-github",
  href: "https://github.com/yunxiang-li-github",
};

export default function Page() {
  const [mode, setMode] = React.useState("dark");
  const handleDarkMode = () => {
    setMode("dark");
  };
  const handleLightMode = () => {
    setMode("light");
  };

  const Icon = mode === "dark" ? SunIcon : MoonIcon;
  const handleMode = mode === "dark" ? handleLightMode : handleDarkMode;
  const text = mode === "dark" ? "Love Coding ⌨️ " : "& Playing Basketball 🏀";
  return (
    <>
      <div className="p-6 h-full">
        <div
          className={`h-full rounded-md sm:p-10 p-2 ${
            mode === "dark" ? "bg-coal" : ""
          }`}
        >
          <div className="w-full flex flex-row justify-end">
            <Icon
              className={`w-6 hover:cursor-pointer ${
                mode === "dark" ? "text-white" : "text-black"
              }`}
              onClick={handleMode}
            />
          </div>
          <Badge user={USER_DATA} mode={mode}>
            <p>{text}</p>
          </Badge>
        </div>
      </div>
    </>
  );
}
