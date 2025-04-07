import { series } from "./data";
function agregarFila(id, nombre, canal, temporadas) {
    const tabla = document.getElementById("tabla");
    const cuerpo = tabla.getElementsByTagName("tbody")[0];
    const fila = cuerpo.insertRow();
    const celdaId = fila.insertCell();
    celdaId.textContent = id.toString();
    const celdaNombre = fila.insertCell();
    celdaNombre.textContent = nombre;
    const celdaCanal = fila.insertCell();
    celdaCanal.textContent = canal;
    const celdaTemporadas = fila.insertCell();
    celdaTemporadas.textContent = temporadas.toString();
}
series.forEach((serie) => {
    agregarFila(serie.id, serie.title, serie.network, serie.season);
});
