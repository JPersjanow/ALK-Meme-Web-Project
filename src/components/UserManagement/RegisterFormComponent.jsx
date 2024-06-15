import * as constants from "../../constants/index.js";
import axios from "axios";
import { notifyError, notifySuccess } from "../Notifications/ToastNotification";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";

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

  const returnUserInputsStatus = (userInputs) => {
    let userInputStatus = true;
    if (userInputs.passwordValue.length < 8) {
      notifyError("Password must be longer than 8 characters");
      setPasswordInputStyleModifier("--error");
      userInputStatus = false;
    }
    if (userInputs.usernameValue.length === 0) {
      notifyError("Username can't be empty");
      setUsernameInputStyleModifier("--error");
      userInputStatus = false;
    }
    if (userInputs.firstNameValue.length === 0) {
      notifyError("First Name can't be empty");
      setFirstNameInputStyleModifier("--error");
      userInputStatus = false;
    }
    if (userInputs.lastNameValue.length === 0) {
      setLastNameInputStyleModifier("--error");
      notifyError("Last Name can't be empty");
      userInputStatus = false;
    }

    return userInputStatus;
  }

  const registerUser = (usernameValue, lastNameValue) => {
    setCookies(constants.cookies.COOKIE_USER_LOGGED, true);
    setCookies(constants.cookies.COOKIE_USER_DATA, {
      username: usernameValue,
      lname: lastNameValue,
    });
    notifySuccess("Registered! Hello you!");
    navigate(constants.routes.USERPAGE);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const firstNameValue = event.target[0].value;
    const lastNameValue = event.target[1].value;
    const usernameValue = event.target[2].value;
    const passwordValue = event.target[3].value;

    const inputsStatus = returnUserInputsStatus({
      firstNameValue: firstNameValue,
      lastNameValue: lastNameValue,
      usernameValue: usernameValue,
      passwordValue: passwordValue});

    if (!inputsStatus) {
      return 1;
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

          return axios.post(constants.endpoints.USERS, payload);
        } else {
          throw new Error("Username already taken");
        }
      })
      .then((response) => {
        registerUser(usernameValue, lastNameValue);
      })
      .catch((error) => {
        if(error.message === "Username already taken") {
          notifyError(error.message);
          setUsernameInputStyleModifier("--error");
        } else {
          notifyError("Error occurred while registering user");
          navigate(constants.routes.ERRORROUTE, {
            state: { error: error.message, errorCode: error.code },
          });
        }
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
          <FaUserPlus className="button-submit-icon group-hover:text-2xl"></FaUserPlus>
          Register
        </button>
      </form>
    </div>
  );
};
