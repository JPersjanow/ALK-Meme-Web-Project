import * as constants from "../../constants/index.js";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { notify } from "../Notifications/ToastNotification.jsx";

export const LogoutButtonComponent = ({ text, icon, className }) => {
  const [cookies, setCookies, removeCookie] = useCookies();
  const navigate = useNavigate();

  const handleClick = () => {
    removeCookie(constants.cookies.COOKIE_USER_LOGGED);
    removeCookie(constants.cookies.COOKIE_USER_DATA);
    notify("See you soon!");
    navigate(constants.routes.HOTPAGEROUTE);
  };

  return (
    <li onClick={handleClick} className={`${className} navbar-icon group `}>
      <span className="navbar-list-tooltip group-hover:scale-100">{text}</span>
      {icon}
    </li>
  );
};

LogoutButtonComponent.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
};
