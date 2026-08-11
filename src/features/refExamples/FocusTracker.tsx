import { useRef } from "react";
import type { FocusEvent } from "react";

export const FocusTracker = () => {
  const firstInputRef = useRef<HTMLInputElement>(null);
  const secondInputRef = useRef<HTMLInputElement>(null);

  const focusCountRef = useRef(0);

  const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
    if (event.relatedTarget) {
      focusCountRef.current += 1;
      console.log("Focus transitions:", focusCountRef.current);
    }
  };

  const focusFirst = () => {
    firstInputRef.current?.focus();
  };

  return (
    <div>
      <input
        ref={firstInputRef}
        placeholder="Поле 1"
        onFocus={handleFocus}
      />
      <input
        ref={secondInputRef}
        placeholder="Поле 2"
        onFocus={handleFocus}
      />
      <button type="button" onClick={focusFirst}>
        Сфокусировать на первом
      </button>
    </div>
  );
};