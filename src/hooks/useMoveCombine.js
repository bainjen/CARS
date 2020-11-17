import { useState, useEffect } from "react";
import { calculateFeetPerMinute } from "../helpers/helpers";

const useMoveCombine = (wheelSize) => {
  const [xPos, setXPos] = useState(0);
  const [direction, setDirection] = useState("right");

  // move combine around field in a snake pattern
  const moveXPosition = (wheelSize) => {
    const singlePassDistance = Math.sqrt(43520) * 10;
    const distanceDelta = calculateFeetPerMinute(wheelSize);
    setXPos((prev) => {
      if (direction === "right") {
        if (prev + distanceDelta > singlePassDistance) {
          const newDistance = prev + distanceDelta;
          const deltaRight = newDistance - singlePassDistance;
          const newPosition = singlePassDistance - deltaRight;
          setDirection("left");
          return newPosition;
        } else {
          return prev + distanceDelta;
        }
      } else {
        if (prev - distanceDelta < 0) {
          const newDistance = prev - distanceDelta;
          const newPosition = newDistance * -1;
          setDirection("right");
          return newPosition;
        } else {
          return prev - distanceDelta;
        }
      }
    });
  };

  return { xPos, moveXPosition };
};

export default useMoveCombine;
