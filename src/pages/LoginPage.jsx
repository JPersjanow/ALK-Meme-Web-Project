import { IoLogIn } from "react-icons/io5";
import { LoginForm } from "../components/UserManagement/LoginForm.jsx";
import { RegisterButton } from "../components/UserManagement/RegisterButton.jsx";
import { RegisterForm } from "../components/UserManagement/RegisterForm.jsx";
import { useState } from "react";

export const LoginPage = () => {
  const [registerContainerStyleModifier, setRegisterContainerStyleModifier] =
    useState("");

  const showRegisterComponent = () => {
    setRegisterContainerStyleModifier("--visible");
  };

  return (
    <div>
      <div className="title-header--violet-shadow">
        <h2>Welcome!</h2>
        <div className="title-header-icon text-violet-500">
          <IoLogIn></IoLogIn>
        </div>
      </div>
      <div className="login-container">
        <LoginForm></LoginForm>
        <h2>Not a user?</h2>
        <RegisterButton handleOnClick={showRegisterComponent}></RegisterButton>
      </div>
      <div className={`register-container${registerContainerStyleModifier}`}>
        <RegisterForm></RegisterForm>
      </div>
    </div>
  );
};
