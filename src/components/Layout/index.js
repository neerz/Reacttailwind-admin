import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";
import { UserOutlined } from "@ant-design/icons";
import Navbar from "../Navbar";
import Header from "../Header";
import Logo from "../../assets/images/logo.png";

const enhance = compose(connect(state => ({ darkMode: state.darkMode })));

const imageAvatar =
  "https://avatars0.githubusercontent.com/u/810438?s=460&u=4e652785fe5aa4aae075c40815741e8721f11fd5&v=4";

const Footer = () => {
  return (
    <div className="flex justify-between py-4">
      <p className="text-gray-500 m-0 text-left">2020 © ADMIN TEMPLATE</p>
      <p className="text-gray-500 m-0 text-right">
        With ❤️ from <a href="https://webdevplanet.com">WebDevPlanet</a>
      </p>
    </div>
  );
};

const AppLayout = ({ children, darkMode }) => {
  const { i18n } = useTranslation();
  return (
    <div className="bg-indigo-100 min-h-screen overflow-scroll">
      {/* HEAD */}
      <div className="flex flex-row">
        <div className="fixed w-16 z-40 bg-indigo-100 border h-full">
          <Navbar />
        </div>
        <div className="flex w-full flex-col">
          <Header />
          <div className="pt-16 pl-16">
            <div className="p-4 md:p-6 lg:p-8 w-full min-h-screen">
              {children}
            </div>
            <div className="px-4 md:px-6 lg:px-8 w-full">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default enhance(AppLayout);
