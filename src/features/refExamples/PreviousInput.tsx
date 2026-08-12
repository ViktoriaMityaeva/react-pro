import { useEffect, useRef, useState } from "react";

export const PreviousInput = () => {
  const [value, setValue] = useState("");

  const prevValueRef = useRef("");

  useEffect(() => {
    prevValueRef.current = value;
  }, [value]);

  return (
    <div>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <p>Предыдущее значение: {prevValueRef.current}</p>
    </div>
  );
};