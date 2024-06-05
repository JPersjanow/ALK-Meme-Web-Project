import { NavLink } from "react-router-dom";
import * as constants from "../constants";

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <img className="logo" src="/MEM-LOGO-WHITE.png" alt="logo" />
      <ul>
        <li>
          <NavLink to={constants.routes.HOTPAGEROUTE}>Hot</NavLink>
        </li>
        <li>
          <NavLink to={constants.routes.REGULARPAGEROUTE}>Regular</NavLink>
        </li>
        <li>
          <NavLink to={constants.routes.ADDMEMEPAGEROUTE}>Add Meme</NavLink>
        </li>
      </ul>
    </nav>
  );
};
