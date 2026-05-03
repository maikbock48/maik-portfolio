"use client";

import { useState, useEffect, useRef } from "react";

const TypewriterHeading = ({ greeting, name, speed = 75 }) => {
  const fullText = greeting + " " + name;
  const [displayed, setDisplayed] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const timeoutRef = useRef(null);
  const fallbackRef = useRef(null);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      i++;
      setDisplayed(fullText.slice(0, i));
      if (i < fullText.length) {
        timeoutRef.current = setTimeout(tick, speed);
      }
    };

    timeoutRef.current = setTimeout(tick, speed);

    // Safety net: if the animation stalls (e.g., aggressive timer throttling
    // on some Android browsers), guarantee the full text is shown after a
    // generous deadline so the user never sees just a partial heading.
    const deadline = fullText.length * speed * 2 + 1500;
    fallbackRef.current = setTimeout(() => {
      if (!cancelled) setDisplayed(fullText);
    }, deadline);

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
    };
  }, [fullText, speed]);

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === "visible" && displayed.length < fullText.length) {
        setDisplayed(fullText);
      }
    };
    document.addEventListener("visibilitychange", onVisible);
    return () => document.removeEventListener("visibilitychange", onVisible);
  }, [displayed, fullText]);

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
