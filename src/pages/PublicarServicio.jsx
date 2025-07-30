import '../styles/stylePublicarServicio.css'; 

function PublicarServicio () {
    
  return (
   <div style={{ padding: '2rem' }}>
      <h1>Publicar Servicio</h1>

      {/* Div general que contiene todos los cuadraditos */}
      <div className="form-container">

        {/* Primer cuadradito: Información básica */}
        <div className="form-section">
          <h2>Información básica</h2>

          <label htmlFor="categoria">Categoría:</label>
          <select id="categoria" name="categoria">
            <option value="">Seleccionar categoría</option>
            <option value="plomeria">Plomería</option>
            <option value="electricidad">Electricidad</option>
            <option value="modista">Modista</option>
          </select>

          <label htmlFor="tituloServicio">Título del servicio:</label>
          <input
            type="text"
            id="tituloServicio"
            name="tituloServicio"
            placeholder="Ej: Reparación de canillas"
          />
        </div>

      </div>
    </div>
  );
  
}


export default PublicarServicio;