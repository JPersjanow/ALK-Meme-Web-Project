import { NavLink } from "react-router-dom";
import * as constants from "../constants/constants";

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={constants.routes.HOTPAGEROUTE}>Hot</NavLink>
        </li>
        <li>
          <NavLink to={constants.routes.REGULARPAGEROUTE}>Regular</NavLink>
        </li>
        <li>
          <NavLink to="/add_meme">Add Meme</NavLink>
        </li>
      </ul>
    </nav>
  );
};
