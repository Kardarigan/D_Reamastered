import { NavLink } from "react-router-dom";
import Logo from "../../assets/lightCubeLogo.png";
import { useEffect, useState } from "react";
import { sideIcons, sideLinks } from "../../Constants";

const Navigator = () => {
  const [navOpen, setNavOpen] = useState(true);
  const [navMessageShow, setNavMessageShow] = useState(true);

  const navToggle = () => {
    setNavOpen((navOpen) => !navOpen);
    setNavMessageShow(false);
  };

  return (
    <>
      <header className="fixed left-0 bottom-3 w-full text-center z-50">
        <p
          className={`bg-slate-50 font-mono absolute left-1/2 translate-x-[-50%] translate-y-[-120%] fadeIn ${
            !navMessageShow && "hidden"
          }`}
        >
          Click to navigate
        </p>
        <nav
          className={`bg-slate-900 overflow-hidden h-[52px] inline-flex items-center justify-center p-2 border-2 transition-all ${
            navOpen ? "w-[340px]" : "w-[52px] rotate-0 pulse"
          } border-slate-50 rounded-full`}
        >
          <div
            className={`grid gap-x-5 absolute ${
              navOpen ? "grid-cols-5" : "grid-cols-1"
            }`}
          >
            {sideIcons.map((item, index) => (
              <>
                <NavLink
                  exact
                  activeclassname="active"
                  className={`flex-fullcenter displayTrans flex flex-col ${
                    navOpen ? "visible opacity-100" : "invisible opacity-0"
                  }`}
                  key={index}
                  to={item.path}
                  onClick={navToggle}
                >
                  <i
                    className={`fa-duotone ${item.icon} text-xl transition-all group-hover:opacity-0`}
                  ></i>
                  <span className="transition-all w-[200%] text-center text-xs">
                    {item.label}
                  </span>
                </NavLink>
                {index == 1 && (
                  <button
                    onClick={navToggle}
                    className="rounded-full focus-visible:allunset flex-fullcenter"
                  >
                    <img
                      src={Logo}
                      alt="logo"
                      className={`w-8 transition-all ${
                        navOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </button>
                )}
              </>
            ))}
          </div>
        </nav>
      </header>
      <ul className="fixed flex flex-col items-center right-1 top-1 ">
        {sideLinks.map((item, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-300"
              href={item.link}
              title={item.title}
            >
              <i className={item.icon} />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navigator;
