import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

export const NavButtonComponent = ({ route, text, icon, className }) => {
  return (
    <li className={`${className} navbar-icon group`}>
      <NavLink to={route}>
        <span className="navbar-list-tooltip group-hover:scale-100">
          {text}
        </span>
        {icon}
      </NavLink>
    </li>
  );
};

NavButtonComponent.propTypes = {
  route: PropTypes.string.isRequired,
  text: PropTypes.string,
  icon: PropTypes.object,
  className: PropTypes.string,
};
