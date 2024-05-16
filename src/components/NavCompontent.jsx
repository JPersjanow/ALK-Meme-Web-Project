import { NavLink } from "react-router-dom";

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to="/hot">Hot</NavLink>
        </li>
        <li>
          <NavLink to="/regular">Regular</NavLink>
        </li>
      </ul>
    </nav>
  );
};
