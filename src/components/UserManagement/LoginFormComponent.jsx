import { IoLogIn } from "react-icons/io5";
import axios from "axios";
import * as constants from "../../constants/index.js";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import {
  notifyError,
  notifySuccess,
} from "../Notifications/ToastNotification.jsx";
import {useState} from "react";

export const LoginFormComponent = () => {
  const [usernameInputStyleModifier, setUsernameInputStyleModifier] = useState("");
  const [passwordInputStyleModifier, setPasswordInputStyleModifier] = useState("");
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const returnUserQueryResponseStatus = (response, password) => {
    if (response.data.length === 1 && response.data[0].password === password) {
      return { status: true, reason: "success" };
    } else if (response.data.length === 0) {
      return { status: false, reason: "noUser" };
    } else if (response.data[0].password !== password) {
      return { status: false, reason: "wrongPassword" };
    } else {
      return { status: false, reason: "multipleUsers" };
    }
  };

  const handleUserQueryResponseStatus = (statusObject, username, password) => {
    if (statusObject.status) {
      setCookies(constants.cookies.COOKIE_USER_LOGGED, true);
      setCookies(constants.cookies.COOKIE_USER_DATA, {
        username: username,
        lname: password,
      });
      notifySuccess("Hello you! Nice logging");
      navigate(constants.routes.USERPAGE);
    } else {
      switch (statusObject.reason) {
        case "noUser":
          notifyError("Nah! Register first");
          setUsernameInputStyleModifier("--error");
          break;
        case "wrongPassword":
          notifyError("Check your password baby");
          setPasswordInputStyleModifier("--error");
          break;
        case "multipleUsers":
          notifyError("Seems there are more of you! Contact administrator");
          break;
        default:
          navigate(constants.routes.ERRORROUTE);
      }
    }
  };

  const loginUser = (username, password) => {
    axios
      .get(constants.endpoints.USER(username))
      .then((response) => {
        return returnUserQueryResponseStatus(response, password);
      })
      .then((status) => {
        handleUserQueryResponseStatus(status, username, password);
      })
      .catch((error) => {
        notifyError("Error occurred while logging in user");
        navigate(constants.routes.ERRORROUTE);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(event.target[0].value, event.target[1].value);
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-form-label" htmlFor="usernameField">
          Username
        </label>
        <input
          id="usernameField"
          className={`login-form-input${usernameInputStyleModifier}`}
          placeholder="Username"
        ></input>
        <label className="login-form-label" htmlFor="passwordField">
          Password
        </label>
        <input
          id="passwordField"
          type="password"
          className={`login-form-input${passwordInputStyleModifier}`}
          placeholder="Password"
        ></input>
        <button className="button-login group" type="submit">
          <IoLogIn className="button-submit-icon group-hover:text-2xl"></IoLogIn>
          Login
        </button>
      </form>
    </div>
  );
};
