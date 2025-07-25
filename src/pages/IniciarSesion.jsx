import { useState } from 'react';
import '../styles/estilo_registro.css';

function IniciarSesion() {
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
    const contrasena = formulario.contrasena;

    if (!formulario.email.trim()) {
      errores.email = "Este campo es obligatorio";
    } else if (!emailRegex.test(formulario.email)) {
      errores.email = "Ingrese un correo electrónico válido";
    }

    if (!contrasena) {
      errores.contrasena = "Este campo es obligatorio";
    } 

    return errores;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length === 0) {
      setMensaje("Inicio de sesión exitoso");
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
            type = "email"
            name = "email"
            value = {formulario.email}
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
            type = "password"
            name = "contrasena"
            value = {formulario.contrasena}
            onChange={handleChange}
            className={errores.contrasena ? "input-error" : ""}
            />
            {errores.contrasena && <p className="error">{errores.contrasena}</p>}
        </div>
      </div>

        <button className="submit" type="submit">Iniciar Sesión</button>

    </form>
);
}

export default IniciarSesion;

