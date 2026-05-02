"use client";

import { useState, useEffect } from "react";

const TypewriterHeading = ({ greeting, name, speed = 75 }) => {
  const fullText = greeting + " " + name;
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const timer = setInterval(() => {
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i >= fullText.length) clearInterval(timer);
    }, speed);
    return () => clearInterval(timer);
  }, [fullText, speed]);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  const greetingPart = displayed.slice(0, Math.min(displayed.length, greeting.length));
  const namePart =
    displayed.length > greeting.length ? displayed.slice(greeting.length + 1) : "";

  return (
    <h1 className="h1 mb-6">
      {greetingPart}
      <br />
      <span className="text-accent">{namePart}</span>
      <span
        className="inline-block w-[3px] h-[0.8em] bg-white ml-1 align-middle"
        style={{ opacity: cursorOn ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </h1>
  );
};

export default TypewriterHeading;
