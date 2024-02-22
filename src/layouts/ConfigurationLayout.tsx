import React from "react";
import "./custom-layout.scss";
import ProfileDropdown from "../app/components/common/ProfileDropdown";
import SVG from "react-inlinesvg";
import { logo } from "../assets/Images";
import { Link, useLocation } from "react-router-dom";

const ConfigurationLayout = () => {
  const { pathname } = useLocation();
  return (
    <div className="con-layout-wrap">
      <header>
        <Link to="/executive-dashboard">
          <SVG src={logo} />
        </Link>
        <ProfileDropdown />
      </header>
      <div className="sidebar-wrap">
        <div className="container">
          <Link to="/executive-dashboard" className="radio-circle">
            <i className=" ri-arrow-left-line fs-16 cursor-pointer" /> back
          </Link>

          <h6 className="mb-0 mt-3">Configuration Settings</h6>
          <div className="nav-container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to={"/account-mappings"}
                  className={`nav-link ${
                    pathname === "/account-mappings" && "active"
                  } mb-2`}
                >
                  Security group and Account Mapping
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/ldap-config"}
                  className={`nav-link ${
                    pathname === "/ldap-config" && "active"
                  } mb-2`}
                >
                  LDAP Configuration
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/mail-config?config=smtp"}
                  className={`nav-link ${
                    pathname === "/mail-config" && "active"
                  } mb-2`}
                >
                  Mail Configuration
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfigurationLayout;
