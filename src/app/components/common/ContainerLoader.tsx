import React from "react";
import { Spinner } from "reactstrap";
import Menu from "../../../layouts/Menu";

const ContainerLoader = () => {
  return (
    <React.Fragment>
      <Menu />
      <div className="main-content">
        <div className="page-content d-flex justify-content-center">
          <Spinner color="primary"> Loading... </Spinner>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ContainerLoader;
