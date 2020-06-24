import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./en";
import th from "./th";

const init = () => {
  i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        en,
        th
      },
      lng: "en"
    });
};

export default { init };
