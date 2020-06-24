import { ROUTE_PATH } from "./router";

export const NAVBAR_CONFIG = [
  {
    name: "Dashboard",
    path: ROUTE_PATH.DASHBOARD,
    icon: "fa-chart-line",
    nested: [
      {
        name: "Dashboard",
        path: ROUTE_PATH.DASHBOARD,
        icon: "fa-chart-line"
      }
    ]
  },
  {
    name: "Widgets",
    path: ROUTE_PATH.WIDGETS,
    icon: "fa-tools",
    nested: [
      {
        name: "Widgets",
        path: ROUTE_PATH.WIDGETS,
        icon: "fa-tools"
      }
    ]
  },
  {
    name: "Application",
    path: ROUTE_PATH.ECOMMERCE,
    icon: "fa-file",
    nested: [
      {
        name: "Ecommerce",
        path: ROUTE_PATH.ECOMMERCE,
        icon: "fa-store-alt"
      },
      {
        name: "Logistic",
        path: ROUTE_PATH.LOGISTIC,
        icon: "fa-shipping-fast"
      }
    ]
  },
  {
    name: "Components",
    path: ROUTE_PATH.COMPONENT_TABLE,
    icon: "fa-toolbox",
    nested: [
      {
        name: "Table",
        path: ROUTE_PATH.COMPONENT_TABLE,
        icon: "fa-table"
      }
    ]
  },
  {
    name: "Authen",
    path: ROUTE_PATH.LOGIN,
    icon: "fa-shopping-bag",
    nested: [
      {
        name: "Login",
        path: ROUTE_PATH.LOGIN,
        icon: "fa-shopping-bag"
      },
      {
        name: "Logout",
        path: ROUTE_PATH.LOGOUT,
        icon: "fa-shopping-bag"
      }
    ]
  }
];
