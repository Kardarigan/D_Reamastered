import R2D2 from "../comps/Commons/R2D2";
import { LetterAnimation, Transition } from "../comps/Portal";
import { Link } from "react-router-dom";

const Home = () => {
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

  return (
    <Transition>
      <div className="contain flex">
        <div className="md:w-1/2">
          {" "}
          <h1>
            <LetterAnimation strArray={helloThere} />
            <br />
            <LetterAnimation strArray={myName} idx={12} />
            <br />
            <LetterAnimation strArray={whoYou} idx={18} />
          </h1>
          <h2 className="cursor-default tracking-[0.5em] text-slate-400 text-xs my-5">
            <span className="transition-all hover:shadow hover:text-slate-50">
              Front End Developer
            </span>{" "}
            /{" "}
            <span className="transition-all hover:shadow hover:text-slate-50">
              Freelancer
            </span>
          </h2>
          <div className="mt-12">
            <Link to="/contact" className="button">
              Say Hello <i className="fa-regular fa-hand-wave"></i>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex-fullcenter max-md:hidden relative">
          <R2D2 />
        </div>
      </div>
    </Transition>
  );
};

export default Home;
