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
            <div>
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
                    <div className="cards-results">
                        <ResultadoCard 
                            imagen="https://via.placeholder.com/120"
                            nombre="Lucía Martínez"
                            titulo="Plomera profesional"
                            calificacion={4}
                            ubicacion="Buenos Aires, Argentina"
                            descripcion="Más de 10 años de experiencia solucionando urgencias en el hogar."
                        />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ResultadosBusqueda;