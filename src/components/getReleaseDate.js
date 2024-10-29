import { isReleaseDate } from "./isReleaseDate";

// Funcion que retorna estrenada o no estrenada
export function getReleaseDate(movie) {
  // Usa de otra función
  return isReleaseDate(movie) ? "Estrenada" : "No estrenada";
}
