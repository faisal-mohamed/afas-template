import React, { MouseEventHandler, useEffect, useMemo, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import { logo } from "../assets/Images";
import { MenuItems, menuItems } from "./LayoutMenuData";
import "./custom-layout.scss";

const Menu = () => {
  const [activeNav, setActiveNav] = useState<string>("/executive-dashboards");

  const { pathname } = useLocation();

  const handleMouseOver: MouseEventHandler<HTMLLIElement> = (e) => {
    const menuItem = e.currentTarget;
    const submenuWrapper = menuItem.querySelector(".first-child");

    if (submenuWrapper instanceof HTMLElement) {
      const menuItemPos = menuItem.getBoundingClientRect();
      const listLength =
        submenuWrapper.childNodes[0].childNodes.length > 10 ? 30 : 0;
      submenuWrapper.style.top = `${menuItemPos.top - listLength}px`;
      // submenuWrapper.style.left = `${
      //   menuItemPos.left + Math.round(menuItem.offsetWidth * 0.75)
      // }px`;
    }
  };

  return (
    <div className="sidebar-wrapper">
      <div className="brand">
        <Link to="/" className="logo logo-dark">
          <SVG src={logo} width={72} height={55} className="logo" />
        </Link>
      </div>
      <div className="sidebar-container">
        <ul className="sidebar-main">
          {menuItems.map((item: MenuItems) => (
            <li
              className={`nav-item ${item.path === activeNav ? " active" : ""}`}
              onMouseOver={item.childNavs ? handleMouseOver : undefined}
              key={item.label}
            >
              <Link
                className={`nav-link ${
                  item.path === activeNav ? " active" : ""
                }`}
                to={item.path}
                // onClick={clearFilterState}
              >
                <SVG
                  src={item.icon}
                  className={item.path === activeNav ? "svg-active" : ""}
                />
                <span className="display-block text-center menu-each-item">
                  {item.label}
                </span>
              </Link>
              {item.childNavs && (
                <div className="child-navs first-child">
                  <ul>
                    {item.childNavs.map((firstNavs) => (
                      <li
                        className={`second-nav-item ${
                          firstNavs.childNavs ? "has-child" : ""
                        }`}
                        key={firstNavs.label}
                      >
                        <div>
                          <Link
                            to={firstNavs.path}
                            // onClick={clearFilterState}
                            className="first-child-nav d-inline-flex justify-content-between"
                          >
                            <span> {firstNavs.label}</span>
                            {firstNavs.childNavs && (
                              <span>
                                <i className="bx  bx bxs-chevron-right" />
                              </span>
                            )}
                          </Link>
                        </div>

                        {firstNavs.childNavs && (
                          <div className="child-navs second-child">
                            <ul>
                              {firstNavs.childNavs.map((secondNavs) => (
                                <li key={secondNavs.label}>
                                  <div>
                                    <Link
                                      to={secondNavs.path}
                                      // onClick={clearFilterState}
                                      className="d-inline-flex justify-content-between"
                                    >
                                      <span> {secondNavs.label}</span>
                                    </Link>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
