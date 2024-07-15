import { ChangeEvent, useState } from "react";
import { Row, Col, Spinner, Label,} from "reactstrap";
import "../assets/scss/custom_scss/auth.scss";
import { useLoginMutation } from "../app/services/baseApiSetup";
import Alert from "../app/components/common/Alert";
import { useDispatch } from "react-redux";
import { setCredentials } from "../app/Slices/auth/authSlice";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";
import Image from "../app/components/common/Images";
import { logo } from "../assets/Images";
import CommonButton from "../app/components/common/CommonButton";
import useSetState from "../helper/useSetState";


import Logo from '../assets/Images/logo/health_care.png'
const Signin = () => {
  document.title = "Curoil.login";

  const [state, setState] = useSetState({
    name: '',
    password: '',
    role: ''
  });

  const [errMsg, setErrMsg] = useState<string>("");

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setErrMsg("");
    const { name, value } = event.target;
    setState({ [name]: value });
  };

  const validateUserForm = () => {
    let isValid = true;
    if (state.name.trim() === "" && state.password.trim() === "") {
      setErrMsg("Username and Password shouldn't be empty");
      isValid = false;
    } else if (state.name.trim() === "") {
      setErrMsg("username shouldn't be empty");
      isValid = false;
    } else if (state.password.trim() === "") {
      setErrMsg("password shouldn't be empty");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateUserForm();
    if (isValid) {
      if (state.name === "naveen" && state.password === "naveen") {
        console.log("inside")
        sessionStorage.setItem("username", "naveen");

        sessionStorage.setItem("role", state.role);

        navigate("/dashboards");
      } else if (
        state.name === "jerome" &&
        state.password === "jerome"
      ) {
        sessionStorage.setItem("username", "jerome")

        sessionStorage.setItem("role", state.role);
        navigate("/dashboards");
      }
    }
  };

  return (
    <div className="auth-wrapper">
      {errMsg && (
        <Alert type="error" message={errMsg} className="error-alert" />
      )}
      <div className="auth-container">
        <div className="signin-wrapper">
        {/* { <SVG src={logo} height={"2em"} className="logo" />} */}
        {/* {<Image src={Logo} alt="Main Logo" height={"2em"} className="logo" />} */}
        <img src={Logo} alt="Main Logo" style={{width:'250px'}}/>
        
          <Row className="mt-2">
            <Col>
              <div className="text-center">
                <div className="title">Login</div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <Label htmlFor="username" className="form-label">
                    User name
                  </Label>
                  <input
                    type="text"
                    name="name"
                    value={state.name}
                    onChange={handleOnChange}
                    placeholder="Enter your user name"
                    autoComplete="off"
                    className="form-control usernameText"
                  />
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="password-input">
                    Password
                  </Label>
                  <div className="position-relative auth-pass-inputgroup mb-3">
                    <input
                      type="password"
                      className="form-control pe-5 password-input usernameText"
                      onChange={handleOnChange}
                      placeholder="Enter your password"
                      value={state.password}
                      name="password"
                      autoComplete="off"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <Label className="form-label" htmlFor="role">
                    Role
                  </Label>
                  <div className="position-relative auth-pass-inputgroup mb-3">
                    <select
                      name="role"
                      id="role"
                      value={state.role}
                      onChange={handleOnChange}
                      className="form-control"
                    >
                      <option value="">--Select Role--</option>
                      <option value="admin">ACO</option>
                      <option value="user">Insurer</option>
                    </select>
                  </div>
                  <div className="d-flex w-100 align-items-center justify-content-center">
                    <CommonButton className="primary-btn">
                      {!isLoading ? (
                        "Proceed"
                      ) : (
                        <Spinner size="sm" className="flex-shrink-0"></Spinner>
                      )}
                    </CommonButton>
                  </div>
                </div>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Signin;
