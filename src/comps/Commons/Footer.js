import { Link } from "react-router-dom";
import { footLinks } from "../../Constants";

const Footer = () => {
  return (
    <footer className="w-full text-xs">
      <p className="fixed right-[-25px] bottom-[40px] rotate-90">
        <Link to="/about">All D © 2024</Link>
      </p>
    </footer>
  );
};

export default Footer;
