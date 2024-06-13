import { IoLogIn } from "react-icons/io5";
import MemeBackground from "../assets/meme-background.png";
import { LoginFormComponent } from "../components/UserManagement/LoginFormComponent.jsx";
import { RegisterButtonComponent } from "../components/UserManagement/RegisterButtonComponent.jsx";

export const LoginPage = () => {
  return (
    <div
      className="background login-container"
      style={{ backgroundImage: `url(${MemeBackground})` }}
    >
      <div className="title-header--violet-shadow">
        <h2>Welcome!</h2>
        <div className="title-header-icon text-violet-500">
          <IoLogIn></IoLogIn>
        </div>
      </div>
      <LoginFormComponent></LoginFormComponent>
      <RegisterButtonComponent></RegisterButtonComponent>
    </div>
  );
};
