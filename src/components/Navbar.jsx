import { useLocation, useNavigate } from "react-router-dom";
import "../styles/styleNavbar.css";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();

    const isLoginPage = location.pathname === "/login";

    if (isLoginPage) {
        return (
        <nav className="navbar">
            <div className="navbar-logo">
            <a href="/">ServiCompras</a>
            </div>
        </nav>
    );
  }

  return (
    <nav className="navbar">
        <div className="navbar-container">
            <div className="navbar-logo">
                <a href="/">ServiCompras</a>
            </div>
            <div className="navbar-buttons">
                <button className="btn-login" onClick={() => navigate("/login", { state: { isLogin: true } })}>Iniciar Sesión</button>
                <button className="btn-register" onClick={() => navigate("/login", { state: { isLogin: false } })}>Registrarse</button>
                <button className="btn-publicar" onClick={() => navigate("/publicar")}>Publicar Servicio</button>
            </div>
        </div>
    </nav>
  );
}

export default Navbar;
