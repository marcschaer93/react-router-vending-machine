import { NavLink } from "react-router-dom";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/amlou">Amlou</NavLink>
        </li>
        <li>
          <NavLink to="/peppermint">Peppermint</NavLink>
        </li>
        <li>
          <NavLink to="/flatpan">Flatpan</NavLink>
        </li>
      </ul>
    </nav>
  );
};
