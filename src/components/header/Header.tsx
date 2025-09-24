import { Link } from "react-router-dom";
import "./Header.css";
export const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">Scribe Work</h1>
      <nav className="header-navigation">
        <Link to="/wordCreation" className="nav-link">
          Word Creation
        </Link>
        <Link to="/cosmology" className="nav-link">
          Cosmology
        </Link>
        <Link to="/scripturgicInscription" className="nav-link">
          Scripturgic Inscription
        </Link>
      </nav>
    </div>
  );
};
