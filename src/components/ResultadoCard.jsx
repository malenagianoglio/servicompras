function ResultadoCard({ imagen, nombre, titulo, calificacion, ubicacion, descripcion }) {
  return (
    <div className="resultado-card">
      <img src={imagen} alt={nombre} className="card-imagen" />
      <div className="card-info">
        <h2>{nombre}</h2>
        <h4>{titulo}</h4>
        <div className="estrellas">
          {"★".repeat(calificacion)}{"☆".repeat(5 - calificacion)}
        </div>
        <p className="ubicacion"> {ubicacion}</p>
        <p className="descripcion">{descripcion}</p>
        <button className="btn-perfil">Ver perfil</button>
      </div>
    </div>
  );
}

export default ResultadoCard;
