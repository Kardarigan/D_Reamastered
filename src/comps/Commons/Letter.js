import { useState } from "react";

const LetterAnimation = ({ strArray, idx = 1 }) => {
  const [letterClass, setLetterClass] = useState("text-animate");

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`LetterAnimation ${letterClass} _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default LetterAnimation;
