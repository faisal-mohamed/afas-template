import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { defaultUser } from "../../../assets/Images";
import CustomImage from "./CustomImage";
import { useNavigate } from "react-router-dom";

const ProfileDropdown = () => {
  //Dropdown Toggle
  const [isProfileDropdown, setIsProfileDropdown] = useState(false);


  const userAdminPrivilege = "Admin";

  const navigate = useNavigate();

  const toggleProfileDropdown = () => {
    setIsProfileDropdown(!isProfileDropdown);
  };

  const logOutUser = () => {
    navigate("/login");
  };
  return (
    <React.Fragment>
      <Dropdown
        isOpen={isProfileDropdown}
        toggle={toggleProfileDropdown}
        className="ms-sm-3 header-item"
      >
        <DropdownToggle
          tag="button"
          type="button"
          className="btn shadow-none p-1 hover"
        >
          <div className="d-flex align-items-center ">
            <span
              className="d-none d-xl-inline-block ms-1 fw-medium user-name-text"
              style={{
                marginRight: "10px",
                fontFamily: "Nunito",
                fontSize: "16px",
              }}
            >
              Admin
            </span>
            <CustomImage
              src={defaultUser}
              alt="profile"
              imgClassName="rounded-circle"
              width={40}
              height={40}
            />
          </div>
        </DropdownToggle>
        <DropdownMenu className="dropdown-menu-end custom-drop-item">
          {/*  <DropdownItem
            href={process.env.PUBLIC_URL + "/profile"}
            className="p-1"
          >
            <i className=" ri-account-circle-line fs-18 align-middle me-1"></i>{" "}
            <span className="fs-14 align-middle">Profile</span>
          </DropdownItem> */}
          {userAdminPrivilege && (
            <DropdownItem
              // href={process.env.PUBLIC_URL + "/account-mappings"}
              className="p-1"
            >
              <i className="ri-settings-3-line fs-18 align-middle me-1"></i>{" "}
              <span className="fs-14 align-middle">Configuration</span>
            </DropdownItem>
          )}
          <DropdownItem onClick={logOutUser} className="p-1">
            <i className="mdi mdi-logout fs-18 align-middle me-1"></i>{" "}
            <span className="fs-14 align-middle" data-key="t-logout">
              Logout
            </span>
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </React.Fragment>
  );
};

export default ProfileDropdown;
