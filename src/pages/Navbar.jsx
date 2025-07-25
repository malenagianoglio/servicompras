import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/login" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Iniciar sesión
      </NavLink>
      <NavLink to="/registro" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
        Registrarse
      </NavLink>
    </nav>
  );
}
