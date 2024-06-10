import { NavLink } from "react-router-dom";
import * as constants from "../constants";
import { BsFire } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import MemeLogo from "../assets/meme-logo.png";

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={MemeLogo} alt="logo" />
      <ul className="navbar-list">
        <li className="navbar-list--hot navbar-icon">
          <NavLink to={constants.routes.HOTPAGEROUTE}>
            <BsFire></BsFire>
          </NavLink>
        </li>
        <li className="navbar-list--regular navbar-icon">
          <NavLink to={constants.routes.REGULARPAGEROUTE}>
            <BiSolidHome></BiSolidHome>
          </NavLink>
        </li>
        <li className="navbar-list--add navbar-icon">
          <NavLink to={constants.routes.ADDMEMEPAGEROUTE}>
            <MdOutlineAddCircle></MdOutlineAddCircle>
          </NavLink>
        </li>
        <li className="navbar-list--contact navbar-icon">
          <NavLink to={constants.routes.CONTACTPAGE}>
            <MdOutlineContactSupport></MdOutlineContactSupport>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
