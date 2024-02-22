import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
//routes
import { authProtectedRoutes, publicRoutes } from "./allRoutes";
import PrivateRoute from "./PrivateRoute";

export const MainRouteDriver = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
        {publicRoutes.map((route) => (
          <Route path={route.path} element={route.component} key={route.path} />
        ))}
        <Route path="/" element={<PrivateRoute />}>
          {authProtectedRoutes.map((route) => (
            <Route
              path={route.path}
              element={route.component}
              key={route.name}
            />
          ))}
        </Route>
    </React.Fragment>
  )
);

export default MainRouteDriver;
