import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// Auth Pages

const Login = lazy(() => import("../../Auth/Signin"));

const Dashboards = lazy(
  () => import("../../Pages/DashboardGeneral/ExecutiveDashboard/index")
);

export const publicRoutes = [
  {
    name: "auth",
    path: "/login",
    component: <Login />,
  },
];

export const authProtectedRoutes = [
  {
    name: "Dashboards",
    path: "*",
    component: <Navigate to="/dashboards" />,
  },
  { name: "Dashboards", path: "/", component: <Navigate to="/dashboards" /> },
  { name: "Dashboards", path: "/dashboards", component: <Dashboards /> },
];
