import { NavLink } from "react-router-dom";
import * as constants from "../constants";
import { BsFire } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src="/MEM-LOGO-WHITE.png" alt="logo" />
      <ul className="navbar-list">
        <li className="navbar-list-hot">
          <NavLink to={constants.routes.HOTPAGEROUTE}><BsFire></BsFire></NavLink>
        </li>
        <li className="navbar-list-regular">
          <NavLink to={constants.routes.REGULARPAGEROUTE}><BiSolidHome></BiSolidHome></NavLink>
        </li>
        <li className="navbar-list-add">
          <NavLink to={constants.routes.ADDMEMEPAGEROUTE}><MdOutlineAddCircle></MdOutlineAddCircle></NavLink>
        </li>
      </ul>
    </nav>
  );
};
