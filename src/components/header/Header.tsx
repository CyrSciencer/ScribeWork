import { NavLink } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Scribe Work</h1>
      <nav className="header-navigation">
        <NavLink to="/wordCreation" className="nav-link">
          Word Creation
        </NavLink>
        <NavLink to="/cosmology" className="nav-link">
          Cosmology
        </NavLink>
      </nav>
    </div>
  );
};
