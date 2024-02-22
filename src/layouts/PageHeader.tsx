import { isEmpty } from "lodash";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SVG from "react-inlinesvg";
import ProfileDropdown from "../app/components/common/ProfileDropdown";

type NavItem = {
  icon: string;
  name: string;
  link: string;
};

interface PageHeaderProps {
  navItems?: NavItem[];
  headerName?: string;
}
const PageHeader = ({ navItems, headerName }: PageHeaderProps) => {
  const [active, setActive] = useState<string>("/executive-dashboard");

  const onClickLink = (link: string) => {
    setActive(link);
  };

  const location = useLocation();

  useEffect(() => {
    if (!isEmpty(navItems)) {
      setActive(location.pathname);
    }
  }, [location.pathname]);

  return (
    <header className="page-header">
      <div className="header_wrapper">
        <div className="nav_container">
          {!isEmpty(navItems) ? (
            navItems?.map((navItem) => (
              <div
                className={`nav_wrap  ${
                  navItem.link === active && "container_active"
                } `}
                key={navItem.name}
              >
                <Link
                  to={navItem.link}
                  className={`nav-link  ${
                    navItem.link === active && "active"
                  } `}
                  onClick={() => onClickLink(navItem.link)}
                >
                  <SVG src={navItem.icon} height={18} width={18} />
                  {navItem.name}
                </Link>
              </div>
            ))
          ) : (
            <div className="page-title-wrap">
              <h4>{headerName}</h4>
            </div>
          )}
        </div>

        <ProfileDropdown />
      </div>
    </header>
  );
};

export default PageHeader;
