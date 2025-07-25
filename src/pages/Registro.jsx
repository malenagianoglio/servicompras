import { useState } from 'react';
import '../styles/estilo_registro.css';

function Registro() {
    const [formulario, setFormulario] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    direccion: '',
    ciudad: '',
    codigoPostal: '',
    contrasena: '',
    confirmarContrasena: '',
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
    const nombreApellidoRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telefonoRegex = /^[0-9]{7,15}$/;
    const codigoPostalRegex = /^[0-9]{4,10}$/;
    const contrasena = formulario.contrasena;
    const confirmarContrasena = formulario.confirmarContrasena;

     if (!formulario.nombre.trim()) {
      errores.nombre = "Este campo es obligatorio";
    } else if (!nombreApellidoRegex.test(formulario.nombre)) {
      errores.nombre = "Ingrese un nombre válido";
    }

    if (!formulario.apellido.trim()) {
      errores.apellido = "Este campo es obligatorio";
    } else if (!nombreApellidoRegex.test(formulario.apellido)) {
      errores.apellido = "Ingrese un apellido válido";
    }

    if (!formulario.email.trim()) {
      errores.email = "Este campo es obligatorio";
    } else if (!emailRegex.test(formulario.email)) {
      errores.email = "Ingrese un correo electrónico válido";
    }

    if (!formulario.telefono.trim()) {
      errores.telefono = "Este campo es obligatorio";
    } else if (!telefonoRegex.test(formulario.telefono)) {
      errores.telefono = "Ingrese un número de teléfono válido";
    }

    if (!formulario.direccion.trim()) {
      errores.direccion = "Este campo es obligatorio";
    }

    if (!formulario.ciudad.trim()) {
      errores.ciudad = "Este campo es obligatorio";
    }

    if (!formulario.codigoPostal.trim()) {
      errores.codigoPostal = "Este campo es obligatorio";
    } else if (!codigoPostalRegex.test(formulario.codigoPostal)) {
      errores.codigoPostal = "Ingrese un código postal válido";
    }

    if (!contrasena) {
      errores.contrasena = "Este campo es obligatorio";
    } else {
      if (contrasena.length < 8) errores.contrasena = "La contraseña debe tener al menos 8 caracteres";
      else if (!/[A-Z]/.test(contrasena)) errores.contrasena = "Debe incluir una letra mayúscula";
      else if (!/[a-z]/.test(contrasena)) errores.contrasena = "Debe incluir una letra minúscula";
      else if (!/[0-9]/.test(contrasena)) errores.contrasena = "Debe incluir un número";
    }

    if (!confirmarContrasena) {
      errores.confirmarContrasena = "Este campo es obligatorio";
    } else if (contrasena !== confirmarContrasena) {
      errores.confirmarContrasena = "Las contraseñas no coinciden";
    }


    return errores;
}

const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar();
    if (Object.keys(erroresValidacion).length === 0) {
      setMensaje("Usuario registrado correctamente");
      setErrores({});
    } else {
      setErrores(erroresValidacion);
      setMensaje("No se ha podido registrar el usuario");
    }
  };

return (
    <form noValidate onSubmit={handleSubmit}>
      <div className='fila'>
        <div className='campo'>
            <label>Nombre:</label>
            <input
            type= "text"
            name = "nombre"
            value = {formulario.nombre}
            onChange={handleChange}
            className={errores.nombre ? "input-error" : ""}
            />
            {errores.nombre && <p className="error">{errores.nombre}</p>}
        </div>
        <div className='campo'>
            <label>Apellido:</label>
            <input
            type = "text"
            name= "apellido"
            value = {formulario.apellido}
            onChange = {handleChange}
            className={errores.apellido ? "input-error" : ""}
            />
            {errores.apellido && <p className="error">{errores.apellido}</p>}
        </div>
      </div>
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
        <div className='campo'>
            <label>Teléfono:</label>
            <input
            type = "tel"
            name = "telefono"
            value = {formulario.telefono}
            onChange={handleChange}
            className={errores.telefono ? "input-error" : ""}
            />
            {errores.telefono && <p className="error">{errores.telefono}</p>}
        </div>
      </div>
      <div className='fila'>
        <div className='campo'>
            <label>Dirección:</label>
            <input
            type = "text"
            name = "direccion"
            value = {formulario.direccion}
            onChange={handleChange}
            className={errores.direccion ? "input-error" : ""}
            />
            {errores.direccion && <p className="error">{errores.direccion}</p>}
        </div>
      </div>
      <div className='fila'>
         <div className='campo'>
            <label>Ciudad:</label>
            <input
            type = "text"
            name = "ciudad"
            value = {formulario.ciudad}
            onChange={handleChange}
            className={errores.ciudad ? "input-error" : ""}
            />
            {errores.ciudad && <p className="error">{errores.ciudad}</p>}
        </div>
        <div className='campo'>
            <label>Código Postal:</label>
            <input
            type = "number"
            name = "codigoPostal"
            value = {formulario.codigoPostal}
            onChange={handleChange}
            className={errores.codigoPostal ? "input-error" : ""}
            />
            {errores.codigoPostal && <p className="error">{errores.codigoPostal}</p>}
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
        <div className='campo'>
            <label>Confirmar Contraseña:</label>
            <input
            type = "password"
            name = "confirmarContrasena"
            value = {formulario.confirmarContrasena}
            onChange={handleChange}
            className={errores.confirmarContrasena ? "input-error" : ""}
            />
            {errores.confirmarContrasena && <p className="error">{errores.confirmarContrasena}</p>}
        </div>
      </div>

        <button className="submit" type="submit">Crear Cuenta</button>

    </form>
);
}

export default Registro;

