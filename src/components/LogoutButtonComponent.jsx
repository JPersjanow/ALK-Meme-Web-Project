import { useCookies } from "react-cookie";
import * as constants from "../constants";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "./ToastNotification.jsx";

export const LogoutButtonComponent = ({ text, icon, className }) => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleClick = () => {
    removeCookie(constants.cookies.COOKIE_USER_LOGGED);
    removeCookie(constants.cookies.COOKIE_USER_DATA);
    notifySuccess("User logged out!");
    navigate(constants.routes.HOTPAGEROUTE);
  };

  return (
    <li onClick={handleClick} className={`${className} navbar-icon group `}>
      <span className="navbar-list-tooltip group-hover:scale-100">{text}</span>
      {icon}
    </li>
  );
};
