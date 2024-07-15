import React, { lazy } from "react";
import { Navigate } from "react-router-dom";

// Auth Pages

const Login = lazy(() => import("../../Auth/Signin"));

const Dashboards = lazy(
  () => import("../../Pages/DashboardGeneral/ExecutiveDashboard/index")
);
const Reports = lazy(
  () => import("../../Pages/DashboardGeneral/Report/index")
);

const MemberJourney = lazy(
  () => import("../../Pages/Member Journey/index")
)

const ChildPortal = lazy(
  () => import("../../Pages/Child Portal/index")
)


export const publicRoutes = [
  {
    name: "auth",
    path: "/login",
    component: <Login />,
  },
];

// export const authProtectedRoutes = [
//   {
//     name: "Dashboards",
//     path: "*",
//     component: <Navigate to="/dashboards" />,
//   },
//   { name: "Dashboards", path: "/", component: <Navigate to="/dashboards" /> },
//   { name: "Dashboards", path: "/dashboards", component: <Dashboards /> },
//   { name: "Reports", path: "/reports", component: <Reports /> },
// ];


export const authProtectedRoutes = [
  
  { name: "Dashboards", path: "/", component: <Navigate to="/dashboards" /> },
  { name: "Dashboards", path: "/dashboards", component: <Dashboards/> },
  { name: "Member Journey", path: "/member-journey", component: <MemberJourney /> },
  { name: "Child Portal", path: "/child-portal", component: <ChildPortal/> },
  { name: "Reports", path: "/reports", component: <Reports/> },
  {
    name: "Dashboards",
    path: "*",
    component: <Navigate to="/dashboards" />,
  },
];
