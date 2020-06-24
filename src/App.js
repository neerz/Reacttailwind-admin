import React from "react";
import { Provider } from "react-redux";
import Router from "./router";
import store from "./store";
import i18n from "./i18n";
import { ThemeProvider } from "styled-components";
import "antd/dist/antd.css";
import "./App.scss";

i18n.init();

const theme = {
  main: "mediumseagreen",
  color_bg: "#f0f3f8",
  color_primary: "#3b4aeb",
  color_secondary: "#626EEF",
  color_card: "#f9fafb",
  color_text_white: "#fafaff",
  color_text_black: "#626f82",
  color_text_primary: "#4253ec"
};

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router />
      </Provider>
    </ThemeProvider>
  );
}
