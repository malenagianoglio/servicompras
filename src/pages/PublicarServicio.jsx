import { useEffect, useState } from 'react';
import '../styles/stylePublicarServicio.css'; 

function PublicarServicio () {
   const [provincias, setProvincias] = useState([]);
  const [ciudades, setCiudades] = useState([]);
  const [provinciaSeleccionada, setProvinciaSeleccionada] = useState('');
  const [franjasHorarias, setFranjasHorarias] = useState([{ inicio: '', fin: '' }]);
  const [diasSeleccionados, setDiasSeleccionados] = useState([]);

  
  useEffect(() => {
    fetch('https://apis.datos.gob.ar/georef/api/provincias')
      .then(res => res.json())
      .then(data => {
        const lista = data.provincias.map(p => p.nombre).sort();
        setProvincias(lista);
      })
      .catch(error => console.error('Error cargando provincias:', error));
  }, []);

  
  useEffect(() => {
    if (provinciaSeleccionada) {
      fetch(`https://apis.datos.gob.ar/georef/api/municipios?provincia=${provinciaSeleccionada}&max=100`)
        .then(res => res.json())
        .then(data => {
          const lista = data.municipios.map(m => m.nombre).sort();
          setCiudades(lista);
        })
        .catch(error => console.error('Error cargando ciudades:', error));
    }
  }, [provinciaSeleccionada]);

  const handleAgregarFranja = () => {
    setFranjasHorarias([...franjasHorarias, { inicio: '', fin: '' }]);
  };

  const handleFranjaChange = (index, field, value) => {
    const nuevasFranjas = [...franjasHorarias];
    nuevasFranjas[index][field] = value;
    setFranjasHorarias(nuevasFranjas);
  };

  const handleDiaSeleccionado = (dia) => {
    setDiasSeleccionados(prev =>
      prev.includes(dia)
        ? prev.filter(d => d !== dia)
        : [...prev, dia]
    );
  };

  return (
    <div className="publicar-page">
      <h1 className="publicar-titulo">Publicar Servicio</h1>
      <div className="publicar-form-container">
        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Información básica</h2>

          <label htmlFor="categoria" className="publicar-label">Categoría:</label>
          <select id="categoria" name="categoria" className="publicar-select">
            <option value="">Seleccionar categoría</option>
            <option value="plomeria">Plomería</option>
            <option value="electricidad">Electricidad</option>
            <option value="modista">Modista</option>
          </select>

          <label htmlFor="tituloServicio" className="publicar-label">Título del servicio:</label>
          <input
            type="text"
            id="tituloServicio"
            name="tituloServicio"
            className="publicar-input"
            placeholder="Ej: Reparación de canillas"
          />
        </div>

        
        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Ubicación y área de servicio</h2>

          <label htmlFor="provincia" className="publicar-label">Provincia:</label>
          <select
            id="provincia"
            name="provincia"
            className="publicar-select"
            value={provinciaSeleccionada}
            onChange={e => setProvinciaSeleccionada(e.target.value)}
          >
            <option value="">Seleccionar provincia</option>
            {provincias.map((prov, i) => (
              <option key={i} value={prov}>{prov}</option>
            ))}
          </select>

          <label htmlFor="ciudad" className="publicar-label">Ciudad:</label>
          <select id="ciudad" name="ciudad" className="publicar-select">
            <option value="">Seleccionar ciudad</option>
            {ciudades.map((ciudad, i) => (
              <option key={i} value={ciudad}>{ciudad}</option>
            ))}
          </select>

          <label htmlFor="areaServicio" className="publicar-label">Área de servicio:</label>
          <input
            type="text"
            id="areaServicio"
            name="areaServicio"
            className="publicar-input"
            placeholder="Ej: Solo en Córdoba Capital"
          />

          <label className="publicar-label">¿Cobrás por traslado?</label>
          <div className="publicar-checkbox-group">
            <label>
              <input type="radio" name="cobroTraslado" value="si" />
              Sí
            </label>
            <label>
              <input type="radio" name="cobroTraslado" value="no" />
              No
            </label>
          </div>
        </div>

        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Descripción del servicio</h2>

          <label htmlFor="descripcion" className="publicar-label">Contanos sobre el servicio que ofrecés:</label>
          <textarea
            id="descripcion"
            name="descripcion"
            className="publicar-textarea"
            placeholder="Ej: Soy electricista con 10 años de experiencia, me especializo en..."
            rows="6"
          ></textarea>
        </div>

        
        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Experiencia y certificaciones</h2>

          <label htmlFor="experiencia" className="publicar-label">Años de experiencia:</label>
          <input
            type="number"
            id="experiencia"
            name="experiencia"
            className="publicar-input"
            placeholder="Ej: 5"
            min="0"
          />

          <label htmlFor="certificados" className="publicar-label">Certificados o titulaciones:</label>
          <input
            type="text"
            id="certificados"
            name="certificados"
            className="publicar-input"
            placeholder="Ej: Técnico electricista, título universitario, etc."
          />
        </div>

        
        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Disponibilidad horaria</h2>

          <h3 className="publicar-subsubtitulo">Días laborales</h3>
          <div className="publicar-dias-checkboxes">
            {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'].map(dia => (
              <label key={dia} className="publicar-dia-item">
                <input
                  type="checkbox"
                  checked={diasSeleccionados.includes(dia)}
                  onChange={() => handleDiaSeleccionado(dia)}
                />
                {dia}
              </label>
            ))}
          </div>

          <h3 className="publicar-subsubtitulo">Franja horaria</h3>
          {franjasHorarias.map((franja, index) => (
            <div key={index} className="publicar-franja">
              <label className="publicar-label">Inicio:</label>
              <input
                type="time"
                value={franja.inicio}
                onChange={(e) => handleFranjaChange(index, 'inicio', e.target.value)}
                className="publicar-input"
              />
              <label className="publicar-label">Fin:</label>
              <input
                type="time"
                value={franja.fin}
                onChange={(e) => handleFranjaChange(index, 'fin', e.target.value)}
                className="publicar-input"
              />
            </div>
          ))}

          <button type="button" onClick={handleAgregarFranja} className="publicar-boton-agregar">
            Agregar otra franja horaria
          </button>
        </div>

        <div className="publicar-form-section">
          <h2 className="publicar-subtitulo">Imágenes y galería</h2>

          <label htmlFor="galeria" className="publicar-label">Subí imágenes o videos relacionados con tu servicio:</label>
          <input
            type="file"
            id="galeria"
            name="galeria"
            className="publicar-input"
            accept="image/*,video/*"
            multiple
          />
        </div>

      </div>
      <div className="publicar-submit-container">
        <button type="submit" className="publicar-submit-button">
          Publicar servicio
        </button>
      </div>
    </div>
  )
}

export default PublicarServicio;
