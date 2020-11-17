import { useState } from "react";
import { calculateFeetPerMinute } from "../helpers/helpers";

const useMoveCombine = (wheelSize, augerLength) => {
  const [xPos, setXPos] = useState(0);
  const [yPos, setYPos] = useState(0);
  const [direction, setDirection] = useState("right");

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
          // console.log("auger length", augerLength);
          const newYPosition = yPos + augerLength;
          setYPos(newYPosition);
          return newXPosition;
        } else {
          return prev + distanceDelta;
        }
      } else {
        if (prev - distanceDelta < 0) {
          const newDistance = prev - distanceDelta;
          const newXPosition = newDistance * -1;
          setDirection("right");
          const newYPosition = yPos + augerLength;
          setYPos(newYPosition);
          return newXPosition;
        } else {
          return prev - distanceDelta;
        }
      }
    });
  };

  return { xPos, yPos, movePosition };
};

// // calculates the position movement up and down on the field, assuming no obstacles

// const moveYPosition = (augerLength) => {

// };

export default useMoveCombine;
