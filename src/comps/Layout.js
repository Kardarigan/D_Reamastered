import { Outlet } from "react-router-dom";
import { Sidebar } from "./Portal";

const Layout = () => {
  return (
    <>
      <div className="bg-slate-900 text-slate-50 h-screen ps-16">
        <Sidebar />
        <span className="tags tags-top d-block">
          <span>&lt;html&gt;</span>
          <span className="tags-top-html">&lt;html&gt;</span>
          <br />
          <span className="tags-top-body">&lt;body&gt;</span>
        </span>

        <Outlet />

        <span className="tags tags-bottom d-block">
          <span className="tags-bottom-body">&lt;/body&gt;</span>
          <br />
          <span>&lt;/html&gt;</span>
          <span className="tags-bottom-html">&lt;/html&gt;</span>
        </span>
      </div>
    </>
  );
};

export default Layout;
