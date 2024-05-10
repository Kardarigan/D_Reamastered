import { Link } from "react-router-dom";
import { navLinks, navTools } from "../../Constants";
import { Dropdown, Hamburger } from "../Portal";
import { useState } from "react";
const Navbar = () => {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerOn = () => {
    setHamburger(true);
  };
  const hamburgerOff = () => {
    setHamburger(false);
  };

  return (
    <>
      <header className="absolute w-full z-50">
        <nav className="">
          <button
            className="lg:hidden block transition text-sm font-semibold rounded px-3 py-2 bg-opacity-25 bg-slate-500 hover:bg-opacity-40 backdrop-blur-sm"
            onClick={hamburgerOn}
          >
            <span>MENU</span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
