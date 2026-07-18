import "./Header.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";

function Header() {
  return (
    <header>
      <div className="brand">
        <img
          src={logo}
          alt="FuelTrack logo"
        />

        <h2>FuelTrack</h2>
      </div>

      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/vehicles"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Vehicles
        </NavLink>

        <NavLink
          to="/fuelings"
          className={({ isActive }) =>
            isActive ? "active" : ""
          }
        >
          Fuelings
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;