import React from "react";
import { Spinner } from "reactstrap";

const Loader = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center mx-2 mt-4">
        <Spinner color="primary" />
      </div>
    </React.Fragment>
  );
};

export default Loader;
