import { useState } from "react";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const NavLinks = [
    {
      label: "Home",
      path: "/",
    },

    {
      label: "About",
      path: "/about",
    },
    {
      label: "Contact",
      path: "/contact",
    },

    {
      label: "Gallery",
      path: "/gallery",
    },
  ];
  return (
    <div
      className={`px-3 md:py-4 py-2 fixed z-10 top-0 left-0 w-full bg-black/30 text-white duration-400`}
      id="nav-bg"
      // style={{
      //   background: theme === 'dark' ? '#13005A' : 'rgba(0, 0, 0, 0.2)',
      //   color: theme === 'dark' ? '#fff' : '#000',
      // }}
    >
      <nav className="flex justify-between items-center px-5">
        <div className="font-bold z-20 duration-200 menu-bars  md:hidden inline-block">
          {open ? (
            <AiOutlineClose
              onClick={() => setOpen(!open)}
              className="font-bold text-2xl"
            ></AiOutlineClose>
          ) : (
            <AiOutlineMenuUnfold
              onClick={() => setOpen(!open)}
              className="font-bold text-2xl"
            ></AiOutlineMenuUnfold>
          )}
        </div>
        <div>
          <h1 className="text-2xl  lg:text-4xl  font-semibold flex items-center ">
            <a href="/">Find Restaurant</a>
          </h1>
        </div>
        <ul
          className={` md:static absolute md:bg-transparent bg-[#2192FF] md:p-0 p-10 md:w-auto text-center w-full   md:flex nav-box duration-500 ${
            open ? "left-0 top-14 " : "left-[-500rem] top-14"
          } `}
        >
          {NavLinks.map(({ label, path }) => {
            return (
              <li
                key={path}
                onClick={() => setOpen(false)}
                className="mr-4 md:hover:text-[#518abf] hover:text-black navBar-list md:mt-0 mt-10"
              >
                <a href={path}>{label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
