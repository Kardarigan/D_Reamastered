import { Outlet } from "react-router-dom";
import { Navbar, Footer, Screwy } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
