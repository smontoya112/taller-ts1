import { series } from "./data.js";
function agregarFila(serie, id, nombre, canal, temporadas, url) {
    const tabla = document.getElementById("tabla");
    const cuerpo = tabla.getElementsByTagName("tbody")[0];
    const fila = cuerpo.insertRow();
    const celdaId = fila.insertCell();
    celdaId.textContent = id.toString();
    const celdaNombre = fila.insertCell();
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = nombre;
    link.className = "btn btn-link p-0 m-0 align-baseline";
    link.addEventListener("click", (e) => {
        e.preventDefault();
        mostrarDetalleSerie(serie);
    });
    celdaNombre.appendChild(link);
    const celdaCanal = fila.insertCell();
    celdaCanal.textContent = canal;
    const celdaTemporadas = fila.insertCell();
    celdaTemporadas.textContent = temporadas.toString();
}
let e = 0;
let s = 0;
series.forEach((serie) => {
    console.log("---");
    console.log(`ID: ${serie.id}`);
    console.log(`Serie: ${serie.title}`);
    console.log(`Canal: ${serie.network}`);
    console.log(`Temporadas: ${serie.season}`);
    console.log(`Descripcion: ${serie.description}`);
    console.log(`URL: ${serie.url}`);
    console.log(`Imagen: ${serie.image}`);
    console.log("---");
    agregarFila(serie, serie.id, serie.title, serie.network, serie.season, serie.url);
    e++;
    s += serie.season;
});
const avg = s / e;
function promedio() {
    const p = document.getElementById("p");
    p.textContent = `Promedio de temporadas: ${avg}`;
}
function mostrarDetalleSerie(serie) {
    const detalle = document.getElementById("detalleSerie");
    detalle.innerHTML = `
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${serie.image}" class="img-fluid rounded-start" alt="${serie.title}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${serie.title}</h5>
            <p class="card-text">${serie.description}</p>
            <a href="${serie.url}" class="btn btn-primary" target="_blank">Ver sitio oficial</a>
          </div>
        </div>
      </div>
    </div>
  `;
}
promedio();
