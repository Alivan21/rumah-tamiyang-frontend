import { ReactNode, useState } from "react";
import { Button } from "./ui/button";
import Logo from "@/assets/logo.png";
import { NavLink, useLocation } from "react-router-dom";

type NavLink = {
  id: number | string;
  labelText: string;
  labelIcon: ReactNode;
  url: string;
};

type SidebarProps = {
  navs: NavLink[];
};

function Sidebar({ navs }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleOpenSidebar = () => {
    setOpen(!open);
  };
  const getTitle = () => {
    if (location.pathname.split("/").length == 2) {
      return "DASHBOARD";
    } else {
      return location.pathname.split("/")[2].toUpperCase();
    }
  };
  const title = getTitle();
  return (
    <>
      <header className="flex items-center justify-between p-5 md:ml-2 lg:ml-64">
        <h1 className="text-lg font-bold">{title}</h1>
        <Button className="lg:hidden" size="sm" onClick={handleOpenSidebar}>
          {open ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-bars-staggered"></i>}
        </Button>
      </header>
      <hr className="my-1" />
      <aside
        className={`fixed bottom-0 top-0 z-10 w-64 overflow-y-auto bg-gray-900 p-2 text-center duration-300 ease-in-out lg:left-0 ${open ? "-translate-x-full lg:translate-x-0" : "translate-x-0"
          }`}
      >
        <div className="text-xl text-gray-100">
          <div className="flex items-center justify-between p-3">
            <div className="flex items-center gap-6">
              <img src={Logo} alt="logo" className="ml-2 w-12 rounded-md bg-blue-400 px-2 py-1" />
              <h1 className="my-auto text-[15px] font-bold leading-tight text-gray-200">
                Rumah Tamiang <br />
                {location.pathname.split("/")[1].toUpperCase()}
              </h1>
            </div>
            <Button className="lg:hidden" size="sm" onClick={handleOpenSidebar}>
              <i className="fa-solid fa-xmark"></i>
            </Button>
          </div>
        </div>
        <div className="my-2 h-[1px] bg-gray-600"></div>
        <ul className="flex flex-col gap-3">
          {navs.map(({ id, url, labelIcon, labelText }) => {
            return (
              <li key={id}>
                <NavLink
                  to={url}
                  className="flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600"
                >
                  { labelIcon }
                  <span className="ml-4 text-[15px] font-bold text-gray-200">{ labelText }</span>
                </NavLink>
              </li>
            )
          })}
          <div className="h-[1px] bg-gray-600"></div>
          <li className="flex cursor-pointer items-center rounded-md p-2.5 px-4 text-white duration-300 hover:bg-blue-600">
            <i className="fa-solid fa-right-from-bracket"></i>
            <span className="ml-4 text-[15px] font-bold text-gray-200">Logout</span>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
