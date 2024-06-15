import { IoLogIn } from "react-icons/io5";
import { LoginFormComponent } from "../components/UserManagement/LoginFormComponent.jsx";
import { RegisterButtonComponent } from "../components/UserManagement/RegisterButtonComponent.jsx";
import {RegisterFormComponent} from "../components/UserManagement/RegisterFormComponent.jsx";
import {useState} from "react";

export const LoginPage = () => {
    const [registerContainerStyleModifier, setRegisterContainerStyleModifier] =
        useState("");

    const showRegisterComponent = () => {
        setRegisterContainerStyleModifier("--visible")
  }

    return (
      <div>
          <div className="title-header--violet-shadow">
              <h2>Welcome!</h2>
              <div className="title-header-icon text-violet-500">
                  <IoLogIn></IoLogIn>
              </div>
          </div>
          <div className="login-container">
              <LoginFormComponent></LoginFormComponent>
              <h2>Not a user?</h2>
              <RegisterButtonComponent handleOnClick={showRegisterComponent}></RegisterButtonComponent>
          </div>
          <div className={`register-container${registerContainerStyleModifier}`}>
              <RegisterFormComponent></RegisterFormComponent>
          </div>
      </div>
  );
};
