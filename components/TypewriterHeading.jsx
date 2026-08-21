"use client";

import { useState, useEffect, useRef } from "react";

const BRAND = "codewithmaik";
const PAUSE = 1400;
const SPACE_PAUSE = 220;

const TypewriterHeading = ({ greeting, name, speed = 90 }) => {
  const [greetingDisplayed, setGreetingDisplayed] = useState("");
  const [cyclePart, setCyclePart] = useState("");
  const [cursorOn, setCursorOn] = useState(true);
  const timeoutRef = useRef(null);
  const watchdogRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    setGreetingDisplayed("");
    setCyclePart("");

    const armWatchdog = (text, setter, onDone) => {
      if (watchdogRef.current) clearTimeout(watchdogRef.current);
      watchdogRef.current = setTimeout(() => {
        if (cancelled) return;
        setter(text);
        onDone();
      }, text.length * speed * 3 + 2000);
    };

    const delayFor = (char) => (char === " " ? speed + SPACE_PAUSE : speed);

    const typeInto = (text, setter, onDone) => {
      let i = 0;
      armWatchdog(text, setter, onDone);
      const step = () => {
        if (cancelled) return;
        i++;
        setter(text.slice(0, i));
        if (i < text.length) {
          timeoutRef.current = setTimeout(step, delayFor(text[i - 1]));
        } else {
          if (watchdogRef.current) clearTimeout(watchdogRef.current);
          onDone();
        }
      };
      timeoutRef.current = setTimeout(step, speed);
    };

    const deleteFrom = (text, setter, onDone) => {
      let i = text.length;
      armWatchdog("", setter, onDone);
      const step = () => {
        if (cancelled) return;
        i--;
        setter(text.slice(0, i));
        if (i > 0) {
          timeoutRef.current = setTimeout(step, delayFor(text[i]));
        } else {
          if (watchdogRef.current) clearTimeout(watchdogRef.current);
          onDone();
        }
      };
      timeoutRef.current = setTimeout(step, speed);
    };

    const pause = (onDone) => {
      timeoutRef.current = setTimeout(onDone, PAUSE);
    };

    const runDeleteName = () => deleteFrom(name, setCyclePart, runTypeBrand);
    const runTypeBrand = () =>
      typeInto(BRAND, setCyclePart, () => pause(runDeleteBrand));
    const runDeleteBrand = () => deleteFrom(BRAND, setCyclePart, runTypeName);
    const runTypeName = () =>
      typeInto(name, setCyclePart, () => pause(runDeleteName));

    typeInto(greeting, setGreetingDisplayed, () => {
      typeInto(name, setCyclePart, () => pause(runDeleteName));
    });

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (watchdogRef.current) clearTimeout(watchdogRef.current);
    };
  }, [greeting, name, speed]);

  useEffect(() => {
    const blink = setInterval(() => setCursorOn((v) => !v), 530);
    return () => clearInterval(blink);
  }, []);

  return (
    <h1 className="h1 mb-6 break-words">
      {greetingDisplayed}
      <br />
      <span className="text-accent">{cyclePart}</span>
      <span
        className="inline-block w-[3px] h-[0.8em] bg-white ml-1 align-middle"
        style={{ opacity: cursorOn ? 1 : 0, transition: "opacity 0.1s" }}
      />
    </h1>
  );
};

export default TypewriterHeading;
