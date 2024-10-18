import { RouteObject } from "react-router-dom";
import App from "./App";

const appRoutes: RouteObject[] = [
  {
    path: "/",
    Component: App,
  },
];

export const routes = appRoutes;
