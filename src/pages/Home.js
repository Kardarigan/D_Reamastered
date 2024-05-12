import { Letter } from "../comps/Portal";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [letterClass, setLetterClass] = useState("LetterAnimation");
  const helloThere = [
    "H",
    "e",
    "l",
    "l",
    "o",
    " ",
    "t",
    "h",
    "e",
    "r",
    "e",
    "!",
  ];
  const myName = ["I", "'", "m", " ", "D"];
  const whoYou = [
    "w",
    "h",
    "o",
    " ",
    "y",
    "o",
    "u",
    " ",
    "l",
    "o",
    "o",
    "k",
    "i",
    "n",
    "g",
    " ",
    "f",
    "o",
    "r",
    ".",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass("LetterAnimation-hover");
    }, 6000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      <div className="flex items-center h-screen">
        <div className="title">
          <h1>
            <Letter letterClass={letterClass} strArray={helloThere} idx={11} />
            <br />
            <Letter letterClass={letterClass} strArray={myName} idx={25} />
            <br />
            <Letter letterClass={letterClass} strArray={whoYou} idx={34} />
          </h1>
          <h2 className="cursor-default text-[$grayColor] text-xs tracking-[2px] animate-[fadeIn_1s_1.5s_backwards] my-5 mx-0">
            <span className="hover:shadow">Front End Developer</span> /{" "}
            <span className="hover:shadow">Freelancer</span>
          </h2>
          <Link to="/contact" className="button">
            Say Hello <i className="fa-regular fa-hand-wave"></i>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
