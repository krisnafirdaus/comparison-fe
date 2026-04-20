import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to="/mall"
        style={({ isActive }) => ({
          fontWeight: isActive ? "bold" : "normal",
          color: isActive ? "blue" : "white",
        })}
      >
        Mall
      </NavLink>
    </nav>
  );
};

export default Navbar;
