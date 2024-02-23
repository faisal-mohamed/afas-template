import { ChangeEvent, useState } from "react";
import { Row, Col, Spinner, Label } from "reactstrap";
import "../assets/scss/custom_scss/auth.scss";
import { useLoginMutation } from "../app/services/baseApiSetup";
import Alert from "../app/components/common/Alert";
import { useDispatch } from "react-redux";
import { setCredentials } from "../app/Slices/auth/authSlice";
import { useNavigate } from "react-router-dom";
import SVG from "react-inlinesvg";
import { logo } from "../assets/Images";
import CommonButton from "../app/components/common/CommonButton";

interface initialState {
  name: string;
  password: string;
}

interface LoginPayload {
  userKey: string;
  secret: string;
}

const Signin = () => {
  document.title = "Curoil.login";
  const [loginForm, setLoginForm] = useState<initialState>({
    name: "",
    password: "",
  });

  const [errMsg, setErrMsg] = useState<string>("");

  const [login, { isLoading }] = useLoginMutation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleOnChage = (event: ChangeEvent<HTMLInputElement>) => {
    setErrMsg("");
    setLoginForm((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const validateUserForm = () => {
    let isValid = true;
    if (loginForm.name.trim() === "" && loginForm.password.trim() === "") {
      setErrMsg("Username and Password shouldn't be empty");
      isValid = false;
    } else if (loginForm.name.trim() === "") {
      setErrMsg("username shouldn't be empty");
      isValid = false;
    } else if (loginForm.password.trim() === "") {
      setErrMsg("password shouldn't be empty");
      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = validateUserForm();
    if (isValid) {
      if (loginForm.name === "naveen" && loginForm.password === "naveen") {
        console.log("inside")
        sessionStorage.setItem("username", "naveen")
        navigate("/dashboards");
      } else if (
        loginForm.name === "jerome" &&
        loginForm.password === "jerome"
      ) {
        sessionStorage.setItem("username", "jerome")
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
          <SVG src={logo} height={"2em"} className="logo" />
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
                    value={loginForm.name}
                    onChange={handleOnChage}
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
                      onChange={handleOnChage}
                      placeholder="Enter your password"
                      value={loginForm.password}
                      name="password"
                      autoComplete="off"
                    />
                  </div>
                  <div className="d-flex w-100 align-items-center justify-content-center">
                    {/* <p className="forgot-password forgetPasswordText mb-1">
                      Forgot Password?
                    </p> */}
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
