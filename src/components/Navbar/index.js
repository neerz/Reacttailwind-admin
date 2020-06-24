import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { NAVBAR_CONFIG } from "../../configs/navbar";

const isActivePath = (location, navbar) => {
  if (navbar.nested)
    return navbar.nested.find(nav => location.pathname.includes(nav.path));
  return location.pathname.includes(navbar.path);
};

const Navbar = props => {
  let location = useLocation();
  console.log("location", location);
  return (
    <div className="block w-16 h-full transition-full">
      <Link to="/">
        <div className="flex h-16 w-full justify-center items-center cursor-pointer">
          <i className="fas fa-dolly fa-2x text-indigo-500 hover:text-indigo-700 transform hover:-rotate-45 transition-full" />
        </div>
      </Link>

      {NAVBAR_CONFIG.map(navbar => (
        <div>
          {navbar.nested ? (
            <div
              key={navbar.path}
              className="hover-hidden relative hover:bg-white"
            >
              <Link to={navbar.path}>
                <span
                  className={`flex w-full justify-center p-4 transition-full transform hover:scale-125
                  ${isActivePath(location, navbar) && "text-red-200"}`}
                >
                  <i
                    className={`fas ${
                      navbar.icon
                    } fa-lg self-center text-gray-500
                      ${isActivePath(location, navbar) && "text-indigo-500"}
                    `}
                  />
                </span>
              </Link>
              <div className="hidden absolute top-0 left-0 ml-16 z-10 transition-full">
                {navbar.nested.map(nestnav => (
                  <Link to={nestnav.path}>
                    <div
                      key={nestnav.path}
                      className={`flex w-full p-3 items-center bg-white hover:bg-gray-200 shadow-lg text-left text-gray-600
                        ${isActivePath(location, nestnav) &&
                          "text-indigo-500 bg-gray-200"}`}
                    >
                      <i className={`fas ${nestnav.icon} mr-2`} />
                      <span>{nestnav.name}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link to={navbar.path} className="text-indigo-500">
              <span
                className={`hover-hidden flex w-full justify-center p-4 transition-full transform hover:translate-x-1
                  ${isActivePath(location, navbar) && "bg-white shadow-lg"}`}
              >
                <i
                  className={`fas ${navbar.icon} self-center text-gray-500
                    ${isActivePath(location, navbar) && "text-indigo-500"}
                  `}
                />
              </span>
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};

export default Navbar;
