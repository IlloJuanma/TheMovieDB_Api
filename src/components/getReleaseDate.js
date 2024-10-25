import { isReleaseDate } from "./isReleaseDate";

// Funcion que retorna estrenada o no estrenada
export function getReleaseDate(movie) {
    return isReleaseDate(movie) ? "Estrenada" : "No estrenada";
  }
  