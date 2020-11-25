import { useState, useEffect } from "react";
import { calculateFeetPerMinute } from "../helpers/helpers";

const moveYPos = (
  currentPosition,
  augerLength,
  setYPos,
  setStartSimulation
) => {
  const newYPosition = currentPosition + augerLength;
  if (newYPosition < Math.sqrt(43520) * 10) {
    setYPos(newYPosition);
  } else {
    setStartSimulation(false);
  }
};

const useMoveCombine = (wheelSize, augerLength) => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(2000);
  const [direction, setDirection] = useState("right");
  const [startSimulation, setStartSimulation] = useState(false);

  // calculates moving combine around field left and right in a snake pattern, assuming no obstacles
  // if the row is odd, the combine is moving right until the distance reaches the maximum value in feet of a single field point
  // if the row is even, the combine moves left until it hits 0 again.
  const movePosition = () => {
    const singlePassDistance = Math.sqrt(43520) * 10;
    const distanceDelta = calculateFeetPerMinute(wheelSize);
    setXPos((prev) => {
      if (direction === "right") {
        if (prev + distanceDelta > singlePassDistance) {
          const newDistance = prev + distanceDelta;
          const deltaRight = newDistance - singlePassDistance;
          const newXPosition = singlePassDistance - deltaRight;
          setDirection("left");
          moveYPos(yPos, augerLength, setYPos, setStartSimulation);
          return newXPosition;
        } else {
          return prev + distanceDelta;
        }
      } else {
        if (prev - distanceDelta < 0) {
          const newDistance = prev - distanceDelta;
          const newXPosition = newDistance * -1;
          setDirection("right");
          moveYPos(yPos, augerLength, setYPos, setStartSimulation);
          return newXPosition;
        } else {
          return prev - distanceDelta;
        }
      }
    });
  };

  useEffect(() => {
    if (startSimulation) {
      const timer = setTimeout(() => {
        movePosition();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [startSimulation, xPos]);

  return { xPos, yPos, movePosition, setStartSimulation };
};

export default useMoveCombine;
