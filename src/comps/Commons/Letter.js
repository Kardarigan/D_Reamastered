import { useState, useEffect } from "react";

const LetterAnimation = ({ strArray, idx = 1 }) => {
  const [letterClass, setLetterClass] = useState("LetterAnimation");

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLetterClass(null);
  //   }, strArray.length * 200);
  // }, [strArray]);

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`LetterAnimation-hover ${letterClass} _${i + idx}`}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default LetterAnimation;
