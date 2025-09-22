import { Link, useLocation } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-content">
        <h1 className="header-title">Lost Wood Scribe Work</h1>
        <nav className="header-navigation">
          <Link
            to="/wordCreation"
            className={`nav-link ${
              location.pathname === "/wordCreation" ? "active" : ""
            }`}
          >
            Word Creation
          </Link>
          <Link
            to="/cosmology"
            className={`nav-link ${
              location.pathname === "/cosmology" ? "active" : ""
            }`}
          >
            Cosmology
          </Link>
        </nav>
      </div>
    </header>
  );
};
