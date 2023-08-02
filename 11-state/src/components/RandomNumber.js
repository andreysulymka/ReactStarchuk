import { useState } from "react";
import generateRandomNum from "../utils/generateRandomNum";

function RandomNumber({ maxNumber }) {
  console.log("rendering");
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNumber));

  return (
    <div>
      <h1>{randomNum}</h1>
      <button
        onClick={() => {
          setRandomNum(generateRandomNum(maxNumber));
        }}
      >
        Generate new random number
      </button>
    </div>
  );
}

export default RandomNumber;
