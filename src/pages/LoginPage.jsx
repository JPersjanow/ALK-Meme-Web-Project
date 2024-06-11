import { IoLogIn } from "react-icons/io5";
import MemeBackground from "../assets/meme-background.png";

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
      <div className="login-form-container">
        <form className="login-form">
          <label className="login-form-label" htmlFor="memeUploadTitle">
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
      <button className="button-login group">
        <IoLogIn className="button-submit-icon group-hover:text-2xl"></IoLogIn>
        Register
      </button>
    </div>
  );
};
