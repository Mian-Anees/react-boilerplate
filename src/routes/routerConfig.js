import App from "../App";
import { Cards } from "../components/card";
import { Dashboard } from "../components/dashboard";
import { Home } from "../pages/home";

export const ROUTES = [
  {
    path: "/dashboard",
    component: Dashboard,
    exact: true,
    protected: false,
  },
  {
    path: "/dashboard/:userId",
    component: Dashboard,
    exact: true,
    protected: false,
  },
  {
    path: "/cards",
    component: Cards,
    exact: true,
    protected: false,
  },
  {
    path: "/home",
    component: Home,
    exact: true,
    protected: false,
  },
  {
    path: "/",
    component: App,
    exact: false,
    protected: false,
  },
];
