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
