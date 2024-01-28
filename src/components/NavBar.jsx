import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
const NavBar = ({ onSearch }) => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggle = (e) => {
    setTheme(e.target.value);
  };
  const handleSearchChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img src={logo} alt="" className="w-1/4" />
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Buscar"
              className="input input-bordered w-24 md:w-auto"
              onChange={handleSearchChange}
            />
          </div>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Tema
              <svg
                width="12px"
                height="12px"
                className="h-2 w-2 fill-current opacity-60 inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52"
            >
              <li>
                <input
                  onChange={handleToggle}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Light"
                  value="light"
                />
              </li>
              <li>
                <input
                  onChange={handleToggle}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Dark"
                  value="dark"
                />
              </li>
              <li>
                <input
                  onChange={handleToggle}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Cupcake"
                  value="cupcake"
                />
              </li>
              <li>
                <input
                  onChange={handleToggle}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Valentine"
                  value="valentine"
                />
              </li>
              <li>
                <input
                  onChange={handleToggle}
                  type="radio"
                  name="theme-dropdown"
                  className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                  aria-label="Retro"
                  value="retro"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
