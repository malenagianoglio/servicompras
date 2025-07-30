import Buscador from "../components/Buscador";
import ResultadoCard from "../components/ResultadoCard";
import "../styles/styleResults.css";

function ResultadosBusqueda ( ) {
    return(
        <div className="resultados-page">
            <div className="buscador">
                <h1>Encuentra el servicio que necesitas</h1>
                <Buscador/>
            </div>
            <div className="content">
                <div className="filters">
                    <div className="encabezado">
                        <h1>Filtros</h1>
                    </div>
                    <div className="categorias">
                        <p>Categoría</p>
                        <label className="categoria-item">
                            <input type="checkbox"/>
                            Electricidad
                        </label>
                        <label className="categoria-item">
                            <input type="checkbox"/>
                            Plomeria
                        </label>
                        <label className="categoria-item">
                            <input type="checkbox"/>
                            Costura
                        </label>
                    </div>
                    <div class="items">
                        <p>Calificación</p>
                        <div class="item">
                            <input type="checkbox"/>
                            <div class="stars" data-stars="5"></div>
                        </div>
                        <div class="item">
                            <input type="checkbox"/>
                            <div class="stars" data-stars="4"></div>
                        </div>
                        <div class="item">
                            <input type="checkbox"/>
                            <div class="stars" data-stars="3"></div>
                        </div>
                        <div class="item">
                            <input type="checkbox"/>
                            <div class="stars" data-stars="2"></div>
                        </div>
                        <div class="item">
                            <input type="checkbox"/>
                            <div class="stars" data-stars="1"></div>
                        </div>
                    </div>
                </div>
                <div className="cards-results">
                    <div className="card-encabezado">
                        <div className="cards-text">
                        <h1>Resultados para "Electricidad"</h1>
                    </div>
                    <div className="cards-order">
                        <label htmlFor="ordenar">Ordenar por: </label>
                            <select id="ordenar">
                                <option value="">Seleccionar</option>
                                <option value="calificacion">Calificación</option>
                                <option value="ubicacion">Ubicación</option>
                                <option value="nombre">Nombre</option>
                            </select>
                    </div>

                    </div>
                        <ResultadoCard 
                            imagen="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTabVl1YioP9EFCso0C3gP9fGyw7mon_GFiA&s"
                            nombre="Juan Pérez"
                            titulo="Electricista residencial"
                            calificacion={5}
                            ubicacion="Córdoba, Argentina"
                            descripcion="Especialista en instalaciones y reparaciones eléctricas domiciliarias."
                        />
                        <ResultadoCard 
                            imagen="https://blogespanol.se.com/wp-content/uploads/2023/12/AdobeStock_110403040-scaled.jpeg"
                            nombre="Ana Gómez"
                            titulo="Electricista industrial"
                            calificacion={4}
                            ubicacion="Rosario, Argentina"
                            descripcion="Experiencia en mantenimiento eléctrico para fábricas y empresas."
                        />
                        <ResultadoCard 
                            imagen="https://titulae.es/wp-content/uploads/2023/11/que-hace-un-electricista.jpg"
                            nombre="Carlos Ruiz"
                            titulo="Electricista certificado"
                            calificacion={3}
                            ubicacion="Buenos Aires, Argentina"
                            descripcion="Trabajos eléctricos con certificación oficial y garantía de calidad."
                        />
                </div>
            </div>
        </div>
    )
}

export default ResultadosBusqueda;