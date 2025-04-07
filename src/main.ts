import { series } from "./data";
import { Serie } from "./Serie";

function agregarFila(id: number, nombre: string, canal: string, temporadas: number): void {
  const tabla = document.getElementById("tabla") as HTMLTableElement;
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

series.forEach((serie: Serie) => {
  agregarFila(serie.id, serie.title, serie.network, serie.season);
});
