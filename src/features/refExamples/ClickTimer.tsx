import { useRef } from "react";

interface ClickData {
  startTime: number | null;
  clickCount: number;
}

export const ClickTimer = () => {
  const clickDataRef = useRef<ClickData>({
    startTime: null,
    clickCount: 0,
  });

  const handleClick = () => {
    const data = clickDataRef.current;
    if (data.startTime === null) {
      data.startTime = Date.now();
    }
    data.clickCount += 1;

    console.log({
      diffMs: Date.now() - data.startTime,
      clickCount: data.clickCount,
    });
  };

  return <button onClick={handleClick}>Клик</button>;
};
