import * as constants from "../../constants/index.js";
import axios from "axios";
import { notifyError, notifySuccess } from "../Notifications/ToastNotification";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { FaUserPlus } from "react-icons/fa6";

export const RegisterForm = () => {
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
  };

  const registerUser = (usernameValue, lastNameValue) => {
    setCookies(constants.cookies.COOKIE_USER_LOGGED, true);
    setCookies(constants.cookies.COOKIE_USER_DATA, {
      username: usernameValue,
      lname: lastNameValue,
    });
    notifySuccess("Registered! Hello you!");
    navigate(constants.routes.USERPAGE);
  };

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
      passwordValue: passwordValue,
    });

    if (!inputsStatus) {
      return 1;
    }

    axios
      .get(constants.endpoints.USER(usernameValue), constants.endpoints.CONFIG)
      .then((response) => {
        if (response.data.length === 0) {
          const payload = {
            username: usernameValue,
            password: passwordValue,
            fname: firstNameValue,
            lname: lastNameValue,
          };

          return axios.post(constants.endpoints.USERS, payload, constants.endpoints.CONFIG);
        } else {
          throw new Error("Username already taken");
        }
      })
      .then((response) => {
        registerUser(usernameValue, lastNameValue);
      })
      .catch((error) => {
        if (error.message === "Username already taken") {
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
    <div className="user-management-form-container">
      <form onSubmit={handleSubmit} className="user-management-form">
        <label
          className="user-management-form-label"
          htmlFor="firstNameField-register"
        >
          First Name
        </label>
        <input
          id="firstNameField-register"
          className={`user-management-form-input${firstNameInputStyleModifier}`}
          placeholder="First Name"
        ></input>
        <label
          className="user-management-form-label"
          htmlFor="lastNameLabel-register"
        >
          Last Name
        </label>
        <input
          id="lastNameLabel-register"
          className={`user-management-form-input${lastNameInputStyleModifier}`}
          placeholder="Last Name"
        ></input>
        <label
          className="user-management-form-label"
          htmlFor="usernameField-register"
        >
          Username
        </label>
        <input
          id="usernameField-register"
          className={`user-management-form-input${usernameInputStyleModifier}`}
          placeholder="Username"
        ></input>
        <label
          className="user-management-form-label"
          htmlFor="passwordField-register"
        >
          Password
        </label>
        <input
          id="passwordField-register"
          type="password"
          className={`user-management-form-input${passwordInputStyleModifier}`}
          placeholder="Password"
        ></input>
        <button className="button-login group" type="submit">
          <FaUserPlus className="button-submit-icon group-hover:text-2xl" />
          Register
        </button>
      </form>
    </div>
  );
};
