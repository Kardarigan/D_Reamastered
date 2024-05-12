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
      <div className="contain">
        <div>
          <h1>
            <Letter letterClass={letterClass} strArray={helloThere} idx={11} />
            <br />
            <Letter letterClass={letterClass} strArray={myName} idx={25} />
            <br />
            <Letter letterClass={letterClass} strArray={whoYou} idx={34} />
          </h1>
          <h2 className="cursor-default text-[$grayColor] text-xs tracking-[2px] animate-[fadeIn_1s_1.5s_backwards] my-5 mx-0">
            <span className="transition-all hover:shadow text-slate-300 hover:text-slate-50">
              Front End Developer
            </span>{" "}
            /{" "}
            <span className="transition-all hover:shadow text-slate-300 hover:text-slate-50">
              Freelancer
            </span>
          </h2>
          <div className="mt-12">
            <Link to="/contact" className="button">
              Say Hello <i className="fa-regular fa-hand-wave"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
