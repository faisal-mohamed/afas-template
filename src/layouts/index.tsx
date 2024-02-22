import React from "react";
import withRouter from "../app/components/common/WithRouter";
import { Outlet, useLocation } from "react-router-dom";
// import { CONFIG_PAGES } from "../utilities/constants";
// import ConfigurationLayout from "./ConfigurationLayout";
import Menu from "./Menu";

const Layout = () => {
  const location = useLocation();

  // const isConfigSideBar = CONFIG_PAGES.includes(location.pathname);

  return (
    <React.Fragment>
      <div id="layout-wrapper">
        <Menu />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default withRouter(Layout);
