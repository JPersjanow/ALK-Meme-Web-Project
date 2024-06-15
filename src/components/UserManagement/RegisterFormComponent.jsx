import { IoLogIn } from "react-icons/io5";
import * as constants from "../../constants/index.js";
import axios from "axios";
import { notifyError, notifySuccess } from "../Notifications/ToastNotification";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

export const RegisterFormComponent = () => {
  const [usernameInputStyleModifier, setUsernameInputStyleModifier] =
    useState("");
  const [passwordInputStyleModifier, setPasswordInputStyleModifier] =
    useState("");
  const [firstNameInputStyleModifier, setFirstNameInputStyleModifier] =
    useState("");
  const [lastNameInputStyleModifier, setLastNameInputStyleModifier] =
    useState("");
  const [cookies, setCookies] = useCookies();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameValue = event.target[0].value;
    const lastNameValue = event.target[1].value;
    const usernameValue = event.target[2].value;
    const passwordValue = event.target[3].value;

    let inputErrors = false;

    if (passwordValue.length < 8) {
      notifyError("Password must be longer than 8 characters");
      setPasswordInputStyleModifier("--error");

      inputErrors = true;
    }

    if (firstNameValue.length === 0) {
      notifyError("First Name can't be empty");
      setFirstNameInputStyleModifier("--error");
      inputErrors = true;
    }
    if (lastNameValue.length === 0) {
      setLastNameInputStyleModifier("--error");
      notifyError("Last Name can't be empty");
      inputErrors = true;
    }

    if (inputErrors) {
      return 0;
    }

    axios
      .get(constants.endpoints.USER(usernameValue))
      .then((response) => {
        if (response.data.length === 0) {
          const payload = {
            username: usernameValue,
            password: passwordValue,
            fname: firstNameValue,
            lname: lastNameValue,
          };

          return axios.post("http://localhost:3000/users", payload);
        } else {
          notifyError("Username already taken");
          setUsernameInputStyleModifier("--error");
        }
      })
      .then((response) => {
        notifySuccess("Registered");
        setCookies(constants.cookies.COOKIE_USER_LOGGED, true);
        setCookies(constants.cookies.COOKIE_USER_DATA, {
          username: usernameValue,
          lname: lastNameValue,
        });
        notifySuccess("Hello you! Nice logging");
        navigate(constants.routes.USERPAGE);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label className="login-form-label" htmlFor="firstNameField">
          First Name
        </label>
        <input
          id="firstNameFiel"
          className={`login-form-input${firstNameInputStyleModifier}`}
          placeholder="First Name"
        ></input>
        <label className="login-form-label" htmlFor="lastNameLabel">
          Last Name
        </label>
        <input
          id="lastNameLabel"
          className={`login-form-input${lastNameInputStyleModifier}`}
          placeholder="Last Name"
        ></input>
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
          Register
        </button>
      </form>
    </div>
  );
};
