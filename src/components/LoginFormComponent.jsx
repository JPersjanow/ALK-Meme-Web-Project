import { IoLogIn } from "react-icons/io5";
import axios from "axios";
import * as constants from "../constants";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { notifyError, notifySuccess } from "./ToastNotification.jsx";

export const LoginFormComponent = () => {
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const loginUser = (username, password) => {
    axios
      .get(constants.endpoints.LOGIN(username, password))
      .then((response) => {
        if (response.data.length === 1) {
          console.log("logging in");
          setCookies(constants.cookies.COOKIE_USER_LOGGED, true);
          setCookies(constants.cookies.COOKIE_USER_DATA, {
            username: username,
            fname: response.data[0].fname,
            lname: response.data[0].lname,
            id: response.data[0].id,
          });
          return true;
        }

        return false;
      })
      .then((loginSuccesfull) => {
        if (loginSuccesfull) {
          notifySuccess("Hello you! Nice logging");
          navigate(constants.routes.USERPAGE);
        } else {
          notifyError("Nah! Register first");
        }
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
          className="login-form-input"
          placeholder="Username"
        ></input>
        <label className="login-form-label" htmlFor="passwordField">
          Password
        </label>
        <input
          id="passwordField"
          type="password"
          className="login-form-input"
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
