import * as constants from "../../constants/index.js";
import { useCookies } from "react-cookie";
import { NavLink } from "react-router-dom";
import { BsFire } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import { NavButtonComponent } from "./NavButton.jsx";
import { LogoutButton } from "../UserManagement/LogoutButton.jsx";
import MemeLogo from "../../assets/meme-logo.png";

export const NavComponent = () => {
  const [cookies, setCookies] = useCookies();
  return (
    <nav className="navbar">
      <NavLink to={constants.routes.HOTPAGEROUTE}>
        <img className="navbar-logo" src={MemeLogo} alt="logo" />
      </NavLink>
      <div className="navbar-main">
        <div className="navbar-top">
          <ul className="navbar-list">
            <NavButtonComponent
              route={constants.routes.HOTPAGEROUTE}
              text="Hot Memes 🔥"
              className="navbar-list--hot"
              icon={<BsFire />}
            />
            <NavButtonComponent
              route={constants.routes.REGULARPAGEROUTE}
              text="All Memes 🏠"
              className="navbar-list--regular"
              icon={<BiSolidHome />}
            />
            {cookies.userLogged && (
              <NavButtonComponent
                route={constants.routes.ADDMEMEPAGEROUTE}
                text="Add Meme ➕"
                className="navbar-list--add"
                icon={<MdOutlineAddCircle />}
              />
            )}
            <NavButtonComponent
              route={constants.routes.CONTACTPAGE}
              text="Meet the Makers 🫂"
              className="navbar-list--contact"
              icon={<MdOutlineContactSupport />}
            />
          </ul>
        </div>
        <div className="navbar-bottom">
          <ul className="navbar-list">
            {cookies.userLogged && (
              <NavButtonComponent
                route={constants.routes.USERPAGE}
                text={`${cookies.userData.username}'s profile 👁`}
                className="navbar-list--profile"
                icon={<IoPersonSharp />}
              />
            )}
            {cookies.userLogged ? (
              <LogoutButton
                text="Logout 🚪"
                className="navbar-list--logout"
                icon={<IoLogOut />}
              />
            ) : (
              <NavButtonComponent
                route={constants.routes.LOGINPAGE}
                text="Login 🚪"
                className="navbar-list--login"
                icon={<IoLogIn />}
              />
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
