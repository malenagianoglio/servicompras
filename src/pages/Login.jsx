import { useState } from "react";
import IniciarSesion from "./IniciarSesion";
import Registro from "./Registro";
import "../styles/estilo_registro.css";

export default function Login() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div className="container">
                <div className="buttons">
                    <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Iniciar Sesión</button>
                    <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>Registrarse</button>
                </div>
                
                {isLogin ? <IniciarSesion /> : <Registro />}
            </div>
        </>
    );
}
