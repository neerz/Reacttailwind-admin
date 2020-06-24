export const ROUTE_PATH = {
  HOME: "/",
  DASHBOARD: "/dashboard",

  WIDGETS: "/widgets",

  // APPLICATION
  ECOMMERCE: "/application/ecommerce",
  LOGISTIC: "/application/logistic",

  // COMPONENT
  COMPONENT_TABLE: "/component_table",

  // AUTHEN
  LOGIN: "/login",
  LOGOUT: "/logout"
};

export const ROUTE_NAME = Object.keys(ROUTE_PATH).reduce((result, name) => {
  result[name] = name;
  return result;
}, {});
// { HOME: 'HOME' }
