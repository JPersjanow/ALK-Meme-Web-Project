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
        <li className="navbar-list--hot navbar-icon group">
          <NavLink to={constants.routes.HOTPAGEROUTE}>
            <span className="navbar-list-tooltip group-hover:scale-100">
              Hot Memes 🔥
            </span>
            <BsFire></BsFire>
          </NavLink>
        </li>
        <li className="navbar-list--regular navbar-icon group">
          <NavLink to={constants.routes.REGULARPAGEROUTE}>
            <span className="navbar-list-tooltip group-hover:scale-100">
              All Memes 🏠
            </span>
            <BiSolidHome></BiSolidHome>
          </NavLink>
        </li>
        <li className="navbar-list--add navbar-icon group">
          <NavLink to={constants.routes.ADDMEMEPAGEROUTE}>
            <span className="navbar-list-tooltip group-hover:scale-100">
              Add Meme ➕
            </span>
            <MdOutlineAddCircle></MdOutlineAddCircle>
          </NavLink>
        </li>
        <li className="navbar-list--contact navbar-icon group">
          <NavLink to={constants.routes.CONTACTPAGE}>
            <span className="navbar-list-tooltip group-hover:scale-100">
              Meet the makers 🫂
            </span>
            <MdOutlineContactSupport></MdOutlineContactSupport>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
