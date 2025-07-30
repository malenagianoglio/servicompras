import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import "../../styles/styleAuth.css";

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [formulario, setFormulario] = useState({
    email: '',
    contrasena: '',
  });

  const [errores, setErrores] = useState({});
  const [mensaje, setMensaje] = useState("");

  function handleChange(event) {
    setFormulario({
      ...formulario,
      [event.target.name]: event.target.value
    });
    setErrores({ ...errores, [event.target.name]: "" });
    setMensaje("");
  }

  function validar() {
    const errores = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formulario.email.trim()) {
      errores.email = "Este campo es obligatorio";
    } else if (!emailRegex.test(formulario.email)) {
      errores.email = "Ingrese un correo electrónico válido";
    }

    if (!formulario.contrasena) {
      errores.contrasena = "Este campo es obligatorio";
    }

    return errores;
  }

  const handleSubmit = (e) => {
  e.preventDefault();
  const erroresValidacion = validar();

  const emailValido = "admin@gmail.com";
  const contrasenaValida = "1234";

  if (Object.keys(erroresValidacion).length === 0) {
    if (
      formulario.email === emailValido &&
      formulario.contrasena === contrasenaValida
    ) {
      login(); 
      navigate("/");
    } else {
      setMensaje("Correo o contraseña incorrectos");
    }
    setErrores({});
  } else {
    setErrores(erroresValidacion);
    setMensaje("No se ha podido iniciar sesión");
  }
};


  return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='fila'>
        <div className='campo'>
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formulario.email}
            onChange={handleChange}
            className={errores.email ? "input-error" : ""}
          />
          {errores.email && <p className="error">{errores.email}</p>}
        </div>
      </div>

      <div className='fila'>
        <div className='campo'>
          <label>Contraseña:</label>
          <input
            type="password"
            name="contrasena"
            value={formulario.contrasena}
            onChange={handleChange}
            className={errores.contrasena ? "input-error" : ""}
          />
          {errores.contrasena && <p className="error">{errores.contrasena}</p>}
        </div>
      </div>

      <button className="submit" type="submit">Iniciar Sesión</button>
      {mensaje && <p className="mensaje">{mensaje}</p>}
    </form>
  );
}

export default LoginPage;
