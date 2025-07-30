import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginForm from "../auth/LoginPage";
import RegisterForm from "../auth/RegisterPage";
import "../../styles/styleAuth.css";

export default function AuthPage() {
  const location = useLocation();
  const defaultIsLogin = location.state?.isLogin ?? true; 

  const [isLogin, setIsLogin] = useState(defaultIsLogin);

  useEffect(() => {
    setIsLogin(defaultIsLogin);
  }, [defaultIsLogin]);

  return (
    <div className="auth">
      <div className="auth-container">
        <div className="auth-buttons">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Registrarse</button>
        </div>
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
}
