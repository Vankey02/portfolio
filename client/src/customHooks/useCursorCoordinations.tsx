import { useState, useEffect } from "react";
export function useCursorCoordinations() {
  type mouseDetect = {
    x: number;
    y: number;
  };
  const [cursorCoor, setcursorCoor] = useState<mouseDetect>({
    x: 0,
    y: 0,
  });
  const handleMouseMove = (event: MouseEvent) => {
    setcursorCoor({ x: event.clientX, y: event.clientY });
  };
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return cursorCoor;
}
