/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/common/Loader";
import Layouts from "../../layouts";

const PrivateRoute = () => {
  const [loading, setLoading] = React.useState<boolean>(true);
  const userToken = sessionStorage.getItem("username");
  // const currentLoginUser = sessionStorage.getItem("currentSessionUser");
  const location = useLocation();

  useEffect(() => {
    if (userToken) {
      // reset state in navigating urls to aviod location state rendering;
      // location.state = null;
    }
    setLoading(false);
  }, [location]);

  return loading ? (
    <Loader />
  ) : userToken ? (
    <Layouts />
  ) : (
    <Navigate to="/login" state={{ from: location }}  />
  );
};

export default PrivateRoute;
