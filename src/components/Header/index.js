import React from "react";
import { useTranslation } from "react-i18next";

const imageAvatar =
  "https://avatars0.githubusercontent.com/u/810438?s=460&u=4e652785fe5aa4aae075c40815741e8721f11fd5&v=4";

const Header = ({ children, darkMode }) => {
  const { i18n } = useTranslation();
  return (
    <div className="fixed w-full h-16 z-30 bg-white shadow-lg pr-16 ml-16">
      <div className="flex flex-row w-full h-full justify-between px-4 md:px-6 lg:px-8">
        <div className="flex flex-row items-center">
          <div className="hidden md:block">
            <i className="far fa-envelope fa-lg pr-4" />
            <i className="far fa-comment-alt fa-lg pr-4" />
            <i className="far fa-check-circle fa-lg pr-4" />
            <i className="far fa-calendar fa-lg pr-4" />
            <i className="far fa-star fa-lg pr-4 text-orange-400" />
          </div>
        </div>
        <div className="flex flex-row items-center">
          <i className="far fa-flag fa-lg pl-4" />
          <i className="far fa-bookmark fa-lg pl-4" />
          <i className="far fa-bell fa-lg pl-4" />
          <div className="flex pl-4">
            <div className="text-sm text-right">
              <p className="m-0">Dan Abramov</p>
              <p className="m-0 text-green-500">Available</p>
            </div>
            <img
              alt=""
              src={imageAvatar}
              className="h-10 w-10 rounded-full ml-2 shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
