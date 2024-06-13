import { useCookies } from "react-cookie";
import { NavButtonComponent } from "./NavButtonCompontent";
import { LogoutButtonComponent } from "./LogoutButtonComponent.jsx";
import * as constants from "../constants";
import { BsFire } from "react-icons/bs";
import { BiSolidHome } from "react-icons/bi";
import { MdOutlineAddCircle } from "react-icons/md";
import { MdOutlineContactSupport } from "react-icons/md";
import { IoLogIn } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { IoPersonSharp } from "react-icons/io5";
import MemeLogo from "../assets/meme-logo.png";

export const NavComponent = () => {
  const [cookies, setCookies] = useCookies();
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={MemeLogo} alt="logo" />
      <div className="navbar-main">
        <div className="navbar-top">
          <ul className="navbar-list">
            <NavButtonComponent
              route={constants.routes.HOTPAGEROUTE}
              text="Hot Memes 🔥"
              className="navbar-list--hot"
              icon={<BsFire />}
            ></NavButtonComponent>
            <NavButtonComponent
              route={constants.routes.REGULARPAGEROUTE}
              text="All Memes 🏠"
              className="navbar-list--regular"
              icon={<BiSolidHome />}
            ></NavButtonComponent>
            {cookies.userLogged && (
              <NavButtonComponent
                route={constants.routes.ADDMEMEPAGEROUTE}
                text="Add Meme ➕"
                className="navbar-list--add"
                icon={<MdOutlineAddCircle />}
              ></NavButtonComponent>
            )}
            <NavButtonComponent
              route={constants.routes.CONTACTPAGE}
              text="Meet the Makers 🫂"
              className="navbar-list--contact"
              icon={<MdOutlineContactSupport />}
            ></NavButtonComponent>
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
              ></NavButtonComponent>
            )}
            {cookies.userLogged ? (
              <LogoutButtonComponent
                text="Logout 🚪"
                className="navbar-list--logout"
                icon={<IoLogOut />}
              ></LogoutButtonComponent>
            ) : (
              <NavButtonComponent
                route={constants.routes.LOGINPAGE}
                text="Login 🚪"
                className="navbar-list--login"
                icon={<IoLogIn />}
              ></NavButtonComponent>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};
