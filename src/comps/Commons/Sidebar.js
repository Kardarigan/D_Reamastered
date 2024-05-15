import { Link, NavLink } from "react-router-dom";
import lcLogo from "../../assets/lightCubeLogo.png";
import { sideIcons, sideLinks } from "../../Constants";

const Sidebar = () => {
  return (
    <header className="sm:flex hidden flex-col items-center justify-between w-14 h-screen fixed left-0 p-3 border-r-2 border-slate-50">
      <Link className="logo" to="/">
        <img src={lcLogo} alt="logo" className="w-full" />
      </Link>
      <nav className="grid gap-y-4">
        {sideIcons.map((item, index) => (
          <NavLink
            exact
            activeclassname="active"
            className="text-2xl flex-fullcenter relative group transition-all"
            key={index}
            to={item.path}
          >
            <i
              className={`fa-duotone ${item.icon} transition-all group-hover:opacity-0`}
            ></i>
            <span className="absolute transition-all left-[-220%] w-[200%] text-center text-xs text-slate-50 opacity-0 group-hover:opacity-100 group-hover:left-[-50%]">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>
      <ul className="flex flex-col items-center">
        {sideLinks.map((item, index) => (
          <li key={index}>
            {item.download ? (
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300"
                href={item.link}
                title={item.title}
                download
              >
                <i className={item.icon} />
              </a>
            ) : (
              <a
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-300"
                href={item.link}
                title={item.title}
              >
                <i className={item.icon} />
              </a>
            )}
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Sidebar;
